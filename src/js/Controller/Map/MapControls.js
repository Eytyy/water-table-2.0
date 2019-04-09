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

class MapControls extends Component {
	state = {
		activeLayer: 'default', 
		active: undefined, 
	}

	setActiveLayer = (layer) => {
		let active;
		if (layer === 'canal') {
			active = canalConfig.entries[0].id;
		}
		this.setState({
			activeLayer: this.state.activeLayer === layer ? 'default' : layer,
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
						<div 
							className={`btn-group ${activeLayer === 'default' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('default'); }}
						>
							<i className="btn-icon icon--default">
								<NaturalIcon />
							</i>
							<span className="btn-label">Natural Water Resources</span>
						</div>
						<div 
							className={`btn-group ${activeLayer === 'supply' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('supply'); }}
						>
							<i className="btn-icon icon--supply">
								<SupplyIcon />
							</i>
							<span className="btn-label">Utilities &amp; Water Supply Projects</span>
						</div>

						<div 
							className={`btn-group ${activeLayer === 'waste' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('waste'); }}
						>
							<i className="btn-icon icon--waste">
								<TreatmentPlantIcon />
							</i>
							<span className="btn-label">Wastewater Treatment Plants</span>
						</div>
						<div 
							className={`btn-group ${activeLayer === 'desalination' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('desalination'); }}
						>
							<i className="btn-icon icon--desalination">
								<DesalinationIcon />
							</i>
							<span className="btn-label">Water Desalination Stations</span>
						</div>
						<div
							className={`btn-group ${activeLayer === 'dams' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('dams'); }}
						>
							<i className="btn-icon icon--dams">
								<DamIcon />
							</i>
							<span className="btn-label">Dams</span>
						</div>
						<div
							className={`btn-group ${activeLayer === 'canal' ? 'is-active' : ''}`}
							onClick={() => { this.onClickLayer('canal'); }}
						>
							<i className="btn-icon icon--canal">
								<CanalIcon />
							</i>
							<span className="btn-label">King Abdullah Canal</span>
						</div>
					</div>
				</div>
				<div className="map-console__mini-map">
					<PoolsSVG
						activeLayer={this.state.activeLayer}
						PoolsConfig={poolsConfig}
						active={this.state.active}
						onPoolClick={this.onPoolClick}
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

