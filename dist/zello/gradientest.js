"use strict";

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;
var Anim = {
  //animation settings
  'duration': 3000,
  'interval': 10,
  'stepUnit': 1.0,
  'currUnit': 0.0
};
canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);

var animateGradient = function animateGradient() {
  var steps = Anim.duration / Anim.interval; // 300

  var step_u = Anim.stepUnit / steps; // 1.0/300

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var gradient = ctx.createLinearGradient(0, 0, 0, h);

  if (Anim.currUnit >= 1.0) {
    Anim.currUnit = 0;
  }

  gradient.addColorStop(0, 'rgba(250, 250, 250, 0.5)');
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // gradient.addColorStop(Anim.currUnit, 'rgba(220, 220, 220, 0.9)');

  ctx.fillStyle = gradient;
  ctx.fillRect(canvas.width / 2 - canvas.width / 4, canvas.height / 2 - canvas.height / 4, canvas.width / 2, canvas.height) / 2;
  Anim.currUnit += step_u; // requestAnimationFrame(animateGradient)
};

animateGradient();