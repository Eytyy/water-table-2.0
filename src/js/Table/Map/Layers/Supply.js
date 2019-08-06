import React, { Component } from "react";

import LayerWrapper from "../LayerWrapper";
import MapLayerContent from "../MapLayerContent";

import { SupplyIcon } from "../../../icons/";
import SupplyText from "./SupplyText";

class Supply extends Component {
  render() {
    const { activeLayer, active, config } = this.props;

    return (
      <MapLayerContent
        layerName="supply"
        activeLayer={activeLayer}
        active={active}
        config={config}
        renderIcon={() => <SupplyIcon />}
        renderText={props => <SupplyText {...props} />}
      />
    );
  }
}

export default LayerWrapper(Supply, {
  pageName: "supply"
});
