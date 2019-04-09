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
				case 'poolClicked':
					break;
				case 'navigate':
					this.navigate(payload);
					break;
				default:
					return;
			}
		});
	}

	navigate = (to) => {
		const { history } = this.props;
    history.push(`/table/${to}`);
	};

	updateBodyClassName = () => {
		if (this.props.location.pathname === '/table/') {
			document.body.classList.add('landing');
		} else {
			document.body.classList.remove('landing');
		}
	}
	
	componentDidMount() {
		this.listenToIncomingEvents();
		this.updateBodyClassName();
	}

	componentDidUpdate(prevProps, prevState) {
		this.updateBodyClassName();
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
