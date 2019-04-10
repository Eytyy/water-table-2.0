import React, { Component } from 'react';
import { broadcastEvent } from '../../api';

import PoolsSVG from './PoolsSVG';

import NaturalIcon from '../../icons/NaturalIcon';
import SupplyIcon from '../../icons/SupplyIcon';
import DamIcon from '../../icons/DamIcon';
import CanalIcon from '../../icons/CanalIcon';
import DesalinationIcon from '../../icons/DesalinationIcon';
import TreatmentPlantIcon from '../../icons/TreatmentPlantIcon';

import MapLayer from './MapLayer';

import poolsConfig from '../../poolsConfig';
import damsConfig from '../../damsConfig';
import desalinationConfig from '../../desalinationConfig';
import canalConfig from '../../canalConfig';
import supplyConfig from '../../supplyConfig';
import wastewaterConfig from '../../wastewaterConfig';
import groundwaterconfig from '../../groundwaterconfig';
import MapControlButton from './MapControlButton';
import GroundWaterIcon from '../../icons/GroundWaterIcon';

class MapControls extends Component {
	state = {
		activeLayer: 'surface', 
		active: undefined, 
	}

	setActiveLayer = (layer) => {
		let active;
		if (layer === 'canal') {
			active = canalConfig.entries[0].id;
		}
		this.setState({
			activeLayer: this.state.activeLayer === layer ? 'surface' : layer,
			active,
		});
	}

	onClickLayer = view => {
		this.setActiveLayer(view);
		if (view === 'canal') {
			broadcastEvent({
				source: 'controller',
				event:  'mapClicked',
				payload: canalConfig.entries[0].id
			})
		}
		broadcastEvent({
			source: 'controller',
			event:  'switchMapView',
			payload: view
		})
	}

	onPoolClick = (e) => {
		let id;
		let target = e.currentTarget;
		let parent = target.parentNode;
		if (parent.classList.contains('svg-group')) {
			id = parent.id;
		} else {
			id = target.id;
		}

		this.setState({
			active: id
		});

		broadcastEvent({
			source: 'controller',
			event:  'poolClicked',
			payload: id
		})
	}


	onMapClick = (e) => {
		const target = e.currentTarget.id;

		this.setState({
			active: target
		});

		broadcastEvent({
			source: 'controller',
			event: 'mapClicked',
			payload: target
		})
	}

	// Put the buttons in a config file and loop over for better readability
	render() {
		const { activeLayer } = this.state;
		return (
			<section className="map-console">
				<div className="map-console__controls">
					<h1>WATER MAP &amp; PROJECTS</h1>
					<div className="map-console__controls__group map-console__controls__group--main">
						<MapControlButton 
							activeLayer={activeLayer}
							label="default"
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
					{ (activeLayer === 'surface' || activeLayer === 'groundwater') && <div className="map-console__controls__group map-console__controls__group--secondary">
						<MapControlButton 
							activeLayer={activeLayer}
							label="surface"
							renderIcon={() => <NaturalIcon />}
							title="Surface Water"
							onClick={this.onClickLayer}
						/>
						<MapControlButton 
							activeLayer={activeLayer}
							label="groundwater"
							renderIcon={() => <GroundWaterIcon />}
							title="Ground Water"
							onClick={this.onClickLayer}
						/>
					</div>}
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
						config={wastewaterConfig}
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

