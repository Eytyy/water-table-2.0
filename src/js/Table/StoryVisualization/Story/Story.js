import React, { Component } from "react";

import data from "./data";
import { socket } from "../../../api";

class Story extends Component {
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
    socket.on("controller", this.onIncomingEvents);
  };

  componentDidMount() {
    this.listenToIncomingEvents();
  }

  componentWillUnmount() {
    socket.off("controller", this.onIncomingEvents);
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
