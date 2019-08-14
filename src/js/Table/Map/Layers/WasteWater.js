import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { TreatmentPlantIcon } from "../../../icons/";
import WasteWaterText from "./WasteWaterText";

class WasteWater extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="waste"
        renderIcon={() => <TreatmentPlantIcon />}
        renderText={props => <WasteWaterText {...props} />}
      />
    );
  }
}

export default WasteWater;
