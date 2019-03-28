import React, { Component } from 'react';
// import Pool from './Pool';
import PoolsConfig from '../../poolsConfig';
import PoolsSVG from './PoolsSvg';
import PoolText from './PoolText';
import { socket } from '../../api';
import cutout from '../../../cutout.png';

class Pools extends Component {
	canvas = React.createRef()
	pools = []
	width="912"
	height="1540"

	particles = Array.from({length: 180000}, () => [
		Math.round(Math.random() * (this.width - 1)),
		Math.round(Math.random() * (this.height - 1))
	]);
	
	rf = null

	state = {
		ctx: null,
		activePool: undefined,
	}

	componentDidMount() {
		this.setState({
			ctx: this.canvas.current.getContext('2d')
		});
		this.raf = requestAnimationFrame(this.animate);
		this.listenToIncomingEvents();
	}
 
	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'poolClicked':
					this.updateActivePool(payload)
					break;
				default:
					return;
			}
		});
	}

	updateActivePool = activePool => {
		this.setState({
			activePool
		});
	}

	componentWillReceiveProps({ activeLayer }) {
		if(this.props.activeLayer !== activeLayer) {
			this.setState({
				activePool: undefined
			});
		}
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.rf)	;
		this.rf = null;
	}
	

	animate = () => {
		this.raf = requestAnimationFrame(this.animate);
		  // Draw particles:
			this.state.ctx.clearRect(0, 0, this.width, this.height);
			const imageData = this.state.ctx.getImageData(0, 0, this.width, this.height);
			const data = imageData.data;
			for (let i = 0; i < this.particles.length; i++) {
				const particle = this.particles[i];
				const index = 4 * (particle[0] + particle[1] * this.width);
				data[index + 0] = 255;
				data[index + 1] = 255;
				data[index + 2] = 255;
				data[index + 3] = 255;
			}
			this.state.ctx.putImageData(imageData, 0, 0);
			
			// Move particles randomly:
			for (let i = 0; i < this.particles.length; i++) {
				const particle = this.particles[i];
				particle[0] = Math.max(0, Math.min(this.width - 1, Math.round(particle[0] + Math.random() * 2 - 1)));
				particle[1] = Math.max(0, Math.min(this.height - 1, Math.round(particle[1] + Math.random() * 2 - 1)));
			}
	}
	
	render() {
		const { au, activeLayer } = this.props;
		return (
			<div className={`layer layer--pools ${activeLayer === 'natural' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<canvas id="pools" width={this.width} height={this.height} ref={this.canvas} />
				<img src={cutout} alt="" width="auto" height={this.height} style={{ position: 'absolute', top: '0px', left: '0px'}}/>
				<PoolsSVG
					PoolsConfig={PoolsConfig}
					activePool={this.state.activePool}
				/>
				{
					PoolsConfig.entries.map(({ name, figures, id, pool }) =>
						Array.isArray(pool) ?
							<PoolText
								key={`rx-${id}`}
								activePool={this.state.activePool}
								name={name}
								figures={figures}
								id={id}
								points={pool[0].points}
							/> :
							<PoolText
								key={`rx-${id}`}
								activePool={this.state.activePool}
								name={name}
								figures={figures}
								id={id}
								points={pool.points}
							/>
					)
				}
			</div>
		);
	}
}

export default Pools;