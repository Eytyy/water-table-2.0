import React, { Component } from 'react';
import { socket } from '../api';

import poolsConfig from '../poolsConfig';
import Pools from './Pools/Pools';

import WasteWater from './Layers/WasteWater';
import WasteWaterConfig from '../wastewaterConfig';

import Dams from './Layers/Dams';
import DamsConfig from '../damsConfig';

import Supply from './Layers/Supply';
import SupplyConfig from '../supplyConfig';

import Desalination from './Layers/Desalination';
import DesalinationConfig from '../desalinationConfig';

import Canal from './Layers/Canal';
import CanalConfig from '../canalConfig';

class Map extends Component {
	state = {
		activeLayer: 'default',
		playing: false,
		animationCurrentUnit: 0.0,
	}

	//animation settings
	Anim = {
		'duration': 4000,
		'interval' : 10,
		'stepUnit' : 1.0,
		'currUnit' : 0.0
	}

	raf

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'switchMapView':
					this.setActiveLayer(payload);
					break;
				default:
					return;
			}
		});
	}


	toggleAnimation = () => {
		if (!this.state.playing) {
			this.startAnimation();
		} else {
			this.stopAnimation();
		}
		this.state.playing = !this.state.playing;
	}

	startAnimation = () => {
		this.animate();
	}

	stopAnimation = () => {
		cancelAnimationFrame(this.raf);
	}

	animate = () => {
		let steps = this.Anim.duration / this.Anim.interval; // 300
		let step_u = this.Anim.stepUnit/steps; // 1.0/300
		
		this.setState({
			animationCurrentUnit: this.Anim.currUnit
		});

		if (this.Anim.currUnit >= 1.0){
			this.Anim.currUnit = 0;
			this.setState({
				animationCurrentUnit: 0
			});
		}
	
		this.Anim.currUnit += step_u;
		this.raf = requestAnimationFrame(this.animate);
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
			activeLayer: this.state.activeLayer === layer ? 'default' : layer
		});
	}

	componentDidMount() {
		// this.startAnimation();
		this.listenToIncomingEvents();
		this.updateTextBox();
	}

	render() {
		const { title, description, icon } = this.getTextBoxContent();
		return (
			<>
			<Pools activeLayer={this.state.activeLayer} au={this.state.animationCurrentUnit} />
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