const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const Anim = { //animation settings
	'duration': 3000,
	'interval' : 10,
	'stepUnit' : 1.0,
	'currUnit' : 0.0
};

const stopAColor = [
	{ 'r':'9', 'g':'117', 'b':'190' }, //blue
	{ 'r':'59', 'g':'160', 'b':'89' }, //green
	{ 'r':'230', 'g':'192', 'b':'39' }, //yellow
	{ 'r':'238', 'g':'30', 'b':'77' } //red
];

const stopBColor = [
	{ 'r':'205', 'g':'24', 'b':'75' }, //pink
	{ 'r':'33', 'g':'98', 'b':'155' }, //blue
	{ 'r':'64', 'g':'149', 'b':'69' }, //green
	{ 'r':'228', 'g':'171', 'b':'33' } //yellow
];

let $width;
let $height;
let gradient;

function Gradient(context, width, height) {
	this.ctx = context;
	this.width = width;
	this.height = height;
	this.colorStops = [];
	this.currentStop = 0;
}

Gradient.prototype.addStop = function(pos, colors) {
	let stop = {
		'pos': pos,
		'colors':  colors,
		'currColor': null
	};
	this.colorStops.push(stop)
}

Gradient.prototype.updateStops = function() { // interpolate colors of stops
	let steps = Anim.duration / Anim.interval; // 3000 ÷ 10 = 300
	let step_u = Anim.stepUnit/steps; // 1.0 ÷ 300 = 0.0033
	let stopsLength = this.colorStops[0].colors.length - 1;

	// cycle through all stops in gradient
	this.colorStops.forEach((stop) => {
		//get stop 1 color
		let startColor = stop.colors[this.currentStop];
		//get stop 2 color, go to first if at last stop
		let endColor = this.currentStop < stopsLength ?
			stop.colors[this.currentStop + 1] : stop.colors[0];
		//interpolate both stop 1&2 colors to get new color based on animaiton unit
 		let r = Math.floor(lerp(startColor.r, endColor.r, Anim.currUnit));
		let g = Math.floor(lerp(startColor.g, endColor.g, Anim.currUnit));
		let b = Math.floor(lerp(startColor.b, endColor.b, Anim.currUnit));

		stop.currColor = 'rgb('+r+','+g+','+b+')';
	});
		
	// update current stop and animation units if interpolaiton is complete
	if (Anim.currUnit >= 1.0){
		Anim.currUnit = 0;
		if(this.currentStop < stopsLength){
			this.currentStop++;
		} else {
			this.currentStop = 0;
		}
	}

	Anim.currUnit += step_u; // increment animation unit
}

Gradient.prototype.draw = function() {
	let gradient = ctx.createLinearGradient(0,0,0,this.width);

	this.colorStops.forEach(({ pos, currColor }) => {
		gradient.addColorStop(pos, currColor);
	});

	this.ctx.clearRect(0, 0, this.width, this.height);
	this.ctx.fillStyle = gradient;
	this.ctx.fillRect(0, 0,  this.width, this.height);
}

let updateUI = function() {
	$width = window.innerWidth;
	$height = window.innerHeight;

	canvas.width = $width;
	canvas.height = $height;

	gradient = new Gradient(ctx, canvas.width, canvas.height);
	gradient.addStop(0, stopAColor);
	gradient.addStop(1, stopBColor);
};

function animationLoop() {
	gradient.updateStops();
	gradient.draw();
	requestAnimationFrame(animationLoop);
}

let init = function() {
	updateUI();
	document.body.appendChild(canvas);
	animationLoop();
}

window.onresize = function() {
	updateUI();
};

init();
//interpolation
function lerp(a, b, u) {
	const r = (1 - u) * a + u * b;
	return r;
}
