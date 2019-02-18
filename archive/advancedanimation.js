const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
const ctx = canvas.getContext('2d');
let raf;

// ball
const ball = {
	x: 100,
	y: 100,
	vx: 5,
	vy: 2,
	radius: 25,
	color: 'red',
	draw: function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

function clear() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
	clear();
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;
	ball.vy *= .99;
	ball.vy += .25;
	if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
		ball.vy = -ball.vy;
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
		ball.vx = -ball.vx;
	}
	raf = requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', e => {
	raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', e => {
	window.cancelAnimationFrame(raf);
})

ball.draw();