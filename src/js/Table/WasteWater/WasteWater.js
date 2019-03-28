import React, { Component } from 'react';
import { socket } from '../../api';
import WasteWaterConfig from '../../wastewaterConfig';
import WasteWaterText from './WasteWaterText';

class WasteWater extends Component {

	state = {
		activePlant: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'plantClicked':
					this.updateActivePlant(payload)
					break;
				default:
					return;
			}
		});
	}

	updateActivePlant = (payload) => {
		this.setState({
			activePlant: payload
		})
	}

	componentDidMount() {
		this.listenToIncomingEvents();
	}

	componentWillReceiveProps({ activeLayer }) {
		if(this.props.activeLayer !== activeLayer) {
			this.setState({
				activePlant: undefined
			});
		}
	}
	
	render() {
		const { activeLayer } = this.props;

		const activeClass = (id) => {
			if (typeof this.state.activePlant === 'undefined') {
				return ''
			} else {
				if (this.state.activePlant === id) {
					return 'is-active';
				} else {
					return 'is-inActive'
				}
			}
		}
		return (
			<div className={`layer layer--waste ${activeLayer === 'waste' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--waste-plants">
					<svg width="1080" height="1580" viewBox="0 0 1080 1580">
						<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(180, 190)">
							{
								WasteWaterConfig.entries.map(({ id, position }) => 
									<g className={`waste ${activeClass(id)}`}
										key={id}
										transform={`translate(${position.x}, ${position.y}) ${this.state.activePlant !== id ?  'scale(1, 1)' : 'scale(3, 3)'}`}
									>
										<g className="waste-inner">
											<path d="M16.8958333,13.3958333 C16.8958333,15.3288378 15.3288378,16.8958333 13.3958333,16.8958333 C11.4628289,16.8958333 9.89583333,15.3288378 9.89583333,13.3958333 C9.89583333,11.4628289 11.4628289,9.89583333 13.3958333,9.89583333 C15.3288378,9.89583333 16.8958333,11.4628289 16.8958333,13.3958333 Z" id="Stroke-1" stroke="#262525" strokeWidth="3"></path>
											<path d="M13.6784958,1.52083333 C6.96400073,1.52083333 1.52083333,6.88411068 1.52083333,13.5000562 C1.52083333,20.1158893 6.96400073,25.4791667 13.6784958,25.4791667 C13.7930647,25.4791667 13.9070631,25.4772552 14.0208333,25.4742194 L14.0208333,1.52578059 C13.9070631,1.52274477 13.7930647,1.52083333 13.6784958,1.52083333 Z" id="Stroke-3" stroke="#262525" strokeWidth="3"></path>
											<path d="M26,13.5000562 C26,6.99431133 20.667853,1.69957062 14.0208333,1.52083333 L14.0208333,25.4791667 C20.667853,25.3004294 26,20.0058011 26,13.5000562 Z" id="Stroke-5" stroke="#262525" strokeWidth="3"></path>
											<path d="M1,13.5 C1,20.4035653 6.59643475,26 13.5,26 L13.5,1 C6.59643475,1 1,6.59643475 1,13.5 Z" id="Stroke-7" stroke="#FEFEFE" strokeWidth="2"></path>
											<path d="M13.5,1 L13.5,26 C20.4035653,26 26,20.4034765 26,13.4999428 C26,6.59640915 20.4035653,1 13.5,1 Z" id="Stroke-9" stroke="#FEFEFE" strokeWidth="2"></path>
											<path d="M27.4479167,13.5 C27.4479167,20.9559438 21.4038604,27 13.9479167,27 C6.4919729,27 0.447916667,20.9559438 0.447916667,13.5 C0.447916667,6.04405624 6.4919729,0 13.9479167,0 C21.4038604,0 27.4479167,6.04405624 27.4479167,13.5" id="Fill-11"></path>
											<path d="M15.8958333,13.3958333 C15.8958333,14.7765508 14.7765508,15.8958333 13.3958333,15.8958333 C12.0151159,15.8958333 10.8958333,14.7765508 10.8958333,13.3958333 C10.8958333,12.0151159 12.0151159,10.8958333 13.3958333,10.8958333 C14.7765508,10.8958333 15.8958333,12.0151159 15.8958333,13.3958333 Z" id="Stroke-1" stroke="#FFFFFF" strokeWidth="3"></path>
										</g>
										<rect id={id} x="0" y="0" width="30" height="30" fill="transparent"></rect>
									</g>)
							}
						</g>
					</svg>
				</div>
				{
					WasteWaterConfig.entries.map(({ name, figures, id, position }) =>
						<WasteWaterText
							key={`rx-${id}`}
							activePlant={this.state.activePlant}
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

export default WasteWater;

