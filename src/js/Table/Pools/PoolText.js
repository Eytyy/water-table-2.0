import React from 'react';
import { setMinMax } from './utility';

const PoolText = ({ name, figures, id, points, activePool }) => {
	const {x: {min: xMin, max: xMax}, y: {min: yMin, max: yMax}} = setMinMax(points);
	const poolWidth = xMax - xMin;
	const poolHeight = yMax - yMin;
	const isActive = typeof activePool !== 'undefined' && activePool === id;

	const style = {
		position: 'absolute',
		top: `${yMin - 50}px`,
		left: `${xMin + poolWidth + 50}px`,
		color: '#FFF',
		opacity: isActive ? '1' : '0',
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

export default PoolText;