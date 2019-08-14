import React from "react";

const MapLayerDescription = ({ title, description, Icon }) => (
  <div className="text-box layer-description">
    <div className="text-box__header">
      <i className="text-box__icon">
        <Icon />
      </i>
      <span className="text-box__title">{title}</span>
    </div>
    <div className="body">{description}</div>
  </div>
);

export default MapLayerDescription;
