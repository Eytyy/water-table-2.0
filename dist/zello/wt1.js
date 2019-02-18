"use strict";

// c canvas
// cx context
// 1 map, 2 natural water resources resources
// 1. map
var c1 = document.createElement('canvas');
var cx1 = c1.getContext('2d');
c1.width = window.innerWidth;
c1.height = window.innerHeight;
c1.id = 'map-canvas';
var map = new Image();
map.src = './map.svg';

map.onload = function () {
  cx1.drawImage(map, 0, 0);
};

document.body.appendChild(c1); // 2. natural water resources

var c2 = document.createElement('canvas');
var cx2 = c2.getContext('2d');
c2.width = window.innerWidth;
c2.height = window.innerHeight;
c2.id = 'resources-canvas';
cx2.beginPath();
cx2.save();
var pool1 = {
  points: [{
    x: 150,
    y: 200
  }, {
    x: 160,
    y: 200
  }, {
    x: 180,
    y: 220
  }, {
    x: 180,
    y: 265
  }, {
    x: 165,
    y: 280
  }, {
    x: 145,
    y: 280
  }, {
    x: 145,
    y: 265
  }, {
    x: 125,
    y: 245
  }, {
    x: 125,
    y: 230
  }]
};
pool1.minMax = pool1.points.reduce(function (curr, next) {
  var xNext = next.x,
      yNext = next.y;
  var xCurr = curr.x,
      yCurr = curr.y;

  if (typeof xCurr === 'undefined') {
    return {
      x: {
        min: xNext,
        max: xNext
      },
      y: {
        min: yNext,
        max: yNext
      }
    };
  }

  return {
    x: {
      min: xNext < xCurr.min ? xNext : xCurr.min,
      max: xNext > xCurr.max ? xNext : xCurr.max
    },
    y: {
      min: yNext < yCurr.min ? yNext : yCurr.min,
      max: yNext > yCurr.max ? yNext : yCurr.max
    }
  };
}, {});
var _pool1$minMax = pool1.minMax,
    x = _pool1$minMax.x,
    y = _pool1$minMax.y;
pool1.width = x.max - x.min;
pool1.height = y.max - y.min;
cx2.translate(10, -100);
drawPolyline(cx2, pool1.points);
cx2.clip();
var dotRadius = Math.floor(pool1.width / pool1.width);
cx2.fillStyle = 'rgba(0, 0, 0, 0.5)'; // drawFillers(200);

cx2.restore();
document.body.appendChild(c2); // utility functions

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function drawFillers(count) {
  for (var i = 0; i <= count; i += 1) {
    cx2.beginPath();
    cx2.arc(getRandomInt(x.min, x.max), getRandomInt(y.min, y.max), dotRadius, 0, Math.PI * 2);
    cx2.closePath();
    cx2.fill();
  }
}

function drawPolyline(ctx, pts) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#FFF';
  cx2.beginPath(); // starting point

  var _pts$ = pts[0],
      x = _pts$.x,
      y = _pts$.y;
  ctx.moveTo(x, y); // rest

  pts.slice(1, pts.length).forEach(function (_ref) {
    var x = _ref.x,
        y = _ref.y;
    ctx.lineTo(x, y);
  }); // fill or stroke based on passed argument

  if (fill) {
    ctx.fillStyle = style;
    ctx.fill();
  } else {
    ctx.strokeStyle = style;
    ctx.stroke();
  }

  cx2.closePath();
}