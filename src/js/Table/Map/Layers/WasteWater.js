import React from "react";

import { TreatmentPlantIcon } from "../../../icons/";
import MapLayerContent from "../MapLayerContent";
import WasteWaterText from "./WasteWaterText";

const WasteWater = props => {
  return (
    <MapLayerContent
      {...props}
      layerName="waste"
      renderIcon={() => <TreatmentPlantIcon />}
      renderText={props => <WasteWaterText {...props} />}
    />
  );
};

export default WasteWater;
