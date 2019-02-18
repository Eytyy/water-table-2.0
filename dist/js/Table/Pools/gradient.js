"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var x0 = _ref.x0,
      y0 = _ref.y0,
      width = _ref.width,
      height = _ref.height,
      direction = _ref.direction,
      colorStops = _ref.colorStops,
      context = _ref.context;
  var gradient;

  var addColorStops = function addColorStops(stops) {
    stops.forEach(function (_ref2) {
      var pos = _ref2.pos,
          currColor = _ref2.currColor;

      if (pos <= 1) {
        gradient.addColorStop(pos, currColor);
      }
    });
  };

  var createGradient = function createGradient() {
    switch (direction) {
      case 'top-to-bottom':
        gradient = context.createLinearGradient(x0, y0, x0, height);
        break;

      case 'bottom-to-top':
        gradient = context.createLinearGradient(x0, height, x0, y0);
        break;

      case 'right-to-left':
        gradient = context.createLinearGradient(width, y0, x0, y0);
        break;

      default:
        gradient = context.createLinearGradient(x0, y0, width, y0);
        break;
    }

    addColorStops(colorStops);
    return gradient;
  };

  return createGradient();
};

exports.default = _default;