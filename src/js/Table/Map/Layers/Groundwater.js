import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import { GroundWaterIcon } from "../../../icons/";
import GroundWaterText from "./GroundWaterText";
import Basins from "./Basins";

class Groundwater extends Component {
  render() {
    const { active, config } = this.props;

    return (
      <MapLayerContent
        layerName="groundwater"
        active={active}
        config={config}
        renderIcon={() => <GroundWaterIcon />}
        renderText={props => <GroundWaterText {...props} />}
      >
        <Basins />
      </MapLayerContent>
    );
  }
}

export default LayerWrapper(Groundwater, {
  pageName: "groundwater"
});
