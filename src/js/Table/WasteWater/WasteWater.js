import React, { Component } from 'react';
import { socket } from '../../api';
import WasteWaterConfig from '../../wastewaterConfig';
import WasteWaterText from './WasteWaterText';
import TreatmentPlantIcon from '../../icons/TreatmentPlantIcon';

class WasteWater extends Component {

	state = {
		active: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'wasteClicked':
					this.updateActive(payload)
					break;
				default:
					return;
			}
		});
	}

	updateActive = (payload) => {
		this.setState({
			active: payload
		})
	}

	componentDidMount() {
		this.listenToIncomingEvents();
	}

	componentWillReceiveProps({ activeLayer }) {
		if(this.props.activeLayer !== activeLayer) {
			this.setState({
				active: undefined
			});
		}
	}
	
	render() {
		const { activeLayer } = this.props;

		return (
			<div className={`layer layer--waste ${activeLayer === 'waste' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--waste-plants">
					{
						WasteWaterConfig.entries.map(({ id, position }) => 
							<div className="icon" key={id} style={{
								width: '50px',
								height: '50px',
								position: 'absolute',
								top: position.y + 180,
								left: position.x + 190,
								transform: `${this.state.active !== id ? 'scale(1, 1)' : 'scale(3, 3)'}`,
								zIndex: `${this.state.active !== id ? '2' : '1'}`
								}}
							>
								<TreatmentPlantIcon />
							</div>
						)
					}
				</div>
				{
					WasteWaterConfig.entries.map(({ name, figures, id, position }) =>
						<WasteWaterText
							key={`rx-${id}`}
							active={this.state.active}
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

