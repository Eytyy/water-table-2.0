import React, { useRef } from "react";
import { calculateTextPosition } from "../../utility";

const MapLayerText = ({
  position,
  active,
  id,
  layerName,
  renderText,
  entryProps
}) => {
  const textBox = useRef();
  const isActive = typeof active !== "undefined" && active === id;
  const margin = 50;
  let textHeight = textBox.current ? textBox.current.offsetHeight : 120;
  let textWidth = textBox.current ? textBox.current.offsetHeight : 402;
  const maxScreenWidth = 1080;
  const { orientation, positionCSS } = calculateTextPosition({
    x: position.x + 190,
    y: position.y + 180,
    margin,
    textHeight,
    textWidth,
    maxScreenWidth
  });

  const style = {
    color: "#FFF",
    opacity: isActive ? "1" : "0",
    ...positionCSS
  };

  return (
    <div
      ref={textBox}
      style={style}
      className={`project-description project-description--${layerName.toLowerCase()} project-description--${
        orientation.x
      } project-description--${orientation.y}`}
    >
      {renderText(entryProps)}
    </div>
  );
};

export default MapLayerText;
