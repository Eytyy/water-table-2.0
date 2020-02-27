import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { socket } from "../../../../api";

import PoolsSVG from "./PoolsSvg";
import PoolText from "./PoolText";
import cutout from "../../../../../cutout-new.png";
import MapLayerDescription from "../../MapLayerDescription";
import WithContext from "../../WithContext";

const PoolsStyles = styled.div``;
const Pools = ({ config, activeLayer }) => {
  const [activePool, setActivePool] = useState(null);
  const canvas = useRef(null);
  const raf = useRef(null);
  const width = "1080";
  const height = "1540";
  let ctx;
  let pools = [];
  let stop = false;
  let frameCount = 0;
  let fps = 15;
  let fpsInterval;
  let startTime;
  let now;
  let then;
  let elapsed;

  const particles = Array.from({ length: 140000 }, () => [
    Math.round(Math.random() * (width - 1)),
    Math.round(Math.random() * (height - 1))
  ]);

  useEffect(() => {
    setup();
    return function cleanup() {
      cancelAnimationFrame(raf.current);
      stopListeningToIncomingEvents();
      raf.current = null;
    };
  }, []);

  useEffect(() => {
    setActivePool(null);
  }, [activeLayer]);

  const setup = () => {
    ctx = canvas.current.getContext("2d");
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
    startListeningToIncomingEvents();
  };

  const draw = () => {
    const ctx = ctx || canvas.current.getContext("2d");

    ctx.clearRect(0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const index = 4 * (particle[0] + particle[1] * width);
      data[index + 0] = 255;
      data[index + 1] = 255;
      data[index + 2] = 255;
      data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const animate = () => {
    raf.current = requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      draw();

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle[0] = Math.max(
          0,
          Math.min(width - 1, Math.round(particle[0] + Math.random() * 2 - 1))
        );
        particle[1] = Math.max(
          0,
          Math.min(height - 1, Math.round(particle[1] + Math.random() * 2 - 1))
        );
      }
    }
  };

  const onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "poolClicked":
        setActivePool(payload);
        break;
      default:
        return;
    }
  };

  const startListeningToIncomingEvents = () => {
    socket.on("controller", onIncomingEvents);
  };

  const stopListeningToIncomingEvents = () => {
    socket.off("controller", onIncomingEvents);
  };

  return (
    <PoolsStyles
      className={`layer layer--pools ${
        activeLayer === "natural" || activeLayer === "surface"
          ? "layer--is-active"
          : "layer--is-hidden"
      }`}
    >
      <canvas id="pools" width={width} height={height} ref={canvas} />
      <img
        src={cutout}
        width="auto"
        height={`${parseInt(height, 10) + 1}`}
        style={{ position: "absolute", top: "0px", left: "0px" }}
      />
      <PoolsSVG
        PoolsConfig={config}
        activePool={activePool}
        activeLayer={activeLayer}
      />
      {config.entries.map(({ name, figures, id, pool }) => (
        <PoolText
          key={`rx-${id}`}
          activePool={activePool}
          name={name}
          figures={figures}
          id={id}
          points={Array.isArray(pool) ? pool[0].points : pool.points}
        />
      ))}
      <MapLayerDescription {...config} />
    </PoolsStyles>
  );
};

export default WithContext(Pools);
