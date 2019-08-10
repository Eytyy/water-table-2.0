import React, { Component } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";

class API extends Component {
  port = "8080";
  socket = io.connect(`localhost:${this.port}`);

  broadcastEvent = ({ source, event, payload }) => {
    this.socket.emit(source, {
      event,
      payload
    });
  };

  componentDidMount() {
    this.socket.on("connect", () => {
      this.socket.emit("join", "Resource Connected");
    });
  }

  static childContextTypes = {
    broadcastEvent: PropTypes.func,
    socket: PropTypes.object
  };

  getChildContext() {
    return {
      socket: this.socket,
      broadcastEvent: this.broadcastEvent
    };
  }
  render() {
    return <>{this.props.children}</>;
  }
}

export default API;
