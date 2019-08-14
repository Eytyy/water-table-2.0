import React from "react";
import MapLayerText from "./MapLayerText";
import LayerContext from "./LayerContext";
import MapLayerDescription from "./MapLayerDescription";

const MapLayerContent = props => {
  const { layerName, active, config, renderIcon, renderText, children } = props;
  const { Icon } = config;

  const getLayerVisibility = activeLayer => {
    if (
      activeLayer === layerName ||
      (activeLayer === "natural" && layerName === "surface")
    ) {
      return true;
    }
    return false;
  };

  return (
    <LayerContext.Consumer>
      {activeLayer => {
        let isLayerActive = getLayerVisibility(activeLayer);
        return (
          <div
            className={`layer layer--${layerName} ${
              isLayerActive ? "layer--is-active" : "layer--is-hidden"
            }`}
          >
            {children && children}
            <div className={`resources resources--${layerName}`}>
              {config.entries.map(props => (
                <div className="resources__item" key={props.id}>
                  <div
                    className={`icon icon--${layerName} ${
                      active === props.id ? "is-active" : ""
                    }`}
                    style={{
                      top: props.position.y,
                      left: props.position.x,
                      zIndex: `${active !== props.id ? "2" : "1"}`
                    }}
                  >
                    {renderIcon()}
                  </div>
                  <MapLayerText
                    layerName={layerName}
                    active={active}
                    id={props.id}
                    position={props.position}
                    renderText={renderText}
                    entryProps={props}
                  />
                </div>
              ))}
            </div>
            <MapLayerDescription {...config} />
          </div>
        );
      }}
    </LayerContext.Consumer>
  );
};

export default MapLayerContent;
