import React, { Component } from "react";
import { socket } from "../../api";

import Pools from "./layers/Pools/Pools";
import Dams from "./layers/Dams";
import WasteWater from "./layers/WasteWater";
import Supply from "./layers/Supply";
import Desalination from "./layers/Desalination";
import Canal from "./layers/Canal";
import Groundwater from "./layers/Groundwater";
import Basins from "./layers/Basins";

import {
  poolsConfig,
  groundwaterconfig,
  DamsConfig,
  WasteWaterConfig,
  SupplyConfig,
  DesalinationConfig,
  CanalConfig
} from "../../config";

class Map extends Component {
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
        return SupplyConfig;
      case "waste":
        return WasteWaterConfig;
      case "desalination":
        return DesalinationConfig;
      case "dams":
        return DamsConfig;
      case "canal":
        return CanalConfig;
      default:
        return poolsConfig;
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
    socket.on("controller", this.onIncomingEvents);
  };

  componentDidMount() {
    this.listenToIncomingEvents();
    this.updateTextBox();
  }

  componentWillUnmount() {
    socket.off("controller", this.onIncomingEvents);
  }

  render() {
    const { title, description, icon } = this.getTextBoxContent();
    return (
      <>
        <Pools config={poolsConfig} activeLayer={this.state.activeLayer} />
        <Groundwater
          config={groundwaterconfig}
          activeLayer={this.state.activeLayer}
        />
        <Dams config={DamsConfig} activeLayer={this.state.activeLayer} />
        <WasteWater
          config={WasteWaterConfig}
          activeLayer={this.state.activeLayer}
        />
        <Supply config={SupplyConfig} activeLayer={this.state.activeLayer} />
        <Desalination
          config={DesalinationConfig}
          activeLayer={this.state.activeLayer}
        />
        <Canal config={CanalConfig} activeLayer={this.state.activeLayer} />
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
