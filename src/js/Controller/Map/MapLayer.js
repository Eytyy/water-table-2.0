import React from "react";
import LayerContext from "./LayerContext";

const MapLayer = ({ id, entries, active, Icon, onClick }) => {
  return id === "natural" ? null : (
    <LayerContext.Consumer>
      {activeLayer => (
        <div
          className={`${
            activeLayer === id ? "is-active" : "is-hidden"
          } resources resources--${id}`}
          style={{
            width: "683px",
            height: "1024px",
            position: "absolute",
            left: "0px",
            top: "0px"
          }}
        >
          {entries.map(({ id, position }) => (
            <div
              className={`icon icon--${id}`}
              key={id}
              id={id}
              style={{
                width: "25px",
                height: "25px",
                position: "absolute",
                // scale down by 66.5
                // then adjust top/left position those are determined visually
                top: Math.floor(position.y * 0.665) + 105,
                left: Math.floor(position.x * 0.665) + 125,
                opacity: `${
                  typeof active !== "undefined" && active !== id ? "0.2" : "1"
                }`,
                zIndex: `${active !== id ? "2" : "1"}`
              }}
              onClick={onClick}
            >
              <Icon />
            </div>
          ))}
        </div>
      )}
    </LayerContext.Consumer>
  );
};

MapLayer.defaultProps = {
  onClick: () => {
    return false;
  }
};

export default MapLayer;
