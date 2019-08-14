import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { socket, broadcastEvent } from "../api";
import Intro from "./Intro";
import MapControls from "./Map/MapControls";
import VisualizationControls from "./Visualization/VisualizationControls";

class Controller extends Component {
  state = {
    front: typeof this.props.location.pathname.split("/")[2] === "undefined",
    language: "english"
  };

  onIncomingEvents = ({ event }) => {
    switch (event) {
      default:
        break;
    }
  };

  listenToIncomingEvents = () => {
    socket.on("from-table", this.onIncomingEvents);
  };

  onLinkClick = to => {
    broadcastEvent({
      source: "controller",
      event: "navigate",
      payload: to
    });
  };

  componentDidMount() {
    this.listenToIncomingEvents();
  }

  componentWillUnmount() {
    socket.off("from-table", this.onIncomingEvents);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        front: typeof this.props.location.pathname.split("/")[2] === "undefined"
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.front && (
          <Link
            onClick={() => {
              this.onLinkClick("");
            }}
            className="back-btn"
            to="/controller"
          >
            {" "}
            &lt; Back
          </Link>
        )}
        <Route path="/controller" exact component={Intro} />
        <Route path="/controller/map" exact component={MapControls} />
        <Route path="/controller/viz" exact component={VisualizationControls} />
        <div className="language">
          <span
            className={`lang-btn ${
              this.state.language === "english" ? "active" : ""
            }`}
            onClick={() => this.switchLang("english")}
          >
            English
          </span>
          <span
            className={`lang-btn ${
              this.state.language === "arabic" ? "active" : ""
            }`}
            onClick={() => this.switchLang("arabic")}
          >
            Arabic
          </span>
        </div>
      </>
    );
  }
}

export default withRouter(Controller);
