import React, { Component } from 'react';
import { socket } from '../../api';
import DamsConfig from '../../DamsConfig';
import DamsText from './DamsText';
import DamIcon from '../../icons/DamIcon';

class Dams extends Component {

	state = {
		active: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'damClicked':
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
			<div className={`layer layer--dams ${activeLayer === 'dams' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--dams">
					{
						DamsConfig.entries.map(({ id, position }) => 
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
								<DamIcon />
							</div>
						)
					}
				</div>
				{
					DamsConfig.entries.map(({ name, figures, id, position }) =>
						<DamsText
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

export default Dams;

