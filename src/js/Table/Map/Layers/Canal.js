import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import { CanalIcon } from "../../../icons/";
import CanalText from "./CanalText";

class Canal extends Component {
  render() {
    const { activeLayer, active, config } = this.props;
    return (
      <MapLayerContent
        layerName="canal"
        activeLayer={activeLayer}
        active={active}
        config={config}
        renderIcon={() => <CanalIcon />}
        renderText={props => <CanalText {...props} />}
      />
    );
  }
}

export default LayerWrapper(Canal, {
  pageName: "canal"
});
