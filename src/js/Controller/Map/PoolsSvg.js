import React from 'react';
import Polygon from './Polygon';

const PoolsSvg = ({ PoolsConfig, activePool, onPoolClick, activeLayer }) => {
	return (
		<svg id="pools" className={`${activeLayer === 'natural' ? 'is-active' : 'is-hidden'} resources resources---pools`} width="914" height="1539" viewBox="0 0 914 1539">
			{
				PoolsConfig.entries.map(({ pool, id }) =>
					Array.isArray(pool) ?
					<Polygon
						key={`svg-${id}`}
						className="pool"
						activePool={activePool}
						pool={pool}
						onPoolClick={onPoolClick}
						id={id}
						group={true}
					/> :
					<Polygon
						key={`svg-${id}`}
						className="pool"
						activePool={activePool}
						points={pool.points}
						onPoolClick={onPoolClick}
						id={id}
					/>
				)
			}
		</svg>
	);
}

export default PoolsSvg;