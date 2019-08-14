import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { GroundWaterIcon } from "../../../icons/";
import GroundWaterText from "./GroundWaterText";
import Basins from "./Basins";

class Groundwater extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="groundwater"
        renderIcon={() => <GroundWaterIcon />}
        renderText={props => <GroundWaterText {...props} />}
      >
        <Basins />
      </MapLayerContent>
    );
  }
}

export default Groundwater;
