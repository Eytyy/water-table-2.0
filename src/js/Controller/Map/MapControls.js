import React, { Component } from "react";
import { broadcastEvent } from "../../api";

import MapLayer from "./MapLayer";
import MapControlButton from "./MapControlButton";

import PoolsSVG from "./PoolsSVG";

import {
  NaturalIcon,
  SupplyIcon,
  DamIcon,
  CanalIcon,
  DesalinationIcon,
  TreatmentPlantIcon,
  GroundWaterIcon
} from "../../icons";

import {
  poolsConfig,
  damsConfig,
  desalinationConfig,
  canalConfig,
  supplyConfig,
  wasteWaterConfig,
  groundwaterconfig
} from "../../config";

class MapControls extends Component {
  state = {
    activeLayer: "natural",
    active: undefined
  };

  setActiveLayer = layer => {
    this.setState({
      activeLayer: this.state.activeLayer === layer ? "natural" : layer,
      active: layer === "canal" ? canalConfig.entries[0].id : this.state.active
    });
  };

  onClickLayer = view => {
    this.setActiveLayer(view);
    if (view === "canal") {
      broadcastEvent({
        source: "controller",
        event: "mapClicked",
        payload: canalConfig.entries[0].id
      });
    }
    broadcastEvent({
      source: "controller",
      event: "switchMapView",
      payload: view
    });
  };

  onPoolClick = e => {
    const currentTarget = e.currentTarget;
    let active = currentTarget.parentNode.classList.contains("svg-group")
      ? currentTarget.parentNode.id
      : currentTarget.id;

    this.setState({
      active
    });

    broadcastEvent({
      source: "controller",
      event: "poolClicked",
      payload: active
    });
  };

  onMapClick = e => {
    const target = e.currentTarget.id;

    this.setState({
      active: target
    });

    broadcastEvent({
      source: "controller",
      event: "mapClicked",
      payload: target
    });
  };

  // Put the buttons in a config file and loop over for better readability
  render() {
    const { activeLayer } = this.state;
    return (
      <section className="controller map-console">
        <div className="map-console__controls">
          <h1 className="controller__title">WATER MAP &amp; PROJECTS</h1>
          <div className="map-console__controls__group map-console__controls__group--main">
            <MapControlButton
              activeLayer={activeLayer}
              label="natural"
              children={["surface", "groundwater"]}
              renderIcon={() => <NaturalIcon />}
              title="Natural Water Resources"
              onClick={this.onClickLayer}
            />
            <MapControlButton
              activeLayer={activeLayer}
              label="supply"
              renderIcon={() => <SupplyIcon />}
              title="Utilities &amp; Water Supply Projects"
              onClick={this.onClickLayer}
            />
            <MapControlButton
              activeLayer={activeLayer}
              label="waste"
              renderIcon={() => <TreatmentPlantIcon />}
              title="Wastewater Treatment Plants"
              onClick={this.onClickLayer}
            />
            <MapControlButton
              activeLayer={activeLayer}
              label="desalination"
              renderIcon={() => <DesalinationIcon />}
              title="Water Desalination Stations"
              onClick={this.onClickLayer}
            />
            <MapControlButton
              activeLayer={activeLayer}
              label="dams"
              renderIcon={() => <DamIcon />}
              title="Dams"
              onClick={this.onClickLayer}
            />
            <MapControlButton
              activeLayer={activeLayer}
              label="canal"
              renderIcon={() => <CanalIcon />}
              title="King Abdullah Canal"
              onClick={this.onClickLayer}
            />
          </div>
          {(activeLayer === "natural" ||
            activeLayer === "surface" ||
            activeLayer === "groundwater") && (
            <div className="map-console__controls__group map-console__controls__group--secondary">
              <MapControlButton
                activeLayer={activeLayer}
                parent="natural"
                defaultChild
                label="surface"
                renderIcon={() => <NaturalIcon />}
                title="Surface Water"
                onClick={this.onClickLayer}
              />
              <MapControlButton
                parent="natural"
                activeLayer={activeLayer}
                label="groundwater"
                renderIcon={() => <GroundWaterIcon />}
                title="Ground Water"
                onClick={this.onClickLayer}
              />
            </div>
          )}
        </div>
        <div className="map-console__mini-map">
          <PoolsSVG
            activeLayer={this.state.activeLayer}
            PoolsConfig={poolsConfig}
            active={this.state.active}
            onPoolClick={this.onPoolClick}
          />
          <MapLayer
            layerName="groundwater"
            config={groundwaterconfig}
            renderIcon={() => <GroundWaterIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
          <MapLayer
            layerName="desalination"
            config={desalinationConfig}
            renderIcon={() => <DesalinationIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
          <MapLayer
            layerName="supply"
            config={supplyConfig}
            renderIcon={() => <SupplyIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
          <MapLayer
            layerName="waste"
            config={wasteWaterConfig}
            renderIcon={() => <TreatmentPlantIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
          <MapLayer
            layerName="dams"
            config={damsConfig}
            renderIcon={() => <DamIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
          <MapLayer
            layerName="canal"
            config={canalConfig}
            renderIcon={() => <CanalIcon />}
            active={this.state.active}
            activeLayer={this.state.activeLayer}
            onClick={this.onMapClick}
          />
        </div>
      </section>
    );
  }
}

export default MapControls;
