import React, { Component } from 'react';
import { drawPolyline, lerp, setMinMax } from './utility';
import gradient from './gradient';

const stopAColor = [
	{ 'r':'255', 'g':'255', 'b':'255', a: '0.9' }, //blue
	{ 'r':'150', 'g':'150', 'b':'150', a: '1' }, //blue
	{ 'r':'230', 'g':'230', 'b':'230', a: '0.8' }, //blue
];

const stopBColor = [
	{ 'r':'150', 'g':'150', 'b':'150', a: '0.7' }, //blue
	{ 'r':'230', 'g':'230', 'b':'230', a: '1' }, //blue
	{ 'r':'255', 'g':'255', 'b':'255', a: '0.9' }, //blue

];

const stopCColor = [
	{ 'r':'230', 'g':'230', 'b':'230', a: '1' }, //blue
	{ 'r':'255', 'g':'255', 'b':'255', a: '0.8' }, //blue
	{ 'r':'200', 'g':'200', 'b':'200', a: '0.7' }, //blue
];

class PoolComponent extends Component {
	colorStops = []
	currentStop = 0;

	addColorStop = (pos, colors) => {
		this.colorStops.push({
			'pos': pos,
			'colors':  colors,
			'currColor': null
		});
	}

	addColorStops = () => {
		this.addColorStop(0.1, stopAColor);
		this.addColorStop(0.6, stopBColor);
		this.addColorStop(1, stopCColor);
	}

	updateCurrentStop = () => {
		let stopsLength = this.colorStops[0].colors.length - 1;
		if(this.currentStop < stopsLength){
			this.currentStop++;
		} else {
			this.currentStop = 0;
		}
	}

	updateColorStops = (au) => {
		// cycle through all stops in gradient
		let stopsLength = this.colorStops[0].colors.length - 1;
		this.colorStops.forEach((stop) => {
			//get stop 1 color
			let startColor = stop.colors[this.currentStop];
			//get stop 2 color, go to first if at last stop
			let endColor = this.currentStop < stopsLength ?
				stop.colors[this.currentStop + 1] : stop.colors[0];
			//interpolate both stop 1&2 colors to get new color based on animaiton unit
			let r = Math.floor(lerp(startColor.r, endColor.r, au));
			let g = Math.floor(lerp(startColor.g, endColor.g, au));
			let b = Math.floor(lerp(startColor.b, endColor.b, au));
			let a = (lerp(startColor.a, endColor.a, au));
	
			stop.currColor = `rgba(${r}, ${g}, ${b}, ${a})`;
		});
	}

	draw = () => {
		const { config: { pool, direction }, ctx } = this.props;
		const points = pool.points || this.props.points;
		const minMax = setMinMax(points);
		const poolWidth = minMax.x.max - minMax.x.min;
		const poolHeight = minMax.y.max - minMax.y.min;
		ctx.beginPath();
		ctx.save();
		const fillStyle = gradient({
			context: ctx,
			width: poolWidth,
			height: poolHeight,
			x0: minMax.x.min,
			y0: minMax.y.min,
			currentStop: this.currentStop,
			colorStops: this.colorStops,
			direction,
		});
		ctx.fillStyle = fillStyle;
		drawPolyline({ctx, points});
		ctx.clip();
		ctx.restore();
	}

	shouldComponentUpdate() {
		return false;
	}
	

	componentWillReceiveProps({ au }) {
		const { ctx } = this.props;
		if (this.colorStops.length === 0) {
			this.addColorStops();
		}
		if (au !== this.props.au) {
			ctx.clearRect(0, 0, this.width, this.height);
			this.updateColorStops(au);
			this.draw();
			if (au === 0) {
				this.updateCurrentStop();
			}
		}
		// empty color stops for next pool
		this.colorStops = [];
		this.currentStop = 0;
	}
	
	componentDidMount() {
		const { au } = this.props;
		this.addColorStops();
		this.updateColorStops(au);
		this.draw();
	}
	
	render() {
		console.log('render');
		return null;
	}
}

export default PoolComponent;