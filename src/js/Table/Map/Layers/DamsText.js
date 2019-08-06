import React from "react";

const DamDescription = ({ name, yearConstructed, yearRaised, capacity }) => {
  return (
    <div className="project-description__text project-description__text--dams">
      <h2 className="project-name">{name}</h2>
      <div className="project-details">
        {yearConstructed && (
          <div className="project-description__item">
            <span className="label">Year</span>
            <span className="value">{yearConstructed}</span>
          </div>
        )}
        {yearRaised && (
          <div className="project-description__item">
            <span className="label">Raised</span>
            <span className="value">{yearRaised}</span>
          </div>
        )}
        {capacity && (
          <div className="project-description__item">
            <span className="label">Capacity: </span>
            <span className="value">
              {capacity}
              <span className="unit">m³</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DamDescription;
