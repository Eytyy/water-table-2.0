import React, { Component } from "react";
import PropTypes from "prop-types";

import MapControlButton from "./MapControlButton";
import { config } from "../../config";
import MiniMap from "./MiniMap";

class MapControls extends Component {
  static contextTypes = {
    broadcastEvent: PropTypes.func
  };

  state = {
    activeLayer: "surface",
    active: undefined
  };

  setActiveLayer = layer => {
    this.setState({
      activeLayer: this.state.activeLayer === layer ? "surface" : layer,
      active: layer === "canal" ? canalConfig.entries[0].id : this.state.active
    });
  };

  onClickLayer = id => {
    this.setActiveLayer(id === "natural" ? "surface" : id);
    if (id === "canals") {
      this.context.broadcastEvent({
        source: "controller",
        event: "mapClicked",
        payload: canalConfig.entries[0].id
      });
    }
    this.context.broadcastEvent({
      source: "controller",
      event: "switchMapView",
      payload: id
    });
  };

  onPoolClick = e => {
    const currentTarget = e.currentTarget;
    let active = currentTarget.parentNode.classList.contains("svg-group")
      ? currentTarget.parentNode.id
      : currentTarget.id;

    this.setState({
      active
    });

    this.context.broadcastEvent({
      source: "controller",
      event: "poolClicked",
      payload: active
    });
  };

  onMapClick = e => {
    const target = e.currentTarget.id;

    this.setState({
      active: target
    });

    this.context.broadcastEvent({
      source: "controller",
      event: "mapClicked",
      payload: target
    });
  };

  // Put the buttons in a config file and loop over for better readability
  render() {
    const { activeLayer, active } = this.state;
    return (
      <section className="controller map-console">
        <div className="map-console__controls">
          <h1 className="controller__title">WATER MAP &amp; PROJECTS</h1>
          <div className="map-console__controls__group map-console__controls__group--main">
            {config.map(layerConfiguration => (
              <MapControlButton
                key={layerConfiguration.id}
                activeLayer={activeLayer}
                {...layerConfiguration}
                onClick={this.onClickLayer}
              />
            ))}
          </div>
        </div>
        <MiniMap
          activeLayer={activeLayer}
          active={active}
          onMapClick={this.onMapClick}
          onPoolClick={this.onPoolClick}
        />
      </section>
    );
  }
}

export default MapControls;
