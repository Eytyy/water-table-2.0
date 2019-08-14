import React, { Component } from "react";
import PropTypes from "prop-types";

import { scaleLinear, format } from "d3";
import { socket } from "../../../api";

import population from "../../../../data/population.1";
import PopulationCircle from "./PopulationCircle";

class PopulationVisulization extends Component {
  width = 1080;
  height = 1300;
  canvas = React.createRef();
  ctx;
  next_year_population;
  previous_year_population;
  reverse = false;
  population_data = population;
  nodesRangeCount;
  rendered = 0;

  radiusRangeSize;
  current_radius = 0;
  next_radius = 0;

  rf = null;
  stop = false;
  frameCount = 0;
  fps = 10;
  fpsInterval;
  startTime;
  now;
  then;
  elapsed;

  allPopulation = [];

  state = {
    activeYear: 1960
  };

  getCurrentPopulation = () => {
    let index = this.population_data.findIndex(
      ({ year }) => year === this.next_year_population
    );

    return {
      count: this.population_data[index].population,
      index
    };
  };

  setNodesRangeCount = () => {
    const { population: MinPopulation } = population[0];
    const { population: MaxPopulation } = population[population.length - 1];

    this.nodesRangeCount = scaleLinear()
      .domain([MinPopulation, MaxPopulation])
      .range([20, 100])
      .clamp(true);
  };

  getNodesRangeCount = num => {
    return Math.ceil(this.nodesRangeCount(num));
  };

  setRadiusRangeSize = () => {
    const populationLength = population.length;
    this.radiusRangeSize = scaleLinear()
      .domain([0, populationLength])
      .range([30, 200])
      .clamp(true);
  };

  getRadius() {
    let r = 0;
    if (this.reverse) {
      this.current_radius -= 1;
      r =
        this.current_radius <= this.next_radius
          ? this.next_radius
          : this.current_radius;
    } else {
      this.current_radius += 1;
      r =
        this.current_radius >= this.next_radius
          ? this.next_radius
          : this.current_radius;
    }
    this.current_radius = Math.ceil(r);
    return this.current_radius;
  }

  setupPopulationCircles = () => {
    const max = this.getNodesRangeCount(
      population[population.length - 1].population
    );
    for (let i = 0; i < max; i++) {
      let obj = new PopulationCircle({
        width: this.width,
        height: this.height,
        ctx: this.ctx
      });
      this.allPopulation.push(obj);
    }
  };

  drawPopulation = () => {
    const ctx = this.ctx || this.canvas.current.getContext("2d");
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    let radius = this.getRadius();
    for (let i = 0; i < this.rendered; i++) {
      this.allPopulation[i].update(radius);
    }
  };

  update = () => {
    this.raf = requestAnimationFrame(this.update);
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.drawPopulation();
      if (!this.reverse) {
        if (this.rendered < this.next_year_population) {
          this.rendered += 1;
        } else if (this.current_radius >= this.next_radius) {
          this.reset();
        }
      }
      if (this.reverse) {
        if (this.rendered > this.next_year_population) {
          this.rendered -= 1;
        } else if (this.current_radius <= this.next_radius) {
          this.reset();
        }
      }
    }
  };

  moveCircles = () => {
    this.raf = requestAnimationFrame(this.moveCircles);
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.rendered; i++) {
        this.allPopulation[i].move();
      }
    }
  };

  startIdleAnimation = () => {
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;

    this.moveCircles();
  };

  stopRunningAnimation = () => {
    cancelAnimationFrame(this.raf);
    this.raf = null;
  };

  reset = () => {
    this.stopRunningAnimation();
    this.rendered = this.previous_year_population = this.next_year_population;
    this.startIdleAnimation();
  };

  updateActiveYear = payload => {
    // cancel running animation
    cancelAnimationFrame(this.raf);
    this.raf = null;

    this.setState({
      activeYear: payload
    });

    let yearIndex = population.findIndex(
      ({ year }) => year === parseInt(payload, 10)
    );
    let { population: nextYearPopulation } = this.population_data[yearIndex];
    let nextRange = this.getNodesRangeCount(nextYearPopulation);
    this.next_year_population = nextRange;
    this.reverse = this.previous_year_population > nextRange ? true : false;
    this.next_radius =
      this.rendered === 0
        ? this.radiusRangeSize(yearIndex)
        : this.reverse
        ? this.radiusRangeSize(yearIndex - 1)
        : this.radiusRangeSize(yearIndex + 1);
    this.rendered = this.previous_year_population;

    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;

    this.update();
  };

  listenToIncomingEvents = () => {
    socket.on("controller", message => {
      const { event, payload } = message;
      switch (event) {
        case "yearClicked":
          this.updateActiveYear(payload);
          break;
        default:
          return;
      }
    });
  };

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    this.listenToIncomingEvents();
    this.setNodesRangeCount();
    this.setRadiusRangeSize();
    this.setupPopulationCircles();
    this.rendered = this.previous_year_population = 0;
    this.next_year_population = this.getNodesRangeCount(
      population[0].population
    );
    this.drawPopulation();
  }

  componentWillUnmount() {
    this.stopRunningAnimation();
  }

  getPopulation = () => {
    return format(",.0f")(
      this.population_data.find(
        ({ year }) => year === parseInt(this.state.activeYear, 10)
      ).population
    ).replace(/,/g, " ");
  };

  render() {
    return (
      <div id="population__visualization" className="visualization-wrapper">
        <canvas
          className="visualization"
          width={this.width}
          height={this.height}
          ref={this.canvas}
        />
        <div className="visualization__content">
          <h2 className="visualization__content__label">Population</h2>
          <div className="visualization__content__data">
            {this.getPopulation()}
          </div>
        </div>
      </div>
    );
  }
}

export default PopulationVisulization;
