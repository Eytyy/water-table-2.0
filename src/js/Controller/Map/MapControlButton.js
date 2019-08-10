import React from "react";

const MapControlButton = ({ activeLayer, id, title, Icon, onClick }) => {
  const isActive = () => {
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
    <div
      className={`btn-group ${isActive() ? "is-active" : ""}`}
      onClick={() => {
        onClick(id);
      }}
    >
      <i className={`btn-icon icon--${id}`}>
        <Icon />
      </i>
      <span className="btn-label">{title}</span>
    </div>
  );
};

export default MapControlButton;
