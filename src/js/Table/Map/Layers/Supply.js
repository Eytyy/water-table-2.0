import React, { Component } from "react";

import MapLayerContent from "../MapLayerContent";

import { SupplyIcon } from "../../../icons/";
import SupplyText from "./SupplyText";

class Supply extends Component {
  render() {
    return (
      <MapLayerContent
        {...this.props}
        layerName="supply"
        renderIcon={() => <SupplyIcon />}
        renderText={props => <SupplyText {...props} />}
      />
    );
  }
}

export default Supply;
