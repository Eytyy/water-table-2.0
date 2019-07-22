import React from 'react';

const SupplyText = ({
	type, name, startYear, upgradeYear, initialCapactiy, upgradedCapacity,
	city, year, unit
}) => {
	return (
		<div className={`project-description__text project-description__text--supply--${type}`}>
			<h2 className="project-name">{name}</h2>
			<div className="project-details">
				{
					type === 'project' && <>
						{ 
							startYear && <div className="project-description__item">
								<span className="label">Year</span>
								<span className="value">{startYear}</span>
							</div>
						}
						{ 
							upgradeYear && <div className="project-description__item">
								<span className="label">Expanded</span>
								<span className="value">{upgradeYear}</span>
							</div>
						}
						{ 
							initialCapactiy && <div className="project-description__item">
								<span className="label">Capacity</span>
								<span className="value">{initialCapactiy}<span className="unit">{unit}</span></span>
							</div>
						} 
						{
							upgradedCapacity && <div className="project-description__item">
								<span className="label">New Capacity</span>
								<span className="value">{upgradedCapacity}</span>
							</div>
						}
					</>
				}
				{
					type === 'utility' &&	<>
						{
							year && <div className="project-description__item">
								<span className="label">Year</span>
								<span className="value">{year}</span>
							</div>
						}
						{
							city && <div className="project-description__item">
								<span className="label">Location</span>
								<span className="value">{city}</span>
							</div>
						}
					</>
				}
			</div>

		</div>
	);
};

export default SupplyText;