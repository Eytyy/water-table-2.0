import React from "react";
import Polygon from "./Polygon";

const PoolsSvg = ({ PoolsConfig, activePool }) => {
  const getXYofRect = pool => {
    const x = pool
      .map(({ points }) => points.map(({ x }) => x))
      .reduce((c, n) => {
        return c.concat(n);
      })
      .reduce((c, n) => Math.min(c, n));

    const y = pool
      .map(({ points }) => points.map(({ y }) => y))
      .reduce((c, n) => {
        return c.concat(n);
      })
      .reduce((c, n) => Math.min(c, n));
    return {
      x,
      y
    };
  };
  return (
    <svg
      id="pools"
      className="resources resources--pools"
      width="914"
      height="1539"
      viewBox="0 0 914 1539"
    >
      {PoolsConfig.entries.map(({ pool, id }) =>
        Array.isArray(pool) ? (
          <Polygon
            key={`svg-${id}`}
            className="pool"
            activePool={activePool}
            pool={pool}
            id={id}
            group={true}
            minMax={getXYofRect(pool)}
          />
        ) : (
          <Polygon
            key={`svg-${id}`}
            className="pool"
            activePool={activePool}
            points={pool.points}
            id={id}
          />
        )
      )}
    </svg>
  );
};

export default PoolsSvg;
