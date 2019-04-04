import React from 'react';

const DamsText = ({ name, figures, id, position, active }) => {

	const style = {
		position: 'absolute',
		top: `${position.y}px`,
		left: `${position.x + 50 + 180}px`,
		color: '#FFF',
		opacity: active === id ? '1' : '0',
	};

	return (
		<div style={style} className="resources-text">
			<h2 className="resource-text__title">{name}</h2>
			<div className="resource-text__group">
				{
					figures.map(({ label, value }) =>
						<div key={`${id}-${label}`} className="resource-text__group__item">
							<div className="resource-text__figure-label">{label}</div>
							<div className="resource-text__figure-value">{value}</div>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default DamsText;