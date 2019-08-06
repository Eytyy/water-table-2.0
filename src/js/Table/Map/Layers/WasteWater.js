import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import TreatmentPlantIcon from "../../../icons/TreatmentPlantIcon";
import WasteWaterText from "./WasteWaterText";

class WasteWater extends Component {
  render() {
    const { activeLayer, active, config } = this.props;

    return (
      <MapLayerContent
        layerName="waste"
        activeLayer={activeLayer}
        active={active}
        config={config}
        renderIcon={() => <TreatmentPlantIcon />}
        renderText={props => <WasteWaterText {...props} />}
      />
    );
  }
}

export default LayerWrapper(WasteWater, {
  pageName: "waste"
});
