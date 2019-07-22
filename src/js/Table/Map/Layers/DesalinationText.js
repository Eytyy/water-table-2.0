import React from 'react';

const DesalinationText = ({ name, year, capacity }) => {
	return (
		<div className="project-description__text project-description__text--desalination">
			<h2 className="project-name">{name}</h2>
				{ 
					year && <div className="project-description__item">
						<span className="label">Year</span>
						<span className="value">{year}</span>
					</div>
				}
				{ 
					capacity && <div className="project-description__item">
						<span className="label">Capacity</span>
						<span className="value">{capacity}<span className="unit">m³ per year</span></span>
					</div>
				} 
		</div>
	);
};

export default DesalinationText;