import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { DamIcon } from "../../../icons/";
import DamsText from "./DamsText";

class Dams extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="dams"
        renderIcon={() => <DamIcon />}
        renderText={props => <DamsText {...props} />}
      />
    );
  }
}

export default Dams;
