import { pools as poolsConfig } from "./pools";
import { natural as naturalConfig } from "./natural";
import { groundWater as groundwaterconfig } from "./groundwater";
import { dams as damsConfig } from "./dams";
import { wastewater as wasteWaterConfig } from "./wastewater";
import { supply as supplyConfig } from "./supply";
import { desalination as desalinationConfig } from "./desalination";
import { canals as canalConfig } from "./canals";

export const config = [
  naturalConfig,
  damsConfig,
  wasteWaterConfig,
  supplyConfig,
  desalinationConfig,
  canalConfig,
  groundwaterconfig,
  poolsConfig
];
