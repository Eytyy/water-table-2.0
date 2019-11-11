import React, { useState, useEffect } from "react";
import MapLayerText from "./MapLayerText";
import MapLayerDescription from "./MapLayerDescription";
import { socket } from "../../api";
import WithContext from "./WithContext";

const MapLayerContent = ({
  layerName,
  config,
  renderIcon,
  renderText,
  children,
  activeLayer
}) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    startListeningToIncomingEvents();
    return function cleanup() {
      stopListeningToIncomingEvents();
    };
  }, []);

  const onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "mapClicked":
        setActive(payload);
        break;
      default:
        return;
    }
  };

  const startListeningToIncomingEvents = () =>
    socket.on("controller", onIncomingEvents);

  const stopListeningToIncomingEvents = () =>
    socket.off("controller", onIncomingEvents);

  const getLayerVisibility = (activeLayer, layerName) =>
    activeLayer === layerName ||
    (activeLayer === "natural" && layerName === "surface");

  const isLayerActive = getLayerVisibility(activeLayer, layerName);

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
};

export default WithContext(MapLayerContent);
