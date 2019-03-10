"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMinMax = exports.lerp = exports.drawPolyline = exports.getRandomInt = void 0;

// utility functions
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}; // export const drawFillers = (ctx, count) => {
// 	const dotRadius = Math.floor((pool1.width/pool1.width));
// 	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
// 	// drawFillers(200);
// 	for (let i = 0; i <= count; i += 1) {
// 		ctx.beginPath();
// 		ctx.arc(getRandomInt(x.min, x.max), getRandomInt(y.min, y.max), dotRadius, 0, Math.PI * 2);
// 		ctx.closePath();
// 		ctx.fill();
// 	}
// };


exports.getRandomInt = getRandomInt;

var drawPolyline = function drawPolyline(_ref) {
  var ctx = _ref.ctx,
      points = _ref.points;
  var _points$ = points[0],
      x = _points$.x,
      y = _points$.y;
  ctx.moveTo(x, y);
  points.slice(1, points.length).forEach(function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    ctx.lineTo(x, y);
  });
  ctx.fill();
  ctx.closePath();
}; // linear interpolation


exports.drawPolyline = drawPolyline;

var lerp = function lerp(a, b, t) {
  var r = (1 - t) * a + t * b;
  return r;
};

exports.lerp = lerp;

var setMinMax = function setMinMax(points) {
  return points.reduce(function (curr, next) {
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
};

exports.setMinMax = setMinMax;