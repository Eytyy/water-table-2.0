import React from "react";

import MapLayerContent from "../MapLayerContent";

import { SupplyIcon } from "../../../icons/";
import SupplyText from "./SupplyText";

const Supply = props => {
  return (
    <MapLayerContent
      {...props}
      layerName="supply"
      renderIcon={() => <SupplyIcon />}
      renderText={props => <SupplyText {...props} />}
    />
  );
};

export default Supply;
