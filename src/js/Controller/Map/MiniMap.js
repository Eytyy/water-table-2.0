import React, { Component } from "react";

import MapLayer from "./MapLayer";
import PoolsSVG from "./PoolsSVG";
import { config } from "../../config";

class MiniMap extends Component {
  render() {
    const { active, onMapClick, onPoolClick } = this.props;
    return (
      <div className="map-console__mini-map">
        {config.map(layerConfiguration =>
          layerConfiguration.id === "surface" ? (
            <PoolsSVG
              key={layerConfiguration.id}
              {...layerConfiguration}
              active={active}
              onClick={onPoolClick}
            />
          ) : (
            <MapLayer
              key={layerConfiguration.id}
              {...layerConfiguration}
              active={active}
              onClick={onMapClick}
            />
          )
        )}
      </div>
    );
  }
}

export default MiniMap;
