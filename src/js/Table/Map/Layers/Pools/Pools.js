import React, { Component } from "react";
import PropTypes from "prop-types";
import { socket } from "../../../../api";

import PoolsSVG from "./PoolsSvg";
import PoolText from "./PoolText";
import cutout from "../../../../../cutout.png";
import LayerContext from "../../LayerContext";

class Pools extends Component {
  canvas = React.createRef();
  ctx;
  pools = [];
  width = "1080";
  height = "1540";

  particles = Array.from({ length: 140000 }, () => [
    Math.round(Math.random() * (this.width - 1)),
    Math.round(Math.random() * (this.height - 1))
  ]);

  stop = false;
  frameCount = 0;
  fps = 15;
  fpsInterval;
  startTime;
  now;
  then;
  elapsed;
  raf = null;

  state = {
    activePool: undefined
  };

  updateActivePool = activePool => {
    this.setState({
      activePool
    });
  };

  draw = () => {
    const ctx = this.ctx || this.canvas.current.getContext("2d");

    ctx.clearRect(0, 0, this.width, this.height);
    const imageData = ctx.getImageData(0, 0, this.width, this.height);
    const data = imageData.data;

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      const index = 4 * (particle[0] + particle[1] * this.width);
      data[index + 0] = 255;
      data[index + 1] = 255;
      data[index + 2] = 255;
      data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  animate = () => {
    this.raf = requestAnimationFrame(this.animate);

    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);

      this.draw();

      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        particle[0] = Math.max(
          0,
          Math.min(
            this.width - 1,
            Math.round(particle[0] + Math.random() * 2 - 1)
          )
        );
        particle[1] = Math.max(
          0,
          Math.min(
            this.height - 1,
            Math.round(particle[1] + Math.random() * 2 - 1)
          )
        );
      }
    }
  };

  onIncomingEvent = message => {
    const { event, payload } = message;
    switch (event) {
      case "poolClicked":
        this.updateActivePool(payload);
        break;
      default:
        return;
    }
  };

  listenToIncomingEvents = () => {
    socket.on("controller", this.onIncomingEvent);
  };

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animate();
    this.listenToIncomingEvents();
  }

  componentWillReceiveProps({ activeLayer }) {
    if (this.props.activeLayer !== activeLayer) {
      this.setState({
        activePool: undefined
      });
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
    socket.off("controller", this.onIncomingEvent);
    this.raf = null;
  }

  render() {
    const { config } = this.props;
    return (
      <LayerContext.Consumer>
        {activeLayer => (
          <div
            className={`layer layer--pools ${
              activeLayer === "natural" || activeLayer === "surface"
                ? "layer--is-active"
                : "layer--is-hidden"
            }`}
          >
            <canvas
              id="pools"
              width={this.width}
              height={this.height}
              ref={this.canvas}
            />
            <img
              src={cutout}
              width="auto"
              height={`${parseInt(this.height, 10) + 1}`}
              style={{ position: "absolute", top: "0px", left: "0px" }}
            />
            <PoolsSVG PoolsConfig={config} activePool={this.state.activePool} />
            {config.entries.map(({ name, figures, id, pool }) => (
              <PoolText
                key={`rx-${id}`}
                activePool={this.state.activePool}
                name={name}
                figures={figures}
                id={id}
                points={Array.isArray(pool) ? pool[0].points : pool.points}
              />
            ))}
            <div className="text-box">
              <div className="text-box__header">
                <i className="text-box__icon">
                  <img src={config.icon} alt="" />
                </i>
                <span className="text-box__title">{config.title}</span>
              </div>
              <div className="body">{config.description}</div>
            </div>
          </div>
        )}
      </LayerContext.Consumer>
    );
  }
}

export default Pools;
