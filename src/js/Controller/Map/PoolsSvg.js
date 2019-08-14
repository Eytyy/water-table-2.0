import React from "react";
import Polygon from "./Polygon";
import LayerContext from "./LayerContext";

const PoolsSvg = ({ entries, active, onClick }) => {
  return (
    <LayerContext.Consumer>
      {activeLayer => (
        <svg
          id="pools"
          className={`${
            activeLayer === "natural" ? "is-active" : "is-hidden"
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
      )}
    </LayerContext.Consumer>
  );
};

export default PoolsSvg;
