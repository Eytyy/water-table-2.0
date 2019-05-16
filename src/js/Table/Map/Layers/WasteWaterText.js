import React from 'react';

const WasteWaterText = ({
	name,
	startYear,
	upgradeYear,
	designFlow
}) => {
	return (
		<div className="project-description__text project-description__text--wastewater">
			<h2 className="project-name">{name}</h2>
				{ 
					startYear && <div className="project-description__item">
						<span className="label">Year of Operation: </span>
						<span className="value">{startYear}</span>
					</div>
				}
				{ 
					upgradeYear.length > 0 && <div className="project-description__item">
						<span className="label">Upgraded in: </span>
						<span className="value">{
							upgradeYear.map((year, i) => i === upgradeYear.length - 1 ? `${year}.` : `${year}, `)
						}</span>
					</div>
				}
				{ 
					designFlow && <div className="project-description__item">
						<span className="label">Design Flow: </span>
						<span className="value">{designFlow} <span className="unit">m³ per day</span></span>
					</div>
				} 
		</div>
	);
};

export default WasteWaterText;