import React, { Component } from "react";
import MapLayerText from "./MapLayerText";
import MapLayerDescription from "./MapLayerDescription";
import { socket } from "../../api";
import WithContext from "./WithContext";
class MapLayerContent extends Component {
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

  componentWillUnmount() {
    socket.off("controller", this.onIncomingEvents);
  }

  componentWillReceiveProps({ activeLayer }) {
    if (this.props.activeLayer !== activeLayer && activeLayer !== "canal") {
      this.setState({
        active: undefined
      });
    }
  }

  getLayerVisibility = (activeLayer, layerName) => {
    if (
      activeLayer === layerName ||
      (activeLayer === "natural" && layerName === "surface")
    ) {
      return true;
    }
    return false;
  };

  render() {
    const {
      layerName,
      config,
      renderIcon,
      renderText,
      children,
      activeLayer
    } = this.props;
    const { active } = this.state;
    let isLayerActive = this.getLayerVisibility(activeLayer, layerName);
    return (
      <div
        className={`layer layer--${layerName} ${
          isLayerActive ? "layer--is-active" : "layer--is-hidden"
        }`}
      >
        {children && children}
        <div className={`resources resources--${layerName}`}>
          {config.entries.map(props => (
            <div className="resources__item" key={props.id}>
              <div
                className={`icon icon--${layerName} ${
                  active === props.id ? "is-active" : ""
                }`}
                style={{
                  top: props.position.y,
                  left: props.position.x,
                  zIndex: `${active !== props.id ? "2" : "1"}`
                }}
              >
                {renderIcon()}
              </div>
              <MapLayerText
                layerName={layerName}
                active={active}
                id={props.id}
                position={props.position}
                renderText={renderText}
                entryProps={props}
              />
            </div>
          ))}
        </div>
        <MapLayerDescription {...config} />
      </div>
    );
  }
}

export default WithContext(MapLayerContent);
