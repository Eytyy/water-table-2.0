import React, { Component } from 'react';
import Pool from './Pool';
import { DeadSeaTopConfig, DeadSeaBottomConfig, AzraqConfig, JafarConfig, TabariahConfig, AqabaConfig } from './config';


class Pools extends Component {
	canvas = React.createRef()
	ctx = null
	pools = {}
	width="1080"
	height="1920"

	setupPools = (ctx, au) => {
		this.pools.DeadSeaTop = new Pool(DeadSeaTopConfig);
		this.pools.DeadSeaBottom = new Pool(DeadSeaBottomConfig);
		this.pools.Azraq = new Pool(AzraqConfig);
		this.pools.Jafar = new Pool(JafarConfig);
    this.pools.Aqaba = new Pool(AqabaConfig);
		this.pools.Tabariah = new Pool(TabariahConfig);

		Object.keys(this.pools).map((pool) => {
			this.pools[pool].init({ ctx, au });
		});
	}

	updatePools = (ctx, au) => {
		ctx.clearRect(0, 0, this.width, this.height);
		Object.keys(this.pools).map((pool) => {
			this.pools[pool].update({ ctx, au });
		});
	}

	updateCurrentStop = (ctx, au) => {
		Object.keys(this.pools).map((pool) => {
			this.pools[pool].updateCurrentStop();
		});
	}

	componentDidMount() {
		const { au } = this.props;
		this.ctx = this.canvas.current.getContext('2d');
		this.setupPools(this.ctx, au);
	}

	
	componentDidUpdate({ au }) {
		if (au !== this.props.au) {
			this.updatePools(this.ctx, au);
			if (au === 0) {
				this.updateCurrentStop(this.ctx, this.props.au);
			}
		}
	}
	
	render() {
		return (
			<canvas id="pools" width={this.width} height={this.height} ref={this.canvas}></canvas>
		);
	}
}

export default Pools;