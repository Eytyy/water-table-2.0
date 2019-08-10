import React, { Component } from "react";
import PropTypes from "prop-types";

import data from "./data";

class Story extends Component {
  static contextTypes = {
    socket: PropTypes.object
  };

  state = {
    activeYear: 1960
  };

  updateActiveYear = payload => {
    this.setState({
      activeYear: parseInt(payload, 10)
    });
  };

  onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "yearClicked":
        this.updateActiveYear(payload);
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

  getContent = () => {
    return data.find(
      ({ year }) => parseInt(year, 10) === parseInt(this.state.activeYear, 10)
    ).content;
  };

  render() {
    return (
      <div className="story">
        <h1>{this.state.activeYear}</h1>
        <p>{this.getContent()}</p>
      </div>
    );
  }
}

export default Story;
