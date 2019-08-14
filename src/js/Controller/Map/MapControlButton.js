import React from "react";
import LayerContext from "./LayerContext";

const MapControlButton = ({ id, title, Icon, onClick }) => {
  const isActive = activeLayer => {
    if (activeLayer === id) {
      return true;
    } else if (
      id === "natural" &&
      (activeLayer === "surface" || activeLayer === "groundwater")
    ) {
      return true;
    }
    return false;
  };
  return (
    <LayerContext.Consumer>
      {activeLayer => (
        <div
          className={`btn-group ${isActive(activeLayer) ? "is-active" : ""}`}
          onClick={() => {
            onClick(id);
          }}
        >
          <i className={`btn-icon icon--${id}`}>
            <Icon />
          </i>
          <span className="btn-label">{title}</span>
        </div>
      )}
    </LayerContext.Consumer>
  );
};

export default MapControlButton;
