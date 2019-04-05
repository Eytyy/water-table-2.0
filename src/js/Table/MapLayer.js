import React, { Component } from 'react';
import { socket } from '../api';

const MapLayer = (WrappedComponent, { pageName }) => {
	class MapLayer extends Component {

		state = {
			active: undefined,
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

		updateActive = (payload) => {
			this.setState({
				active: payload
			})
		}

		listenToIncomingEvents = () => {
			socket.on('controller', message => {
				const { event, payload } = message;
				switch(event) {
					case 'mapClicked':
						this.updateActive(payload)
						break;
					default:
						return;
				}
		});
	}

		render() {
			const { activeLayer } = this.props;

			return (
				<WrappedComponent active={this.state.active} activeLayer={activeLayer} />
			);
		}
	}

	return MapLayer;
}

export default MapLayer;