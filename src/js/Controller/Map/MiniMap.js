import React from "react";

import MapLayer from "./MapLayer";
import PoolsSVG from "./PoolsSVG";
import { config } from "../../config";

const MiniMap = ({ active, onMapClick, onPoolClick }) => {
  return (
    <div className="map-console__mini-map">
      {Object.keys(config).map(key =>
        config[key].id === "surface" ? (
          <PoolsSVG
            key={config[key].id}
            {...config[key]}
            active={active}
            onClick={onPoolClick}
          />
        ) : (
          <MapLayer
            key={config[key].id}
            {...config[key]}
            active={active}
            onClick={onMapClick}
          />
        )
      )}
    </div>
  );
};

export default MiniMap;
