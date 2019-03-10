
// utility functions
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

// export const drawFillers = (ctx, count) => {
// 	const dotRadius = Math.floor((pool1.width/pool1.width));
	
// 	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
// 	// drawFillers(200);
// 	for (let i = 0; i <= count; i += 1) {
// 		ctx.beginPath();
// 		ctx.arc(getRandomInt(x.min, x.max), getRandomInt(y.min, y.max), dotRadius, 0, Math.PI * 2);
// 		ctx.closePath();
// 		ctx.fill();
// 	}
// };

export const drawPolyline =  ({ctx, points}) => {
	
	const { x, y } = points[0];
	ctx.moveTo(x, y);

	points.slice(1, points.length).forEach(({x,y}) => {
		ctx.lineTo(x, y);
	});
	ctx.fill();
	ctx.closePath();
}

// linear interpolation
export const lerp = (a, b, t) => {
	const r = (1 - t) * a + t * b;
	return r;
}


export const setMinMax = (points) => {
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