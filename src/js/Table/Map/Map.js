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
import LayerContext from "./LayerContext";
import { configMap } from "../../config";

class Map extends Component {
  state = {
    activeLayer: "natural"
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
  }

  componentWillUnmount() {
    socket.off("controller", this.onIncomingEvents);
  }

  render() {
    return (
      <LayerContext.Provider value={this.state.activeLayer}>
        <Pools config={configMap.poolsConfig} />
        <Groundwater config={configMap.groundwaterconfig} />
        <Dams config={configMap.damsConfig} />
        <WasteWater config={configMap.wasteWaterConfig} />
        <Supply config={configMap.supplyConfig} />
        <Desalination config={configMap.desalinationConfig} />
        <Canal config={configMap.canalConfig} />
      </LayerContext.Provider>
    );
  }
}

export default Map;
