import React, { Component } from "react";
import styled from "styled-components";

import data from "./data";
import { socket } from "../../../api";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 620px;
  padding: 60px;

  h1 {
    font-size: 62px;
    margin: 0 0 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

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
      <Wrapper className="story">
        <h1>{this.state.activeYear}</h1>
        <p>{this.getContent()}</p>
      </Wrapper>
    );
  }
}

export default Story;
