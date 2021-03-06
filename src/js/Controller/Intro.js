import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { broadcastEvent } from "../api";

class Intro extends Component {
  onLinkClick = to => {
    broadcastEvent({
      source: "controller",
      event: "navigate",
      payload: to
    });
  };

  render() {
    return (
      <section className="intro">
        <div className="intro__section intro__section--left">
          <Link onClick={() => this.onLinkClick("map")} to="/controller/map">
            water map &amp; porjects
          </Link>
        </div>
        <div className="intro__section intro__section--right">
          <Link
            onClick={() => this.onLinkClick("story-viz")}
            to="/controller/viz"
          >
            story &amp; visualisation
          </Link>
        </div>
      </section>
    );
  }
}

export default Intro;
