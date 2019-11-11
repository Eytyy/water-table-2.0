import React from "react";

import MapLayerContent from "../MapLayerContent";

import { DesalinationIcon } from "../../../icons/";
import DesalinationText from "./DesalinationText";

const Desalination = props => {
  return (
    <MapLayerContent
      {...props}
      layerName="desalination"
      renderIcon={() => <DesalinationIcon />}
      renderText={props => <DesalinationText {...props} />}
    />
  );
};

export default Desalination;
