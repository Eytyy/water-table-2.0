import React from "react";

import MapLayerContent from "../MapLayerContent";

import { GroundWaterIcon } from "../../../icons/";
import GroundWaterText from "./GroundWaterText";
import Basins from "./Basins";

const Groundwater = props => {
  return (
    <MapLayerContent
      {...props}
      layerName="groundwater"
      renderIcon={() => <GroundWaterIcon />}
      renderText={props => <GroundWaterText {...props} />}
    >
      <Basins />
    </MapLayerContent>
  );
};

export default Groundwater;
