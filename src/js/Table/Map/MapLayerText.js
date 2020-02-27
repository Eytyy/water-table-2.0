import React, { useRef } from "react";
import { calculateTextPosition } from "../../utility";

import styled, { css } from "styled-components";

const topRight = css`
  &:after {
    border-left: 6px solid #fff;
    left: 0px;
    transform: rotate(0deg);
    bottom: 10px;
  }
`;
const bottomRight = css`
  &:after {
    top: 0px;
    border-top: 6px solid #fff;
    border-bottom: 6px solid transparent;
    transform: rotate(-15deg);
  }
`;

const topLeft = css`
  &:after {
    bottom: 0px;
    border-right: 6px solid #fff;
    transform: rotate(-15deg);
    right: 0px;
  }
`;

const bottomLeft = css`
  &:after {
    bottom: 0px;
    border-right: 6px solid #fff;
    transform: rotate(-15deg);
    right: 0px;
  }
`;

const DefaultStyles = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 2;
  min-width: 402px;
  color: #fff;
  &:after {
    content: "";
    position: absolute;
    display: block;
    border: 6px solid transparent;
    width: 0;
    height: 0;
    border-bottom: 6px solid #fff;
    transform-origin: center;
  }
`;

const Description = styled(DefaultStyles)(({ orientation }) => {
  switch (orientation) {
    case "top-right":
      return topRight;
    case "top-left":
      return topLeft;
    case "bottom-right":
      return bottomRight;
    default:
      return bottomLeft;
  }
});

const MapLayerText = ({
  position,
  active,
  id,
  layerName,
  renderText,
  entryProps
}) => {
  const isActive = typeof active !== "undefined" && active === id;
  if (!isActive) {
    return null;
  }
  const textBox = useRef();
  const margin = 50;
  const maxScreenWidth = 1080;
  const layerNudge = 130;

  let textHeight = textBox.current ? textBox.current.offsetHeight : 120;
  let textWidth = textBox.current ? textBox.current.offsetWidth : 402;
  let { orientation, positionCSS } = calculateTextPosition({
    x: position.x,
    y: position.y,
    margin,
    textHeight,
    textWidth,
    maxScreenWidth,
    layerNudge,
    isActive
  });
  console.log(positionCSS);
  const style = {
    opacity: isActive ? "1" : "0",
    ...positionCSS
  };

  return (
    <Description
      orientation={`${orientation.y}-${orientation.x}`}
      ref={textBox}
      style={style}
      className={`project-description project-description--${layerName.toLowerCase()}`}
    >
      {renderText(entryProps)}
    </Description>
  );
};

export default MapLayerText;
