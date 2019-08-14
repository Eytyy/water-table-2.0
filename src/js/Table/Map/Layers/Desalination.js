import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { DesalinationIcon } from "../../../icons/";
import DesalinationText from "./DesalinationText";

class Desalination extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="desalination"
        renderIcon={() => <DesalinationIcon />}
        renderText={props => <DesalinationText {...props} />}
      />
    );
  }
}

export default Desalination;
