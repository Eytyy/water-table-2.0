import React from "react";
import styled from "styled-components";

import Polygon from "./Polygon";

const SVG = styled.svg`
  .pool {
    fill: #fff;
    opacity: 0;
    transform: scale(1, 1);
    transform-origin: 50% 50%;
    transform-box: fill-box;
    transition: transform 200ms ease-in-out, opacity 200ms linear;
  }

  .pool.is-active {
    opacity: 1;
  }

  #azraq {
    transform: translate(-60%, -50%);

    &.is-active {
      transform: translate(-60%, -70%) scale(1.5, 1.5);
    }
  }

  #jafar {
    transform: translate(-10%, -140%);

    &.is-active {
      transform: translate(-10%, -140%) scale(1.5, 1.5);
    }
  }

  #deadsea {
    transform: translate(0%, -5%);

    &.is-active {
      transform: translate(0%, -5%) scale(1.3, 1.3);
    }
  }

  #aqaba {
    transform: translate(5%, -8%) scale(1.1, 1.1);

    &.is-active {
      transform: translate(5%, -8%) scale(1.3, 1.3);
    }
  }
`;

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
    <SVG
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
    </SVG>
  );
};

export default PoolsSvg;
