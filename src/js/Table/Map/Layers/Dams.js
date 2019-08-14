import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import { DamIcon } from "../../../icons/";
import DamsText from "./DamsText";

class Dams extends Component {
  render() {
    const { active, config } = this.props;
    return (
      <MapLayerContent
        layerName="dams"
        active={active}
        config={config}
        renderIcon={() => <DamIcon />}
        renderText={props => <DamsText {...props} />}
      />
    );
  }
}

export default LayerWrapper(Dams, {
  pageName: "dams"
});
