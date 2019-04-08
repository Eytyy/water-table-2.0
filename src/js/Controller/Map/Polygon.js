import React from 'react';

const Polygon = ({ className, points, onPoolClick, id, active, group, pool }) => {
	const flattenedPoints = (unflattenedPoints) => unflattenedPoints.reduce((c, n) => {
		return c + ` ${n.x} ${n.y}`;
	}, '');

	const activeClass = () => {
		if (typeof active === 'undefined') return '';
		if (active === id) {
			return 'is-active';
		} else if ((active === 'deadsea-1' || active === 'deadsea-2') &&
			(id === 'deadsea-1' || id === 'deadsea-2')) {
				return 'is-active';
		} else {
			return '';
		}
	}
	return typeof group !=='undefined' && typeof pool !== undefined && group ?
	<g id={id} className={`svg-group ${className} ${activeClass()}`}>
		{
			pool.map(({ points }, index) => 
			<polygon
				key={`svg-${id}-${index}`}
				fill="#FFF"
				onClick={onPoolClick} 
				points={flattenedPoints(points)}
			/>)
		}
		<rect fillOpacity="0" x="0" y="0" width="161" height="366"></rect>
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