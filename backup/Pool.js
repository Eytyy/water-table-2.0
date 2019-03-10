import { drawPolyline, drawArc, lerp } from '../utility';
import gradient from '../components/gradient';

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


class Pool {
	constructor(props) {
		this.state = {
			...props
		};
	}
	
	colorStops = []
	currentStop = 0

	setMinMax(points) {
		return points.reduce((curr, next) => {
			let { x: xNext, y: yNext } = next;
			let { x: xCurr, y: yCurr } = curr;
			if (typeof xCurr === 'undefined') {
				return {
					x: {
						min: xNext,
						max: xNext
					}, 
					y: {
						min: yNext,
						max: yNext,	
					}
				}
			}
		
			return {
				x: {
					min: xNext < xCurr.min ? xNext : xCurr.min,
					max: xNext > xCurr.max ? xNext : xCurr.max,
				}, 
				y: {
					min: yNext < yCurr.min ? yNext : yCurr.min,
					max: yNext > yCurr.max ? yNext : yCurr.max,	
				}
			}
		}, {});
	
	}

	addColorStop(pos, colors) {
		let stop = {
			'pos': pos,
			'colors':  colors,
			'currColor': null
		};
		this.colorStops.push(stop)
	}

	updateCurrentStop = () => {
		let stopsLength = this.colorStops[0].colors.length - 1;
		if(this.currentStop < stopsLength){
			this.currentStop++;
		} else {
			this.currentStop = 0;
		}
	}

	updateColorStops({ au }) {
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

	draw = (props) => {
		const { pool, direction} = this.state;
		const { ctx } = props;
		const { points } = pool;
		const minMax = this.setMinMax(points);
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
		// ctx.arc(minMax.x.min + poolWidth/2, minMax.y.min + poolHeight/2, (poolWidth + poolHeight) / 2, 0, Math.PI * 2);
		// ctx.fill();
		// ctx.fillRect(0,0, 100, 100);
	
		ctx.clip();
		ctx.restore();
	}

	update = (props) => {
		const { au } = props;
		this.updateColorStops({ au });
		this.draw(props);
	}

	init(props) {
		this.addColorStop(0.1, stopAColor);
		this.addColorStop(0.6, stopBColor);
		this.addColorStop(1, stopCColor);
		this.updateColorStops({ au: props.au });
		this.draw(props);
	}
}

export default Pool;