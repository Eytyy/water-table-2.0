const canvas = document.getElementById('canvasEl');

const ctx = canvas.getContext('2d');
let offset = 0;

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.setLineDash([1, 4]);
	ctx.lineDashOffset = -offset;
	ctx.lineCap = "round";
	
	ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 1;
	ctx.shadowBlur = 2;

	var gradient = ctx.createLinearGradient(20,0, 220,0);

	gradient.addColorStop(0, '#FFF');
	gradient.addColorStop(0.3, '#6b98f1');
	gradient.addColorStop(0.8, 'blue');
	gradient.addColorStop(1, '#010029');

	ctx.strokeStyle = gradient;

	ctx.beginPath();
	ctx.moveTo(10, 0);
	ctx.lineTo(10, 100);

	ctx.moveTo(10, 100);
	ctx.lineTo(100, 200)
	ctx.moveTo(100, 200);
	ctx.lineTo(100, 300);

	ctx.moveTo(100, 300);
	ctx.lineTo(80, 360);

	ctx.moveTo(80, 360);
	ctx.lineTo(200, 460);

	ctx.moveTo(200, 460);
	ctx.lineTo(200, 560);

	ctx.stroke();
	
}

let to = null;

function march() {
  offset++;
  if (offset > 200) {
		offset = 0;
  }
  draw();
  let = setTimeout(march, 40);
}
march();