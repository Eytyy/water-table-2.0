import React, { Component } from 'react';
// import Pools, { update as updatePools, updateCurrentStop } from './Pools/Pools';
// import Textures, { update as updateTextures } from './Pools/Textures';
import Pools from './Pools/Pools';
import Textures from './Pools/Textures';
// import Particles from './research/particles';

class Map extends Component {
	map = React.createRef()

	state = {
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
		
		// updatePools({au: this.Anim.currUnit});
		this.setState({
			animationCurrentUnit: this.Anim.currUnit
		});

		if (this.Anim.currUnit >= 1.0){
			this.Anim.currUnit = 0;
			this.setState({
				animationCurrentUnit: 0
			});
			// updateCurrentStop();
		}
	
		this.Anim.currUnit += step_u;
		this.raf = requestAnimationFrame(this.animate);
	}

	componentDidMount() {
	}
	

	render() {
		return (
			<div ref={this.map}>
				<Pools au={this.state.animationCurrentUnit} />
			</div>
		);
	}
}

export default Map;