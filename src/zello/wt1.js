// c canvas
// cx context
// 1 map, 2 natural water resources resources

// 1. map
const c1 = document.createElement('canvas');
const cx1 = c1.getContext('2d');
c1.width = window.innerWidth;
c1.height = window.innerHeight;
c1.id = 'map-canvas';

const map = new Image();
map.src = './map.svg';
map.onload = () => {
	cx1.drawImage(map,0,0);
};

document.body.appendChild(c1);

// 2. natural water resources
const c2 = document.createElement('canvas');
const cx2 = c2.getContext('2d');
c2.width = window.innerWidth;
c2.height = window.innerHeight;
c2.id = 'resources-canvas';

cx2.beginPath();
cx2.save();

const pool1 = {
	points: [
		{x: 150, y: 200}, { x: 160, y: 200 },
		{x: 180, y: 220}, {x: 180, y: 265},
		{x: 165, y: 280}, {x: 145, y: 280},
		{x: 145, y: 265 }, {x: 125, y: 245},
		{x: 125, y: 230}
	]
};

pool1.minMax = pool1.points.reduce((curr, next) => {
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

const { minMax: { x, y } } = pool1;
pool1.width = x.max - x.min;
pool1.height = y.max - y.min;

cx2.translate(10, -100);
drawPolyline(cx2, pool1.points);
cx2.clip();
const dotRadius = Math.floor((pool1.width/pool1.width));

cx2.fillStyle = 'rgba(0, 0, 0, 0.5)';
// drawFillers(200);
cx2.restore();

document.body.appendChild(c2);

// utility functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function drawFillers(count) {
	for (let i = 0; i <= count; i += 1) {
		cx2.beginPath();
		cx2.arc(getRandomInt(x.min, x.max), getRandomInt(y.min, y.max), dotRadius, 0, Math.PI * 2);
		cx2.closePath();
		cx2.fill();
	}
}

function drawPolyline(ctx, pts, fill = true, style = '#FFF') {
	cx2.beginPath();
	// starting point
	const {x, y} = pts[0];
	ctx.moveTo(x, y);

	// rest
	pts.slice(1, pts.length).forEach(({x,y}) => {
		ctx.lineTo(x, y);
	});

	// fill or stroke based on passed argument
	if (fill) {
		ctx.fillStyle = style;
		ctx.fill();
	} else {
		ctx.strokeStyle = style;
		ctx.stroke();
	}
	cx2.closePath();
}