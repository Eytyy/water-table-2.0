import React, { Component } from "react";
import PropTypes from "prop-types";

import { broadcastEvent } from "../../api";

import MapControlButton from "./MapControlButton";
import { config } from "../../config";
import MiniMap from "./MiniMap";
import LayerContext from "./LayerContext";

class MapControls extends Component {
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
      broadcastEvent({
        source: "controller",
        event: "mapClicked",
        payload: canalConfig.entries[0].id
      });
    }

    broadcastEvent({
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

    this.setState({ active });

    broadcastEvent({
      source: "controller",
      event: "poolClicked",
      payload: active
    });
  };

  onMapClick = e => {
    const target = e.currentTarget.id;

    this.setState({ active: target });

    broadcastEvent({
      source: "controller",
      event: "mapClicked",
      payload: target
    });
  };

  // Put the buttons in a config file and loop over for better readability
  render() {
    const { activeLayer, active } = this.state;
    return (
      <LayerContext.Provider value={activeLayer}>
        <section className="controller map-console">
          <div className="map-console__controls">
            <h1 className="controller__title">WATER MAP &amp; PROJECTS</h1>
            <div className="map-console__controls__group map-console__controls__group--main">
              {config.map(layerConfiguration => (
                <MapControlButton
                  key={layerConfiguration.id}
                  {...layerConfiguration}
                  onClick={this.onClickLayer}
                />
              ))}
            </div>
          </div>
          <MiniMap
            active={active}
            onMapClick={this.onMapClick}
            onPoolClick={this.onPoolClick}
          />
        </section>
      </LayerContext.Provider>
    );
  }
}

export default MapControls;
