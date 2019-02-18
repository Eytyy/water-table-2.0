import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Intro from './Intro';
import Story from './Story';
import Map from './Map';
import { socket } from '../api';

class Table extends Component {
	listenToIncomingEvents = () => {
		socket.on('controller', message => {
			const { event, payload } = message;
			switch(event) {
				case 'navigate':
					this.navigate(payload);
					break;
				case 'switchMapView':
					console.log(`show ${payload}`)
					break;
				default:
					return;
			}
		});
	}

	navigate = (to) => {
		const { history } = this.props;
    history.push(to);
	};
	
	componentDidMount() {
		this.listenToIncomingEvents();
	}
	
	render() {
		return (
			<>
				<Route path="/table" exact component={Intro} />
				<Route path="/table/story" exact component={Story} />
				<Route path="/table/map" exact component={Map} />
			</>
		);
	}
}

export default withRouter(Table);
