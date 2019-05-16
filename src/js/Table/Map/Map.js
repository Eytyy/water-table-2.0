import React, { Component } from 'react';
import { socket } from '../../api';

import poolsConfig from '../../poolsConfig';
import Pools from './Pools/Pools';

import WasteWater from './Layers/WasteWater';
import WasteWaterConfig from '../../wastewaterConfig';

import Dams from './Layers/Dams';
import DamsConfig from '../../damsConfig';

import Supply from './Layers/Supply';
import SupplyConfig from '../../supplyConfig';

import Desalination from './Layers/Desalination';
import DesalinationConfig from '../../desalinationConfig';

import Canal from './Layers/Canal';
import CanalConfig from '../../canalConfig';
import Groundwater from './Layers/Groundwater';

class Map extends Component {
	state = {
		activeLayer: 'natural',
	}
	
	updateTextBox = () => {
		switch(this.state.activeLayer) {
			default:
				break;
		}
	}

	getTextBoxContent = () => {
		switch(this.state.activeLayer) {
			case 'supply':
				return SupplyConfig;
			case 'waste':
				return WasteWaterConfig
			case 'desalination':
				return DesalinationConfig;
			case 'dams':
				return DamsConfig;
				case 'canal':
					return CanalConfig;
			default:
				return poolsConfig;
		}
	}

	setActiveLayer = (layer) => {
		this.setState({
			activeLayer: this.state.activeLayer === layer ? 'natural' : layer
		});
	}

	onIncomingEvents = message => {
		const { event, payload } = message;
		switch(event) {
			case 'switchMapView':
				this.setActiveLayer(payload);
				break;
			default:
				return;
		}
	}

	listenToIncomingEvents = () => {
		socket.on('controller', this.onIncomingEvents);
	}

	componentDidMount() {
		this.listenToIncomingEvents();
		this.updateTextBox();
	}

	componentWillUnmount() {
		socket.off('controller', this.onIncomingEvents);
	}
	render() {
		const { title, description, icon } = this.getTextBoxContent();
		return (
			<>
			<Pools activeLayer={this.state.activeLayer} au={this.state.animationCurrentUnit} />
			<Groundwater activeLayer={this.state.activeLayer} />
			<Dams activeLayer={this.state.activeLayer} />
			<WasteWater activeLayer={this.state.activeLayer} />
			<Supply activeLayer={this.state.activeLayer} />
			<Desalination activeLayer={this.state.activeLayer} />
			<Canal activeLayer={this.state.activeLayer} />
			<div className="text-box">
				<div className="text-box__header">
					<i className="text-box__icon"><img src={icon} alt=""/></i>
					<span className="text-box__title">{title}</span>
				</div>
				<div className="body">{description}</div>
			</div>
		</>
		);
	}
}

export default Map;