import React, { Component } from 'react';
import { socket } from '../../api';

import PopulationVisulaization from './Visualization/PopulationVisulaization'
import Intro from './Intro';
import Story from './Story/Story';


class Container extends Component {
	state = {
		intro: true,
	};

	onIncomingEvents = message => {
		const { event, payload } = message;
		switch(event) {
			case 'toggleIntro':
				this.setState({
					intro: payload
				})
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

	componentWillUnmount() {
		socket.off('controller', this.onIncomingEvents);
	}
	
	render() {
		return this.state.intro ?
			<Intro /> :
			<div className="story-visualization">
				<PopulationVisulaization />
				<Story />
			</div>;
	}
}

export default Container;