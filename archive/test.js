let maniac = null;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function draw() {
	var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
	var ctx = canvas.getContext('2d');
	ctx.globalCompositeOperation = 'destination-over';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
	ctx.strokeStyle = 'rgba(0, 153, 255, 0.3)';
	ctx.save();

	
	ctx.translate(150, 150);

	var time = new Date();
	
	ctx.rotate(((2 * Math.PI) / 600) * time.getSeconds() + ((2 * Math.PI) / 600000) * time.getMilliseconds());
	var x = 0 + (105 * Math.cos((Math.PI/180) * getRandomIntInclusive(0, 360)))  
	var y = 0 + (105 * Math.sin((Math.PI/180) * getRandomIntInclusive(0, 360)));
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.shadowBlur = 12;
	ctx.shadowColor = 'blue'
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.arc(0 , 0, 2, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();

	ctx.save();
	ctx.translate(150, 150);

	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
	var x = 0 + (105 * Math.cos((Math.PI/180) * 360))  
	var y = 0 + (105 * Math.sin((Math.PI/180) * 360));
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.arc(0 , 0, 5, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();

	ctx.save();
	ctx.translate(150, 150);


	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
	var x = 0 + (105 * Math.cos((Math.PI/180) * getRandomIntInclusive(0, 360)))  
	var y = 0 + (105 * Math.sin((Math.PI/180) * getRandomIntInclusive(0, 360)));
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.fillStyle = 'rga(0, 0, 255)';
	ctx.arc(0 , 0, 1, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();

	ctx.save();
	ctx.translate(150, 150);

	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
	var x = 0 + (105 * Math.cos((Math.PI/180) * getRandomIntInclusive(0, 360)))  
	var y = 0 + (105 * Math.sin((Math.PI/180) * getRandomIntInclusive(0, 360)));
	ctx.translate(x, y);
	ctx.beginPath();
	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.arc(0 , 0, 1, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
	
	ctx.beginPath();

  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
 
}

canvas.addEventListener('mousemove', () => {
		draw();
});

