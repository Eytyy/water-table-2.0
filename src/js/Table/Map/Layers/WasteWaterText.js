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
			<div className="project-details">
				{ 
					startYear && <div className="project-description__item">
						<span className="label">Year</span>
						<span className="value">{startYear}</span>
					</div>
				}
				{ 
					upgradeYear.length > 0 && <div className="project-description__item">
						<span className="label">Upgraded</span>
						<span className="value">{
							upgradeYear.map((year, i) => i === upgradeYear.length - 1 ? `${year}.` : `${year}, `)
						}</span>
					</div>
				}
				{ 
					designFlow && <div className="project-description__item">
						<span className="label">Design Flow</span>
						<span className="value">{designFlow}<span className="unit">m³ per day</span></span>
					</div>
				} 
			</div>
		</div>
	);
};

export default WasteWaterText;