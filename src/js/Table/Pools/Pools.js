import React, { Component } from 'react';
// import Pool from './Pool';
import PoolsConfig from '../../poolsConfig';
import PoolComponent from './PoolComponent';
import PoolsSVG from './PoolsSvg';
import PoolText from './PoolText';
import { socket } from '../../api';

class Pools extends Component {
	canvas = React.createRef()
	pools = []
	width="1080"
	height="1540"

	state = {
		ctx: null,
		activePool: undefined,
	}

	componentDidMount() {
		this.setState({
			ctx: this.canvas.current.getContext('2d')
		});
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
	

	render() {
		const { au, activeLayer } = this.props;
		return (
			<div className={`layer layer--pools ${activeLayer === 'natural' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<canvas id="pools" width={this.width} height={this.height} ref={this.canvas} />
				{
					this.state.ctx && PoolsConfig.entries.map((config) => Array.isArray(config.pool) ?
						config.pool.map(({ points }, index) =>
							<PoolComponent key={`${config.id}--${index}`} ctx={this.state.ctx} config={config} au={au} points={points} />
						):
						<PoolComponent key={config.id} ctx={this.state.ctx} config={config} au={au} />
					)
				}
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