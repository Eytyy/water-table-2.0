import React from "react";
import Polygon from "./Polygon";

const PoolsSvg = ({ entries, active, onClick, activeLayer }) => {
  const isActive = () => activeLayer === "natural";

  return (
    <svg
      id="pools"
      className={`${
        isActive ? "is-active" : "is-hidden"
      } resources resources---pools`}
      width="914"
      height="1539"
      viewBox="0 0 914 1539"
    >
      {entries.map(({ pool, id }) =>
        Array.isArray(pool) ? (
          <Polygon
            key={`svg-${id}`}
            className="pool"
            active={active}
            pool={pool}
            id={id}
            group={true}
            onPoolClick={onClick}
          />
        ) : (
          <Polygon
            key={`svg-${id}`}
            className="pool"
            active={active}
            points={pool.points}
            id={id}
            onPoolClick={onClick}
          />
        )
      )}
    </svg>
  );
};

export default PoolsSvg;
