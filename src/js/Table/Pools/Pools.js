import React, { Component } from 'react';
// import Pool from './Pool';
import PoolsConfig from '../../poolsConfig';
import PoolsSVG from './PoolsSvg';
import PoolText from './PoolText';
import { socket } from '../../api';
import cutout from '../../../cutout.png';

class Pools extends Component {
	canvas = React.createRef()
	ctx
	pools = []
	width="912"
	height="1540"

	particles = Array.from({length: 140000}, () => [
		Math.round(Math.random() * (this.width - 1)),
		Math.round(Math.random() * (this.height - 1))
	]);
	
	stop = false
	frameCount = 0;
	fps = 15
	fpsInterval
	startTime
	now
	then
	elapsed
	rf = null

	state = {
		activePool: undefined,
	}

	componentDidMount() {
		this.ctx = this.canvas.current.getContext('2d');
		this.startAnimating();
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

	startAnimating = () => {
		this.fpsInterval = 1000 / this.fps;
		this.then = Date.now();
		this.startTime = this.then;
		this.animate();
	}

	draw = () => {
		const ctx = this.ctx || this.canvas.current.getContext('2d');

		ctx.clearRect(0, 0, this.width, this.height);
		const imageData = ctx.getImageData(0, 0, this.width, this.height);
		const data = imageData.data;

		for (let i = 0; i < this.particles.length; i++) {
			const particle = this.particles[i];
			const index = 4 * (particle[0] + particle[1] * this.width);
			data[index + 0] = 255;
			data[index + 1] = 255;
			data[index + 2] = 255;
			data[index + 3] = 255;
		}

		ctx.putImageData(imageData, 0, 0);
	}

	animate = () => {

		// request another frame
		this.raf = requestAnimationFrame(this.animate);
		
		// calc elapsed time since last loop
		this.now = Date.now();
		this.elapsed = this.now - this.then;

		// if enough time has elapsed, draw the next frame
		
		if (this.elapsed > this.fpsInterval) {
				// Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
				this.then = this.now - (this.elapsed % this.fpsInterval);
				
				// draw 
				this.draw();

				// Move particles randomly:
				for (let i = 0; i < this.particles.length; i++) {
					const particle = this.particles[i];
					particle[0] = Math.max(0, Math.min(this.width - 1, Math.round(particle[0] + Math.random() * 2 - 1)));
					particle[1] = Math.max(0, Math.min(this.height - 1, Math.round(particle[1] + Math.random() * 2 - 1)));
				}
		}

	}
	
	render() {
		const { au, activeLayer } = this.props;
		return (
			<div className={`layer layer--pools ${activeLayer === 'default' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<canvas id="pools" width={this.width} height={this.height} ref={this.canvas} />
				<img src={cutout} alt="" width="auto" height={`${parseInt(this.height, 10) + 1}`} style={{ position: 'absolute', top: '0px', left: '0px'}}/>
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