import React, { Component } from 'react';
import { socket } from '../../api';
import SupplyConfig from '../../supplyConfig';
import SupplyText from './SupplyText';
import SupplyIcon from '../../icons/SupplyIcon';

class Supply extends Component {

	state = {
		active: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'supplyClicked':
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
			<div className={`layer layer--supply ${activeLayer === 'supply' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--supply">
					{
						SupplyConfig.entries.map(({ id, position }) => 
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
								<SupplyIcon />
							</div>
						)
					}
				</div>
				{
					SupplyConfig.entries.map(({ name, figures, id, position }) =>
						<SupplyText
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

export default Supply;

