import React, { useState } from "react";

import { broadcastEvent } from "../../api";
import { config } from "../../config";

import LayerContext from "./LayerContext";
import MapControlButton from "./MapControlButton";
import MiniMap from "./MiniMap";

const MapControls = () => {
  const [state, setState] = useState({
    activeLayer: "surface",
    active: undefined
  });

  const updateState = changes => {
    setState(prevState => ({
      ...prevState,
      ...changes
    }));
  };

  const setActiveLayer = layer => {
    setState(({ activeLayer, active }) => ({
      activeLayer: activeLayer === layer ? "surface" : layer,
      active: layer === "canal" ? canalConfig.entries[0].id : active
    }));
  };

  // @TODO: smelly
  const onClickLayer = id => {
    setActiveLayer(id === "natural" ? "surface" : id);

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

  const onPoolClick = e => {
    const currentTarget = e.currentTarget;
    let active = currentTarget.parentNode.classList.contains("svg-group")
      ? currentTarget.parentNode.id
      : currentTarget.id;

    updateState({ active });

    broadcastEvent({
      source: "controller",
      event: "poolClicked",
      payload: active
    });
  };

  const onMapClick = e => {
    const target = e.currentTarget.id;

    updateState({ active: target });

    broadcastEvent({
      source: "controller",
      event: "mapClicked",
      payload: target
    });
  };

  // @TODO: Put the buttons in a config file and loop over for better readability
  const { active, activeLayer } = state;
  return (
    <LayerContext.Provider value={activeLayer}>
      <section className="controller map-console">
        <div className="map-console__controls">
          <h1 className="controller__title">WATER MAP &amp; PROJECTS</h1>
          <div className="map-console__controls__group map-console__controls__group--main">
            {Object.keys(config).map(key => (
              <MapControlButton
                key={config[key].id}
                {...config[key]}
                onClick={onClickLayer}
              />
            ))}
          </div>
        </div>
        <MiniMap
          active={active}
          onMapClick={onMapClick}
          onPoolClick={onPoolClick}
        />
      </section>
    </LayerContext.Provider>
  );
};

export default MapControls;
