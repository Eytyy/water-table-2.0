"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utility = require("./utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoolText = function PoolText(_ref) {
  var name = _ref.name,
      figures = _ref.figures,
      id = _ref.id,
      points = _ref.points,
      activePool = _ref.activePool;

  var _setMinMax = (0, _utility.setMinMax)(points),
      _setMinMax$x = _setMinMax.x,
      xMin = _setMinMax$x.min,
      xMax = _setMinMax$x.max,
      _setMinMax$y = _setMinMax.y,
      yMin = _setMinMax$y.min,
      yMax = _setMinMax$y.max;

  var poolWidth = xMax - xMin;
  var poolHeight = yMax - yMin;
  var isActive = typeof activePool !== 'undefined' && activePool === id;
  var style = {
    position: 'absolute',
    top: "".concat(yMin - 50, "px"),
    left: "".concat(xMin + poolWidth + 50, "px"),
    color: '#FFF',
    opacity: isActive ? '1' : '0'
  };
  return _react.default.createElement("div", {
    style: style,
    className: "resources-text"
  }, _react.default.createElement("h2", {
    className: "resource-text__title"
  }, name), _react.default.createElement("div", {
    className: "resource-text__group"
  }, figures.map(function (_ref2) {
    var label = _ref2.label,
        value = _ref2.value;
    return _react.default.createElement("div", {
      key: "".concat(id, "-").concat(label),
      className: "resource-text__group__item"
    }, _react.default.createElement("div", {
      className: "resource-text__figure-label"
    }, label), _react.default.createElement("div", {
      className: "resource-text__figure-value"
    }, value));
  })));
};

var _default = PoolText;
exports.default = _default;