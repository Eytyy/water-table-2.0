import React, { Component } from 'react';
import Pool from './Pool';
import PoolsConfig from './config';

class Pools extends Component {
	canvas = React.createRef()
	ctx = null
	pools = []
	width="1080"
	height="1920"

	setupPools = (ctx, au) => {
		this.pools = PoolsConfig.entries.map(config => ({
			id: config.id,
			instance: new Pool(config)
		}));

		this.pools.map((pool) => {
			pool.instance.init({ ctx, au });
		});
	}

	updatePools = (ctx, au) => {
		ctx.clearRect(0, 0, this.width, this.height);
		this.pools.map(pool => {
			pool.update({ ctx, au });
		});
	}

	updateCurrentStop = (ctx, au) => {
		this.pools.map(pool => {
			pool.updateCurrentStop();
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
			<canvas id="pools" width={this.width} height={this.height} ref={this.canvas} />
		);
	}
}

export default Pools;