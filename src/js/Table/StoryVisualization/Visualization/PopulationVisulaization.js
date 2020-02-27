import React, { useRef, useState, useEffect } from "react";
import { scaleLinear, format } from "d3";
import styled from "styled-components";

import { socket } from "../../../api";
import population from "../../../../data/population.1";
import PopulationCircle from "./PopulationCircle";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1300px;

  .visualization {
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: absolute;
    left: 60px;
    top: 60px;
  }
`;

const PopulationVisulization = () => {
  const width = 1080;
  const height = 1300;
  const canvas = useRef();
  const raf = useRef();

  let ctx;
  let next_year_population;
  let previous_year_population;
  let reverse = false;
  let population_data = population;
  let nodesRangeCount;
  let rendered = 0;

  let radiusRangeSize;
  let current_radius = 0;
  let next_radius = 0;

  let stop = false;
  let frameCount = 0;
  let fps = 10;
  let fpsInterval;
  let startTime;
  let now;
  let then;
  let elapsed;

  let allPopulation = [];

  const [activeYear, setActiveYear] = useState(1960);

  const onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "yearClicked":
        updateActiveYear(payload);
        break;
      default:
        return;
    }
  };

  const startListeningToIncomingEvents = () =>
    socket.on("controller", onIncomingEvents);

  const stopListeningToIncomingEvents = () =>
    socket.off("controller", onIncomingEvents);

  useEffect(() => {
    ctx = canvas.current.getContext("2d");
    startListeningToIncomingEvents();
    setNodesRangeCount();
    setRadiusRangeSize();
    setupPopulationCircles();
    rendered = previous_year_population = 0;
    next_year_population = getNodesRangeCount(population[0].population);
    drawPopulation();
    return function cleanup() {
      stopRunningAnimation();
      stopListeningToIncomingEvents();
    };
  }, []);

  const getCurrentPopulation = () => {
    let index = population_data.findIndex(
      ({ year }) => year === next_year_population
    );

    return {
      count: population_data[index].population,
      index
    };
  };

  const setNodesRangeCount = () => {
    const { population: MinPopulation } = population[0];
    const { population: MaxPopulation } = population[population.length - 1];

    nodesRangeCount = scaleLinear()
      .domain([MinPopulation, MaxPopulation])
      .range([20, 100])
      .clamp(true);
  };

  const getNodesRangeCount = num => {
    return Math.ceil(nodesRangeCount(num));
  };

  const setRadiusRangeSize = () => {
    const populationLength = population.length;
    radiusRangeSize = scaleLinear()
      .domain([0, populationLength])
      .range([30, 200])
      .clamp(true);
  };

  const getRadius = () => {
    let r = 0;
    if (reverse) {
      current_radius -= 1;
      r = current_radius <= next_radius ? next_radius : current_radius;
    } else {
      current_radius += 1;
      r = current_radius >= next_radius ? next_radius : current_radius;
    }
    current_radius = Math.ceil(r);
    return current_radius;
  };

  const setupPopulationCircles = () => {
    const max = getNodesRangeCount(
      population[population.length - 1].population
    );
    for (let i = 0; i < max; i++) {
      let obj = new PopulationCircle({
        width: width,
        height: height,
        ctx: ctx
      });
      allPopulation.push(obj);
    }
  };

  const drawPopulation = () => {
    const ctx = ctx || canvas.current.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    let radius = getRadius();
    for (let i = 0; i < rendered; i++) {
      allPopulation[i].update(radius);
    }
  };

  const update = () => {
    raf.current = requestAnimationFrame(update);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      drawPopulation();
      if (!reverse) {
        if (rendered < next_year_population) {
          rendered += 1;
        } else if (current_radius >= next_radius) {
          reset();
        }
      }
      if (reverse) {
        if (rendered > next_year_population) {
          rendered -= 1;
        } else if (current_radius <= next_radius) {
          reset();
        }
      }
    }
  };

  const moveCircles = () => {
    raf.current = requestAnimationFrame(moveCircles);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < rendered; i++) {
        allPopulation[i].move();
      }
    }
  };

  const startIdleAnimation = () => {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    moveCircles();
  };

  const stopRunningAnimation = () => {
    cancelAnimationFrame(raf.current);
    raf.current = null;
  };

  const reset = () => {
    stopRunningAnimation();
    rendered = previous_year_population = next_year_population;
    startIdleAnimation();
  };

  const updateActiveYear = payload => {
    // cancel running animation
    cancelAnimationFrame(raf.current);
    raf.current = null;

    setActiveYear(payload);

    let yearIndex = population.findIndex(
      ({ year }) => year === parseInt(payload, 10)
    );
    let { population: nextYearPopulation } = population_data[yearIndex];
    let nextRange = getNodesRangeCount(nextYearPopulation);
    next_year_population = nextRange;
    reverse = previous_year_population > nextRange ? true : false;
    next_radius =
      rendered === 0
        ? radiusRangeSize(yearIndex)
        : reverse
        ? radiusRangeSize(yearIndex - 1)
        : radiusRangeSize(yearIndex + 1);
    rendered = previous_year_population;

    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    update();
  };

  const getPopulation = () => {
    return format(",.0f")(
      population_data.find(({ year }) => year === parseInt(activeYear, 10))
        .population
    ).replace(/,/g, " ");
  };

  return (
    <Wrapper className="visualization-wrapper">
      <canvas
        className="visualization"
        width={width}
        height={height}
        ref={canvas}
      />
      <div className="content">
        <h2 className="content__label">Population</h2>
        <div className="content__data">{getPopulation()}</div>
      </div>
    </Wrapper>
  );
};

export default PopulationVisulization;
