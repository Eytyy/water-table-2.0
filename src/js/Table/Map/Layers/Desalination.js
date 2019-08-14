import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import { DesalinationIcon } from "../../../icons/";
import DesalinationText from "./DesalinationText";

class Desalination extends Component {
  render() {
    const { active, config } = this.props;
    return (
      <MapLayerContent
        layerName="desalination"
        active={active}
        config={config}
        renderIcon={() => <DesalinationIcon />}
        renderText={props => <DesalinationText {...props} />}
      />
    );
  }
}

export default LayerWrapper(Desalination, {
  pageName: "desalination"
});
