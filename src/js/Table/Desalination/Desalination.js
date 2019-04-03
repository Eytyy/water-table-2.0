import React, { Component } from 'react';
import { socket } from '../../api';
import DesalinationConfig from '../../desalinationConfig';
import DesalinationText from './DesalinationText';
import DesalinationIcon from '../../icons/DesalinationIcon';

class Desalination extends Component {

	state = {
		active: undefined,
	}

	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'desalinationClicked':
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
			<div className={`layer layer--desalination ${activeLayer === 'desalination' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--desalination">
					{
						DesalinationConfig.entries.map(({ id, position }) => 
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
								<DesalinationIcon />
							</div>
						)
					}
				</div>
				{
					DesalinationConfig.entries.map(({ name, figures, id, position }) =>
						<DesalinationText
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

export default Desalination;

