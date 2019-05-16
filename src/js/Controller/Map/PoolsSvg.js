import React from 'react';
import Polygon from './Polygon';

const PoolsSvg = ({ PoolsConfig, active, activeLayer, onPoolClick }) => {
	return (
		<svg
			id="pools"
			className={`${activeLayer === 'natural' ? 'is-active' : 'is-hidden'} resources resources---pools`}
			width="914" height="1539" viewBox="0 0 914 1539"
		>
			{
				PoolsConfig.entries.map(({ pool, id }) =>
					Array.isArray(pool) ?
					<Polygon
						key={`svg-${id}`}
						className="pool"
						active={active}
						pool={pool}
						id={id}
						group={true}
						onPoolClick={onPoolClick}
					/> :
					<Polygon
						key={`svg-${id}`}
						className="pool"
						active={active}
						points={pool.points}
						id={id}
						onPoolClick={onPoolClick}
					/>
				)
			}
		</svg>
	);
}

export default PoolsSvg;