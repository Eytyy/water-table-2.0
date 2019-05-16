import React, { Component } from 'react';
import { socket } from '../../../api';

const MapLayer = (WrappedComponent, { pageName }) => {
	class MapLayer extends Component {

		state = {
			active: undefined,
		}

		updateActive = (payload) => {
			this.setState({
				active: payload
			})
		}

		onIncomingEvents = message => {
			const { event, payload } = message;
			switch(event) {
				case 'mapClicked':
					this.updateActive(payload)
					break;
				default:
					return;
			}
		}

		listenToIncomingEvents = () => {
			socket.on('controller', this.onIncomingEvents);
		}

		componentDidMount() {
			this.listenToIncomingEvents();
		}

		componentWillReceiveProps({ activeLayer }) {
			if(this.props.activeLayer !== activeLayer && activeLayer !== 'canal') {
				this.setState({
					active: undefined
				});
			}
		}

		componentWillUnmount() {
			socket.off('controller', this.onIncomingEvents);
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