"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTextPosition = exports.calculatePoolTextPosition = exports.setMinMax = exports.lerp = exports.drawPolyline = exports.getRandomInt = void 0;

// utility functions
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

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

var calculatePoolTextPosition = function calculatePoolTextPosition(_ref3) {
  var xMin = _ref3.xMin,
      xMax = _ref3.xMax,
      yMin = _ref3.yMin,
      yMax = _ref3.yMax,
      poolWidth = _ref3.poolWidth,
      margin = _ref3.margin,
      textHeight = _ref3.textHeight,
      textWidth = _ref3.textWidth,
      maxScreenWidth = _ref3.maxScreenWidth;
  var orientation = {};
  var position = {
    position: 'absolute'
  };

  if (xMin + poolWidth + margin + textWidth > maxScreenWidth) {
    position.right = "".concat(xMin - maxScreenWidth + textWidth + margin, "px");
    orientation.x = 'left';
  } else {
    position.left = "".concat(xMin + poolWidth + margin, "px");
    orientation.x = 'right';
  }

  if (yMin - textHeight < 0) {
    position.top = "".concat(yMax, "px");
    orientation.y = 'bottom';
  } else {
    position.top = "".concat(yMin - textHeight, "px");
    orientation.y = 'top';
  }

  return {
    orientation: orientation,
    position: position
  };
};

exports.calculatePoolTextPosition = calculatePoolTextPosition;

var calculateTextPosition = function calculateTextPosition(_ref4) {
  var x = _ref4.x,
      y = _ref4.y,
      iconWidth = _ref4.iconWidth,
      margin = _ref4.margin,
      textHeight = _ref4.textHeight,
      textWidth = _ref4.textWidth,
      maxScreenWidth = _ref4.maxScreenWidth;
  var orientation = {};
  var style = {
    position: 'absolute'
  };

  if (x + iconWidth + margin + textWidth > maxScreenWidth) {
    style.right = "".concat(x - maxScreenWidth + textWidth + margin, "px");
    orientation.x = 'left';
  } else {
    style.left = "".concat(x + iconWidth + margin, "px");
    orientation.x = 'right';
  }

  if (y - textHeight < 0) {
    style.top = "".concat(y, "px");
    orientation.y = 'bottom';
  } else {
    style.top = "".concat(y - textHeight, "px");
    orientation.y = 'top';
  }

  return {
    orientation: orientation,
    positionCSS: style
  };
};

exports.calculateTextPosition = calculateTextPosition;