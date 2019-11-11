import React from "react";

import MapLayerContent from "../MapLayerContent";

import { DamIcon } from "../../../icons/";
import DamsText from "./DamsText";

const Dams = props => {
  return (
    <MapLayerContent
      {...props}
      layerName="dams"
      renderIcon={() => <DamIcon />}
      renderText={props => <DamsText {...props} />}
    />
  );
};

export default Dams;
