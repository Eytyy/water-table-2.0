import React, { Component } from "react";
import { socket } from "../../api";

const LayerWrapper = (WrappedComponent, { pageName }) => {
  class LayerWrapper extends Component {
    state = {
      active: undefined
    };

    updateActive = payload => {
      this.setState({
        active: payload
      });
    };

    onIncomingEvents = message => {
      const { event, payload } = message;
      switch (event) {
        case "mapClicked":
          this.updateActive(payload);
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

    componentWillReceiveProps({ activeLayer }) {
      if (this.props.activeLayer !== activeLayer && activeLayer !== "canal") {
        this.setState({
          active: undefined
        });
      }
    }

    componentWillUnmount() {
      socket.off("controller", this.onIncomingEvents);
    }

    render() {
      const { activeLayer, config } = this.props;

      return (
        <WrappedComponent
          config={config}
          active={this.state.active}
          activeLayer={activeLayer}
        />
      );
    }
  }

  return LayerWrapper;
};

export default LayerWrapper;
