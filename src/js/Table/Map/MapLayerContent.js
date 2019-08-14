import React from "react";
import MapLayerText from "./MapLayerText";
import LayerContext from "./LayerContext";

const MapLayerContent = props => {
  const { layerName, active, config, renderIcon, renderText, children } = props;

  const getLayerVisibility = activeLayer => {
    if (
      activeLayer === layerName ||
      (activeLayer === "natural" && layerName === "surface")
    ) {
      return true;
    }
    return false;
  };
  // TODO: FIX
  // const getOpacity = id => {
  //   if (typeof active !== "undefined" && active !== id) {
  //     if (active === "natural" && (id === "surface" || id === "ground")) {
  //       return "1";
  //     }
  //     return "0.5";
  //   }
  //   return "1";
  // };

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
                <div key={props.id}>
                  <div
                    className={`icon icon--${layerName} ${
                      active ? "is-active" : null
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
                    iconWidth={width}
                    iconHeight={height}
                    renderText={renderText}
                    entryProps={props}
                  />
                </div>
              ))}
            </div>
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
        );
      }}
    </LayerContext.Consumer>
  );
};

export default MapLayerContent;
