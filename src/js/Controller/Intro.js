import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { broadcastEvent } from '../api';

class Intro extends Component {
	onLinkClick = (to) => {
		broadcastEvent({
			source: 'controller',
			event: 'navigate',
			payload: to,
		});
	}
	
	render() {
		return (
			<section className="intro">
				<div className="intro__section intro__section--left">
					<Link onClick={() => this.onLinkClick('map')} to="/controller/map">Map</Link>
				</div>
				<div className="intro__section intro__section--right">
					<Link onClick={() => this.onLinkClick('story')} to="/controller/viz">Story</Link>
				</div>
			</section>
		);
	}
}

export default Intro;