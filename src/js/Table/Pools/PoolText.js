import React from 'react';
import { setMinMax } from './utility';

const PoolText = ({ name, figures, id, points, activePool }) => {
	const {x: {min: xMin, max: xMax}, y: {min: yMin, max: yMax}} = setMinMax(points);
	const poolWidth = xMax - xMin;
	const poolHeight = yMax - yMin;
	const isActive = typeof activePool !== 'undefined' && activePool === id;
	const margin = 50;
	const textWidth = 240;
	const textHeight = 120;
	const maxScreenWidth = 1080;

	const calculatePosition = () => {
		let orientation = {};
		let position = {
			position: 'absolute'
		};
		if (xMin + poolWidth + margin + textWidth > maxScreenWidth) {
			position.right = `${(xMin - maxScreenWidth) + textWidth + margin}px`
			orientation.x = 'left';
		} else {
			position.left = `${xMin + poolWidth + margin}px`;
			orientation.x = 'right'
		}
		if (yMin - textHeight < 0) {
			position.top = `${yMax}px`
			orientation.y = 'bottom';
		} else {
			position.top = `${yMin - textHeight}px`
			orientation.y = 'top';
		}
		return {
			orientation,
			position
		}
	}
	const { orientation, position } = calculatePosition();
	const style = {
		color: '#FFF',
		opacity: isActive ? '1' : '0',
		...position
	};
	console.log(style)

	return (
		<div style={style} className={`resources-text resources-text--${orientation.x} resources-text--${orientation.y}`}>
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