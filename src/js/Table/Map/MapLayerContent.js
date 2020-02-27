import React, { useState, useEffect } from "react";
import MapLayerText from "./MapLayerText";
import MapLayerDescription from "./MapLayerDescription";
import { socket } from "../../api";
import WithContext from "./WithContext";
import styled from "styled-components";

const Resources = styled.div`
  position: absolute;
  top: 155px;
  left: 130px;
`;

const ResourceItem = styled.div`
  position: absolute;
  top: ${props => `${props.position.y}px`};
  left: ${props => `${props.position.x}px`};
  z-index: ${props => (props.active ? "2" : "1")};
`;

const IconStyle = styled.div`
  transform: ${props => (props.active ? `scale(2, 2)` : `scale(1, 1)`)};
  width: 25px;
  height: 25px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  svg {
    width: 100%;
    height: auto;
  }
`;

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
      <Resources className={`resources resources--${layerName}`}>
        {config.entries.map(props => (
          <ResourceItem
            className="resources__item"
            active={active === props.id}
            key={props.id}
            position={props.position}
          >
            <IconStyle
              className={`icon icon--${layerName}`}
              active={active === props.id}
            >
              {renderIcon()}
            </IconStyle>
            <MapLayerText
              layerName={layerName}
              active={active}
              id={props.id}
              position={props.position}
              renderText={renderText}
              entryProps={props}
            />
          </ResourceItem>
        ))}
      </Resources>
      <MapLayerDescription {...config} />
    </div>
  );
};

export default WithContext(MapLayerContent);
