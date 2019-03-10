import React, { Component } from 'react';
import { socket } from '../api';

// import Textures, { update as updateTextures } from './Pools/Textures';
// import Particles from './research/particles';
// import Textures from './Pools/Textures';

import Pools from './Pools/Pools';
import PoolsConfig from '../poolsConfig';

import WasteWater from './WasteWater/WasteWater';
import WasteWaterConfig from '../wastewaterConfig';

class Map extends Component {
	map = React.createRef()

	state = {
		activeLayer: 'natural',
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
			case 'waste':
				return WasteWaterConfig
			default:
				return PoolsConfig
		}
	}

	setActiveLayer = (layer) => {
		this.setState({
			activeLayer: layer
		});
	}

	componentDidMount() {
		// this.startAnimation();
		this.listenToIncomingEvents();
		this.map.current.addEventListener('click', this.stopAnimation);
		this.updateTextBox();
	}

	render() {
		const { title, description, icon } = this.getTextBoxContent();
		return (
			<div ref={this.map}>
				<Pools activeLayer={this.state.activeLayer} au={this.state.animationCurrentUnit} />
				<WasteWater activeLayer={this.state.activeLayer} />
				<div className="text-box">
					<div className="text-box__header">
						<i className="text-box__icon"><img src={icon} alt=""/></i>
						<span className="text-box__title">{title}</span>
					</div>
					<div className="body">{description}</div>
				</div>
			</div>
		);
	}
}

export default Map;