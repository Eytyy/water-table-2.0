import { drawPolyline } from '../utility';

class Texture {
	constructor(props) {
		this.state = {
			...props
		};
	}

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



	draw = (props) => {
		const { pool } = this.state;
		const { ctx } = props;
		const intensity = typeof props !== 'undefined' ? props.intensity : this.state.intensity;
		const { points } = pool;
		ctx.beginPath();
		ctx.save();
		const fillStyle = 'rgba(0,0,0,0)'
	
		ctx.fillStyle = fillStyle;
		drawPolyline({ ctx, points });
	
		ctx.clip();
		ctx.restore();
	}
}

export default Texture;