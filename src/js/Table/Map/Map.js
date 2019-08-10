import React, { Component } from "react";
import PropTypes from "prop-types";

import Pools from "./layers/Pools/Pools";
import Dams from "./layers/Dams";
import WasteWater from "./layers/WasteWater";
import Supply from "./layers/Supply";
import Desalination from "./layers/Desalination";
import Canal from "./layers/Canal";
import Groundwater from "./layers/Groundwater";
import Basins from "./layers/Basins";

import { configMap } from "../../config";

class Map extends Component {
  static contextTypes = {
    socket: PropTypes.object
  };

  state = {
    activeLayer: "natural"
  };

  updateTextBox = () => {
    switch (this.state.activeLayer) {
      default:
        break;
    }
  };

  getTextBoxContent = () => {
    switch (this.state.activeLayer) {
      case "supply":
        return configMap.supplyConfig;
      case "waste":
        return configMap.wasteWaterConfig;
      case "desalination":
        return configMap.desalinationConfig;
      case "dams":
        return configMap.damsConfig;
      case "canals":
        return configMap.canalConfig;
      default:
        return configMap.poolsConfig;
    }
  };

  setActiveLayer = layer => {
    this.setState({
      activeLayer: this.state.activeLayer === layer ? "natural" : layer
    });
  };

  onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "switchMapView":
        this.setActiveLayer(payload);
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
    this.updateTextBox();
  }

  componentWillUnmount() {
    this.context.socket.off("controller", this.onIncomingEvents);
  }

  render() {
    const { title, description, icon } = this.getTextBoxContent();
    return (
      <>
        <Pools
          config={configMap.poolsConfig}
          activeLayer={this.state.activeLayer}
        />
        <Groundwater
          config={configMap.groundwaterconfig}
          activeLayer={this.state.activeLayer}
        />
        <Dams
          config={configMap.damsConfig}
          activeLayer={this.state.activeLayer}
        />
        <WasteWater
          config={configMap.wasteWaterConfig}
          activeLayer={this.state.activeLayer}
        />
        <Supply
          config={configMap.supplyConfig}
          activeLayer={this.state.activeLayer}
        />
        <Desalination
          config={configMap.desalinationConfig}
          activeLayer={this.state.activeLayer}
        />
        <Canal
          config={configMap.canalConfig}
          activeLayer={this.state.activeLayer}
        />
        <div className="text-box">
          <div className="text-box__header">
            <i className="text-box__icon">
              <img src={icon} alt="" />
            </i>
            <span className="text-box__title">{title}</span>
          </div>
          <div className="body">{description}</div>
        </div>
      </>
    );
  }
}

export default Map;
