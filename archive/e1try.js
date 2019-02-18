let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

let ww = window.innerWidth;
let wh = window.innerHeight;

canvas.width = ww;
canvas.height = wh;

canvas.addEventListener("mousedown", mouseDown, true);
document.body.appendChild(canvas);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

let meshW = 100;  														// mesh width
let dispX = -50;  														// x disposition
let dispY = -100;  														// y disposition

let col0 = "rgb(200, 200, ";  										// shading color-starts
let col1 = "rgb(0, 3, ";

let gridW = ww + meshW;   										// grid width 
let gridH = wh + meshW * 2;  									// grid height

let int;

const particle = new particleX();
ctx.clearRect(0, 0, ww, wh);

function mouseDown() {
	if (int != undefined) {
		clearInterval(int);
		int = undefined;
	}
	else {
		int = setInterval(intHandler, 1000 / 30);		
	}
}

function intHandler() {
	ctx.clearRect(0, 0, ww, wh);
	particle.draw();
	particle.fill();
}

function particleX() {
	this.distort = .2

	this.x = getRandomIntInclusive(135, 145) - getRandomIntInclusive(135, 145) * this.distort;
	this.y = getRandomIntInclusive(20, 30) - getRandomIntInclusive(20, 30) * this.distort;
	
	this.x1 = getRandomIntInclusive(100, 110) - getRandomIntInclusive(100, 110) * this.distort;
	this.y1 = getRandomIntInclusive(105, 115) - getRandomIntInclusive(105, 115) * this.distort;
	
	this.size = 2;
	this.next = undefined;

	this.tracker = (Math.PI / 2);
	this.diffX = Math.random();
	this.diffY = Math.random();
	this.speed = .1;
	this.vol = 4;  //volume  (higher #, more movement)
	
	this.colRngDiff = 10;  //shading letiation
	this.colRngDiff2 = 20;  //shading letiation
	this.colRng = (255 - this.colRngDiff) + Math.floor(Math.random() * this.colRngDiff);
	this.colRng2 = (255 - this.colRngDiff2) + Math.floor(Math.random() * this.colRngDiff2);
	this.draw = function() {	
		this.tracker += this.speed;
		this.tracker = this.tracker == 1 ? 0 : this.tracker;
		
		this.x += (Math.sin( this.tracker ) * this.speed) * this.vol;
		this.y += (Math.cos( this.tracker ) * this.speed) * this.vol;

		this.x1 += (Math.sin( this.tracker ) * this.speed) * this.vol;
		this.y1 += (Math.cos( this.tracker ) * this.speed) * this.vol;

		this.readyW = 0;  //start point
		this.readyW1 = 0;
	
		this.calcW = 0;
		this.calcW1 = 0;
	}

	this.fill = function() {		
		var poly=[140 , 25, 145, 100, 120, 120, 100, 125, this.x1, this.y1, 80, 80, this.x, this.y];
		console.log(poly);
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.fillStyle = `rgb(${Math.floor(this.colRng)}, ${Math.floor(this.colRng2)}, ${Math.floor(this.colRng)})`;
		for (let item = 0; item < poly.length - 1; item += 2) {
			ctx.lineTo( poly[item] , poly[item+1] )
		}
		ctx.fill();
	}

}
