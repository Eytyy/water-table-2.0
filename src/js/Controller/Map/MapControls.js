import React, { Component } from 'react';
import { broadcastEvent } from '../../api';
import PoolsSVG from './PoolsSVG';
import PoolsConfig from '../../poolsConfig';

import WasteWaterSvg from './WasteWaterSvg';
import WasteWaterConfig from '../../wastewaterConfig';

class MapControls extends Component {
	state = {
		activeLayer: 'natural',
		activePool: undefined,
		activePlant: undefined,
	}

	setActiveLayer = (layer) => {
		this.setState({
			activeLayer: layer,
			activePool: undefined,
			activePlant: undefined,
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

	onPoolClick = (e) => {
		let id;
		let target = e.target;
		let parent = target.parentNode;
		if (parent.classList.contains('svg-group')) {
			id = parent.id;
		} else {
			id = target.id;
		}

		this.setState({
			activePool: id
		});

		broadcastEvent({
			source: 'controller',
			event:  'poolClicked',
			payload: id
		})
	}

	onPlantClick = (e) => {
		let target = e.target.id;

		this.setState({
			activePlant: target
		});

		broadcastEvent({
			source: 'controller',
			event:  'plantClicked',
			payload: target
		})
	}

	render() {
		return (
			<section className="map-console">
				<div className="map-console__controls">
					<h1>WATER MAP &amp; PROJECTS</h1>
					<div className="map-console__controls__main">
						<div className="btn-group" onClick={() => { this.onClickLayer('natural'); }}>
							<i className="btn-icon icon--natural" />
							<span className="btn-label">Natural Water Resources</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClickLayer('utilities'); }}>
							<i className="btn-icon icon--projects" />
							<span className="btn-label">Utilities &amp; Water Supply Projects</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClickLayer('waste'); }}>
							<i className="btn-icon icon--waste" />
							<span className="btn-label">Wastewater Treatment Plants</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClickLayer('conveyors'); }}>
							<i className="btn-icon icon--conveyors" />
							<span className="btn-label">Water Conveyors</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClickLayer('dams'); }}>
							<i className="btn-icon icon--dams" />
							<span className="btn-label">Dams</span>
						</div>
					</div>
				</div>
				<div className="map-console__mini-map">
					<PoolsSVG
						activeLayer={this.state.activeLayer}
						PoolsConfig={PoolsConfig}
						activePool={this.state.activePool}
						onPoolClick={this.onPoolClick}
					/>
					<WasteWaterSvg
						activeLayer={this.state.activeLayer}
						config={WasteWaterConfig}
						activePlant={this.state.activePlant}
						onPlantClick={this.onPlantClick}
					/>
				</div>
			</section>
		);
	}
}

export default MapControls;

