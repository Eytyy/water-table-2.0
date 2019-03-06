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

	onPoolClick = (e) => {
		let target = e.target.id;
		broadcastEvent({
			source: 'controller',
			event:  'poolClicked',
			payload: target
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
					<div className="resources-layer resources-layer--pools visible">
						<svg className="svg" id="svg1" width="914" height="1539" viewBox="0 0 914 1539">
							<g id="Map---Surface-water" fill="#FFFFFF">
								<g id="pools" transform="translate(-2.000000, 34.000000)">
									<polyline onClick={this.onPoolClick} className="pool" id="taberias" points="331.648858 34.6001387 361.630454 4.64207417 372.791616 0.0234205688 383.950997 4.64207417 400.858394 21.5344215 405.480676 32.6868236 405.480676 84.9496923 400.858394 96.1003146 383.950997 112.992662 372.791616 117.613095 368.96198 117.613095 353.176755 101.84026 353.176755 98.0136297 348.554474 86.8612276 331.648858 69.9706601 327.026576 58.8164781 327.026576 45.7525408 331.648858 34.6001387"></polyline>
									<g onClick={this.onPoolClick} className="pool" id="deadsea" transform="translate(248.000000, 548.000000)">
										<polygon id="deadsea-1" points="90.1866695 54.9449535 92.1014875 50.3262999 92.1014875 29.6073224 90.1866695 24.9886688 67.8661264 2.68386458 63.2420637 0.770549506 55.5827918 0.770549506 50.9605103 2.68386458 15.5622058 38.054386 13.6473878 42.6730396 13.6473878 50.3262999 11.7325699 54.9449535 2.48622566 64.1840405 0.573188928 68.8044739 0.573188928 194.045629 2.48622566 198.664283 11.7325699 207.90337 16.3548514 209.818465 24.0159045 209.818465 28.6381859 207.90337 41.7141661 194.839433 52.8753283 199.458086 52.8753283 207.111346 54.7901462 211.73 64.0347092 220.969087 65.9513084 225.587741 65.9513084 233.242781 77.1106894 237.861434 79.0255073 233.242781 79.0255073 186.392369 77.1106894 181.773715 54.7901462 159.468911 52.8753283 154.850258 52.8753283 94.9341285 54.7901462 90.3154749"></polygon>
										<polygon id="deadsea-2" points="31.9067357 217.703459 13.6473878 235.948475 1.9269207 247.661523 0.573188928 250.927508 0.573188928 273.230532 1.9269207 276.498296 12.2936561 286.856895 13.6473878 290.122879 13.6473878 316.254314 21.5400003 319.520298 25.3696362 315.693668 26.723368 312.427683 26.723368 303.188596 28.0770998 299.922612 51.5198153 276.494736 52.873547 273.228752 52.873547 263.993225 51.5215965 260.725461 29.9919177 239.21446 29.9919177 232.682491 38.4456164 224.235427 39.7993481 220.969443"></polygon>
									</g>
									<polygon onClick={this.onPoolClick} className="pool" id="jafar" points="694.266752 1190.09703 691.559288 1188.97752 681.655672 1188.97752 678.948208 1187.85623 668.114792 1177.03132 665.407328 1175.9118 629.353532 1175.9118 626.646069 1177.03132 615.812652 1187.85623 613.105189 1188.97752 603.201572 1188.97752 600.494109 1190.09703 589.660692 1200.92195 588.540301 1203.62728 588.540301 1205.86809 595.0774 1208.57521 600.494109 1203.16275 603.201572 1202.04146 663.164765 1202.04146 666.9944 1198.21483 673.5315 1195.50949 678.948208 1200.92195 681.655672 1202.04146 696.974215 1202.04146 699.68346 1195.50949"></polygon>
									<polygon onClick={this.onPoolClick} className="pool" id="azraq" points="891.988539 561.835911 887.364476 572.988313 889.281075 577.606966 889.281075 581.433597 882.742195 587.967345 878.912559 587.967345 874.290277 599.119747 878.912559 601.033062 899.647811 601.033062 904.271874 599.119747 913.516437 589.88066 915.431255 585.262007 915.431255 577.606966 913.516437 572.988313 904.271874 563.749226 899.647811 561.835911"></polygon>
									<polygon onClick={this.onPoolClick} className="pool" id="aqaba" transform="translate(0.000000, -34.000000)" points="157.050412 1485.65277 154.342949 1492.18474 133.591666 1512.90194 130.884202 1519.43391 130.884202 1538.73258 0.124400669 1538.73258 0.14221293 1537.90852 0.14221293 1519.43391 2.84967647 1512.90194 75.8799429 1439.92899 82.4170423 1437.22366 87.8319694 1437.22366 94.3690689 1434.51832 115.10254 1413.80112 121.639639 1411.09578 140.128765 1411.09578 146.683677 1413.80112 154.342949 1421.45438 157.050412 1427.98635"></polygon>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</section>
		);
	}
}

export default MapControls;

