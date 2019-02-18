const canvas = document.getElementById('canvasEl');

const ctx = canvas.getContext('2d');
let offset = 0;

function drawControlPoints({ start, cp1, cp2, end}) {
	// Start and end points
	ctx.fillStyle = 'blue';
	drawArc(start.x, start.y, 5, 0, 2 * Math.PI); //start
	ctx.fill();

	drawArc(end.x, end.y, 5, 0, 2 * Math.PI) // end
	ctx.fill();

	// Control points
	ctx.fillStyle = 'red';
	if (typeof cp1 !== 'undefined') 
	{
		drawArc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); //start
		ctx.fill();
		drawArc(cp1.x, cp1.y, 15, 0, 2 * Math.PI);
		ctx.stroke();
		drawArc(cp1.x, cp1.y, 10, 0, 2 * Math.PI);
		ctx.stroke();
	}
	if (typeof cp2 !== 'undefined') { 
		drawArc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); //start
		ctx.fill();
		drawArc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);
		ctx.stroke();
		drawArc(cp2.x, cp2.y, 10, 0, 2 * Math.PI);
		ctx.stroke();
		drawArc(cp2.x, cp2.y, 15, 0, 2 * Math.PI);
		ctx.stroke();
	}
}

function drawCubicBezierCurve({ start, cp1, cp2, end}) {
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
	ctx.stroke();
	drawControlPoints({ start, cp1, cp2, end})
}

function drawQuadBezierCurve({ start, cp1, end}) {
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	ctx.quadraticCurveTo(cp1.x, cp1.y, end.x, end.y);
	ctx.stroke();
	drawControlPoints({ start, cp1, end})
}

function drawArc(x, y, radius, startAngle, endAngle, anticlockwise = false) {
	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);  // Start point
}

function drawArcTo({ start, cp1, cp2, r }) {
		// Tangential lines
		ctx.beginPath();
		ctx.strokeStyle = 'yellow';
		ctx.moveTo(start.x, start.y);
		ctx.lineTo(cp1.x, cp1.y);
		ctx.lineTo(cp2.x, cp2.y);
		ctx.stroke();

		// Arc
		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 10;
		ctx.moveTo(start.x, start.y);
		ctx.arcTo(cp1.x,cp1.y, cp2.x,cp2.y, r);
		ctx.stroke();

		// Start point
		ctx.beginPath();
		ctx.fillStyle = 'blue';
		ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);
		ctx.fill();

		// Control points
		ctx.beginPath();
		ctx.fillStyle = 'red';
		ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = 'green';
		ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);   // Control point two
		ctx.fill();
}

function drawEllipse({x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise = false }) {
	// Draw the ellipse
	ctx.fillStyle = 'yellow';
	ctx.beginPath();
	ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
	ctx.fill();
}

function randomShit() {
	let region = new Path2D();
	region.moveTo(30, 90);
	region.lineTo(110, 20);
	region.lineTo(240, 130);
	region.lineTo(60, 130);
	region.lineTo(190, 20);
	region.lineTo(270, 90);
	region.closePath();

	// Fill path
	ctx.fillStyle = 'green';
	ctx.fill(region, 'evenodd')
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = '1';
	ctx.setLineDash([1, 4]);
	ctx.lineDashOffset = -offset;
	ctx.strokeStyle = "#FFF";

	drawCubicBezierCurve({
		start: { x: 100, y: 50 },
		cp1: { x: 50, y: 225 },
		cp2: { x: 150, y: 225 },
		end: { x: 100, y: 400 }
	});

	drawQuadBezierCurve({
		start: { x: 100, y: 400},
		cp1: { x: 60, y: 440},
		end: { x: 100, y: 600}
	});
	
	
	drawArc(100, 600, 25, Math.PI/2, Math.PI * 3/4);
	ctx.stroke();
	drawArc(100, 600, 20, 0,  Math.PI);
	ctx.stroke();
	drawArc(100, 600, 15, 0, 2 * Math.PI);
	ctx.stroke();
	drawArc(100, 600, 10, Math.PI, 2 * Math.PI);
	ctx.stroke();
	drawArc(100, 600, 30, 0, Math.PI * 2/3);
	ctx.stroke();

	// drawEllipse({
	// 	x: 60,
	// 	y: 100,
	// 	radiusX: 50,
	// 	radiusY: 40,
	// 	rotation: Math.PI ,
	// 	startAngle: 0,
	// 	endAngle: Math.PI * 1.5,
	// });

	drawArcTo({
		start: {
			x: 200,
			y: 20,
		},
		cp1: {
			x: 250,
			y: 260,
		}, 
		cp2: {
			x: 350,
			y: 120,
		},
		r: 40
	});

	
}

let to = null;
function march() {
  offset++;
  if (offset > 200) {
		offset = 0;
  }
  draw();
  let = setTimeout(march, 80);
}
march();