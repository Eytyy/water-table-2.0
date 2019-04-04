import React, { Component } from 'react';
import { broadcastEvent } from '../../api';

import PoolsSVG from './PoolsSVG';

// unify the usage of icon and svg
// what's the difference ? one has onClick event listener the other
// is just for looks :S
// actually wait an svg has multiple icons with each icon having an event listener
// the icon is just an ico... okay need to think about this separately
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
		this.setState({
			activeLayer: this.state.activeLayer === layer ? 'default' : layer,
			active: undefined,
		});
	}

	onClickLayer = view => {
		this.setActiveLayer(view);
		broadcastEvent({
			source: 'controller',
			event:  'switchMapView',
			payload: view
		})
	}

	onMapClick = (e, type) => {
		const event = `${type}Clicked`;
		const target = e.target.id;

		this.setState({
			active: target
		});

		broadcastEvent({
			source: 'controller',
			event,
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

