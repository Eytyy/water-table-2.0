"use strict";

function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.prototype.getAngle = function () {
  return Math.atan2(this.y, this.x);
};

function Particle(point, velocity, acceleration) {
  this.position = point || new Vector(0, 0);
  this.velocity = velocity || new Vector(0, 0);
  this.acceleration = acceleration || new Vector(0, 0);
}

function Emitter(point, velocity, spread) {
  this.position = point;
  this.velocity = velocity;
  this.spread = spread || Math.PI / 32;
  this.drawColor = '#FFF';
}

Emitter.prototype.emitParticle = function () {
  // Use an angle randomized over the spread so we have more of a "spray"
  var angle = this.velocity.getAngle() + this.spread - Math.random() * this.spread * 2; // The magnitude of the emitter's velocity

  var magnitude = this.velocity.getMagintude(); // The emitter's position

  var position = new Vector(this.position.x, this.position.y); // New velocity based off of the calculated angle and magnitude

  var velocity = Vector.fromAngle(angle, magnitude);
  return new Particle(position, velocity);
};