import { getRandomInt } from '../../../utility';

export default class PopulationCircle {
	constructor({ ctx, width, height }) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.radius = 0;
		this.vx = getRandomInt(-2, 2); // vector x
		this.vy = getRandomInt(-2, 2); // vector y


		this.x = getRandomInt(width/2 - this.radius, width/2 + this.radius);
		this.y = getRandomInt(height/2 - this.radius, height/2 + this.radius);
		
		this.updateTranslationBoundries(width, height, this.radius);
	}

	draw = () => {
		let color = getRandomInt(250, 255);
		this.ctx.fillStyle = `rgba(${color}, ${color}, ${color}, 0.2)`;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath();
	}

	updateTranslationBoundries = (width, height, radius) => {
		let uWidth = width || this.width;
		let uHeight = height || this.height;
		let uRadius = radius || this.radius;

		this.sxp = uWidth/2 - uRadius/2;  // x start point
		this.exp = uWidth/2 + uRadius/2;  // x end point
		this.syp = uHeight/2 - uRadius/2; // y start point
		this.eyp = uHeight/2 + uRadius/2;	// y end point
	}

	update = (radius) => {
		this.radius = radius;
		this.updateTranslationBoundries();
		this.x = getRandomInt(this.sxp, this.exp);
		this.y = getRandomInt(this.syp, this.eyp);
		
		this.draw();
	}

	move = () => {
		this.updateTranslationBoundries();
		this.x += this.vx;
		this.y += this.vy;
		if ( this.x < this.sxp || this.x > this.exp ) {
			this.vx *=- 1;
		}
		if ( this.y < this.syp || this.y > this.eyp ) {
			this.vy *=- 1;
		}

		this.draw();
	}
}