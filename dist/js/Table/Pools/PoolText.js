"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utility = require("./utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var margin = 50;
  var textWidth = 240;
  var textHeight = 120;
  var maxScreenWidth = 1080;

  var calculatePosition = function calculatePosition() {
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

  var _calculatePosition = calculatePosition(),
      orientation = _calculatePosition.orientation,
      position = _calculatePosition.position;

  var style = _objectSpread({
    color: '#FFF',
    opacity: isActive ? '1' : '0'
  }, position);

  console.log(style);
  return _react.default.createElement("div", {
    style: style,
    className: "resources-text resources-text--".concat(orientation.x, " resources-text--").concat(orientation.y)
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