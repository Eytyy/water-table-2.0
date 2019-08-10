import React, { Component } from "react";
import PropTypes from "prop-types";

import PopulationVisulaization from "./Visualization/PopulationVisulaization";
import Intro from "./Intro";
import Story from "./Story/Story";

class Container extends Component {
  static contextTypes = {
    socket: PropTypes.object
  };

  state = {
    intro: true
  };

  onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "toggleIntro":
        this.setState({
          intro: payload
        });
        break;
      default:
        return;
    }
  };

  listenToIncomingEvents = () => {
    this.context.socket.on("controller", this.onIncomingEvents);
  };

  componentDidMount() {
    this.listenToIncomingEvents();
  }

  componentWillUnmount() {
    this.context.socket.off("controller", this.onIncomingEvents);
  }

  render() {
    return this.state.intro ? (
      <Intro />
    ) : (
      <div className="story-visualization">
        <PopulationVisulaization />
        <Story />
      </div>
    );
  }
}

export default Container;
