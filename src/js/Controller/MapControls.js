import React, { Component } from 'react';
import { broadcastEvent } from '../api';

class MapControls extends Component {
	onClick = view => {
		broadcastEvent({
			source: 'controller',
			event:  'switchMapView',
			payload: view
		})
	}
	render() {
		return (
			<section className="map-console">
				<div className="map-console__controls">
					<h1>WATER MAP &amp; PROJECTS</h1>
					<div className="map-console__controls__main">
						<div className="btn-group" onClick={() => { this.onClick('natural'); }}>
							<i className="btn-icon icon--natural" />
							<span className="btn-label">Natural Water Resources</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClick('utilities'); }}>
							<i className="btn-icon icon--projects" />
							<span className="btn-label">Utilities &amp; Water Supply Projects</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClick('waste'); }}>
							<i className="btn-icon icon--waste" />
							<span className="btn-label">Wastewater Treatment Plants</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClick('conveyors'); }}>
							<i className="btn-icon icon--conveyors" />
							<span className="btn-label">Water Conveyors</span>
						</div>
						<div className="btn-group" onClick={() => { this.onClick('dams'); }}>
							<i className="btn-icon icon--dams" />
							<span className="btn-label">Dams</span>
						</div>
					</div>
				</div>
				<div className="map-console__mini-map">
					imagine a map here
				</div>
			</section>
		);
	}
}

export default MapControls;

