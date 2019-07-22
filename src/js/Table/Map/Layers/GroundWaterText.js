import React from 'react';

const GroundWaterText = ({ name, balance, safeyield, extraction }) => {
	return (
		<div className="project-description__text project-description__text--groundwater">
			<h2 className="project-name">{name}</h2>
			<div className="project-details">
				<div className="project-description__item">
					<span className="label">Total Extraction</span>
					<span className="value">{extraction}<span className="unit">m³</span></span>
				</div>
				<div className="project-description__item">
					<span className="label">Balance</span>
					<span className="value">{balance} <span className="unit">m³ per year</span></span>
				</div>
				<div className="project-description__item">
					<span className="label">Safe yield</span>
					<span className="value">{safeyield}<span className="unit">m³ per year</span></span>
				</div>
			</div>
		</div>
	);
};

export default GroundWaterText;