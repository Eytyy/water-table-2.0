import React, { useState } from "react";
import population from "../../../data/population.1";
import { format } from "d3";

import { broadcastEvent } from "../../api";

const VisualizationControls = () => {
  const [state, setState] = useState({
    activeYear: "1960",
    intro: true
  });

  const updateState = changes => {
    setState(prevState => ({
      ...prevState,
      ...changes
    }));
  };

  const years = ["1960", "1970", "1980", "1990", "2000", "2010", "2019"];

  const onYearClick = e => {
    const nextYear = e.currentTarget.id;

    if (state.intro) toggleIntro();

    updateState({
      activeYear: nextYear
    });

    broadcastEvent({
      source: "controller",
      event: "yearClicked",
      payload: nextYear
    });
  };

  const toggleIntro = () => {
    const intro = !state.intro;
    updateState({
      intro
    });
    broadcastEvent({
      source: "controller",
      event: "toggleIntro",
      payload: intro
    });
  };

  const onIntroClick = () => {
    if (state.intro) return;
    toggleIntro();
  };

  const getPopulation = () => {
    return format(",.0f")(
      population.find(({ year }) => year === parseInt(state.activeYear, 10))
        .population
    ).replace(/,/g, " ");
  };

  return (
    <div className="controller controller__data-viz">
      <section className="controller__section controller__section--intro">
        <button
          className={`intro__btn ${
            state.intro
              ? "controller__btn controller__btn--active"
              : "controller__btn"
          }`}
          onClick={onIntroClick}
        >
          {"Intro"}
        </button>
      </section>
      <section className="controller__section controller__section--timeline">
        <h2 className="controller__sub-title">Story &amp; Projections</h2>
        <div className="timeline__controls">
          {years.map(year => (
            <button
              id={year}
              key={year}
              className={`timeline__time ${
                !state.intro && state.activeYear === year
                  ? "controller__btn controller__btn--active"
                  : "controller__btn"
              }`}
              onClick={onYearClick}
            >
              {year}
            </button>
          ))}
        </div>
      </section>
      <section className="controller__section controller__section--data">
        <div className="controller__section--data__item">
          <h2 className="controller__sub-title">Water Levels</h2>
          <div className="data__item__content">
            <span className="data__item__content__value">--</span>
            <span className="data__item__content__label"> mcm</span>
          </div>
        </div>
        <div className="controller__section--data__item data__population">
          <h2 className="controller__sub-title">Population</h2>
          <div className="data__item__content">
            <span className="data__item__content__value">
              {state.intro ? "--" : getPopulation()}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualizationControls;
