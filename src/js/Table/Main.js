import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Intro from "./Landing";
import Story from "./StoryVisualization/Container";
import Map from "./Map/Map";

class Main extends Component {
  static contextTypes = {
    socket: PropTypes.object
  };

  navigate = to => {
    const { history } = this.props;
    history.push(`/table/${to}`);
  };

  updateBodyClassName = () => {
    if (this.props.location.pathname === "/table/") {
      document.body.classList.add("landing");
    } else {
      document.body.classList.remove("landing");
    }
  };

  onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "poolClicked":
        break;
      case "navigate":
        this.navigate(payload);
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
    this.updateBodyClassName();
  }

  componentDidUpdate() {
    this.updateBodyClassName();
  }

  componentWillUnmount() {
    this.context.socket.off("controller", this.onIncomingEvents);
  }

  render() {
    return (
      <>
        <Route path="/table" exact component={Intro} />
        <Route path="/table/story-viz" exact component={Story} />
        <Route path="/table/map" exact component={Map} />
      </>
    );
  }
}

export default withRouter(Main);
