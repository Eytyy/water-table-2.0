import React from "react";

import MapLayerContent from "../MapLayerContent";

import { CanalIcon } from "../../../icons/";
import CanalText from "./CanalText";

const Canal = props => (
  <MapLayerContent
    {...props}
    layerName="canal"
    renderIcon={() => <CanalIcon />}
    renderText={props => <CanalText {...props} />}
  />
);

export default Canal;
