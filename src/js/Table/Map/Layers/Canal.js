import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { CanalIcon } from "../../../icons/";
import CanalText from "./CanalText";

class Canal extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="canal"
        renderIcon={() => <CanalIcon />}
        renderText={props => <CanalText {...props} />}
      />
    );
  }
}

export default Canal;
