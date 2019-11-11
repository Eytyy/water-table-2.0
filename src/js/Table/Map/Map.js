import React, { useState, useEffect } from "react";
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

const Map = () => {
  const [activeLayer, setActiveLayer] = useState("natural");

  useEffect(() => {
    startListeningToIncomingEvents();
    return function cleanup() {
      stopListeningToIncomingEvents();
    };
  }, []);

  const onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "switchMapView":
        const nextActiveLayer = payload === activeLayer ? "natural" : payload;
        setActiveLayer(nextActiveLayer);
        break;
      default:
        return;
    }
  };

  const startListeningToIncomingEvents = () => {
    socket.on("controller", onIncomingEvents);
  };

  const stopListeningToIncomingEvents = () => {
    socket.off("controller", onIncomingEvents);
  };

  return (
    <LayerContext.Provider value={activeLayer}>
      <Pools config={configMap.poolsConfig} />
      <Groundwater config={configMap.groundwaterconfig} />
      <Dams config={configMap.damsConfig} />
      <WasteWater config={configMap.wasteWaterConfig} />
      <Supply config={configMap.supplyConfig} />
      <Desalination config={configMap.desalinationConfig} />
      <Canal config={configMap.canalConfig} />
    </LayerContext.Provider>
  );
};

export default Map;
