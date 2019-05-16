import React from 'react';

const Polygon = ({ className, points, onPoolClick, id, activePool, group, pool, minMax }) => {
	const flattenedPoints = (unflattenedPoints) => unflattenedPoints.reduce((c, n) => {
		return c + ` ${n.x} ${n.y}`;
	}, '');

	const activeClass = () => {
		if (typeof activePool === 'undefined') return '';
		if (activePool === id) {
			return 'is-active';
		} else if ((activePool === 'deadsea-1' || activePool === 'deadsea-2') &&
			(id === 'deadsea-1' || id === 'deadsea-2')) {
				return 'is-active';
		} else {
			return '';
		}
	}
	return typeof group !=='undefined' && typeof pool !== undefined && group ?
	<g id={id} className={`${className} ${activeClass()}`}>
		<rect fillOpacity="1" fill="#000" x={minMax.x} y={minMax.y} width="161" height="366"></rect>
		{
			pool.map(({ points }, index) => 
			<polygon
				onClick={onPoolClick} 
				key={`svg-${id}-${index}`}
				fill="#FFF"
				points={flattenedPoints(points)}
			/>)
		}
	</g>:
	<polygon
		id={id}
		onClick={onPoolClick}
		fill="transparent"
		className={`${className} ${activeClass()}`}
		points={flattenedPoints(points)}
	/>;
};

export default Polygon;