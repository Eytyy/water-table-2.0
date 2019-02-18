const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
var ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
let vSpace = canvas.height / 10;
let hSpace = canvas.width / 10;
ctx.moveTo(0, 0);
for (let i = 0; i <= canvas.width; i = i + hSpace) {
	if (i === canvas.width) {
		ctx.moveTo(i - 0.5, 0);
		ctx.lineTo(i - 0.5, canvas.height);
		ctx.stroke();
	} else {
		ctx.moveTo(i + 0.5, 0);
		ctx.lineTo(i + 0.5, canvas.height);
		ctx.stroke();
	}
}
for (let i = 0; i <= canvas.height; i = i + vSpace) {
	ctx.moveTo(0, i + 0.5);
	ctx.lineTo(canvas.width, i + 0.5);
	ctx.stroke();
}

function translateCanvas(x, y) {
	ctx.save();
	ctx.strokeStyle = 'red';
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(canvas.width - 50 + 0.5 , 0.5);
	ctx.moveTo(0, 0);
	ctx.lineTo(0.5, canvas.height - 100 + 0.5);
	ctx.stroke();
}

ctx.fillRect(100, 100, 100, 100);
ctx.save();

ctx.rotate(Math.PI/180 * 25);
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
ctx.restore();

ctx.fillStyle = '#0095DD';
translateCanvas(150, 150);
ctx.rotate(Math.PI/180 * 25);
translateCanvas(-150, -150);
ctx.fillRect(100, 100, 100, 100);