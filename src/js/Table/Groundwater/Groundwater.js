import React, { Component } from 'react';
import { socket } from '../../api';
import GroundwaterText from './GroundwaterText';
import GroundWaterConfig from '../../groundwaterConfig';

class Groundwater extends Component {
	state = {
		activeResource: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'groundResourceClicked':
					this.updateActiveResource(payload)
					break;
				default:
					return;
			}
		});
	}

	updateActiveResource = (payload) => {
		this.setState({
			activeResource: payload
		})
	}

	componentDidMount() {
		this.listenToIncomingEvents();
	}

	componentWillReceiveProps({ activeLayer }) {
		if(this.props.activeLayer !== activeLayer) {
			this.setState({
				activeResource: undefined
			});
		}
	}
	
	render() {
		const { activeLayer } = this.props;

		const activeClass = (id) => {
			if (typeof this.state.activeResource === 'undefined') {
				return ''
			} else {
				if (this.state.activeResource === id) {
					return 'is-active';
				} else {
					return 'is-inActive'
				}
			}
		}
		return (
			<div className={`layer layer--ground ${activeLayer === 'ground' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--ground-water">
					<svg width="1080" height="1580" viewBox="0 0 1080 1580">
						<g  stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(180, 190)">
							{
								GroundWaterConfig.entries.map(({ id, position }) => 
									<g className={`waste ${activeClass(id)}`} key={id} transform={`translate(${position.x}, ${position.y}) ${this.state.activeResource !== id ?  'scale(1, 1)' : 'scale(3, 3)'}`}>
										<rect id="Rectangle-3" fill="#FFFFFF" x="4" y="0" width="33" height="27"></rect>
										<path d="M0,11.5 C0.974431439,13.1666667 2.8362733,14 5.58552559,14 C9.70940401,14 9.75912746,11 13.8652459,11 C17.9713643,11 17.9056522,14 22.013542,14 C26.1214318,14 26.1702765,11 30.2932623,11 C33.0419195,11 35.2774987,12.3333333 37,15" id="Path-3-Copy" stroke="#000000" strokeWidth="3"></path>
										<path d="M0,18.5 C0.974431439,20.1666667 2.8362733,21 5.58552559,21 C9.70940401,21 9.75912746,18 13.8652459,18 C17.9713643,18 17.9056522,21 22.013542,21 C26.1214318,21 26.1702765,18 30.2932623,18 C33.0419195,18 35.2774987,19.3333333 37,22" id="Path-3-Copy" stroke="#000000" strokeWidth="3"></path>
									</g>)
							}
						</g>
					</svg>
				</div>
				{
					GroundWaterConfig.entries.map(({ name, figures, id, position }) =>
						<GroundwaterText
							key={`rx-${id}`}
							activeResource={this.state.activeResource}
							name={name}
							figures={figures}
							id={id}
							position={position}
						/>
					)
				}
			</div>
			
		);
	}
}

export default Groundwater;

