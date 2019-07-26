import React from 'react';
import { setMinMax, calculatePoolTextPosition } from '../../../../utility';

const PoolText = ({ name, figures, id, points, activePool }) => {
	const {x: {min: xMin, max: xMax}, y: {min: yMin, max: yMax}} = setMinMax(points);
	const poolWidth = xMax - xMin;
	const poolHeight = yMax - yMin;
	const isActive = typeof activePool !== 'undefined' && activePool === id;
	const margin = 50;
	const textWidth = 240;
	const textHeight = 120;
	const maxScreenWidth = 1080;

	const { orientation, position } = calculatePoolTextPosition({xMin, xMax, yMin, yMax, poolWidth, poolHeight, margin, textHeight, textWidth, maxScreenWidth });

	const style = {
		color: '#FFF',
		opacity: isActive ? '1' : '0',
		...position
	};

	return (
		<div style={style} className={`project-description project-description--${orientation.x} project-description--${orientation.y}`}>
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