"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Polygon = function Polygon(_ref) {
  var className = _ref.className,
      points = _ref.points,
      onPoolClick = _ref.onPoolClick,
      id = _ref.id,
      activePool = _ref.activePool,
      group = _ref.group,
      pool = _ref.pool,
      minMax = _ref.minMax;

  var flattenedPoints = function flattenedPoints(unflattenedPoints) {
    return unflattenedPoints.reduce(function (c, n) {
      return c + " ".concat(n.x, " ").concat(n.y);
    }, '');
  };

  var activeClass = function activeClass() {
    if (typeof activePool === 'undefined') return '';

    if (activePool === id) {
      return 'is-active';
    } else if ((activePool === 'deadsea-1' || activePool === 'deadsea-2') && (id === 'deadsea-1' || id === 'deadsea-2')) {
      return 'is-active';
    } else {
      return '';
    }
  };

  return typeof group !== 'undefined' && _typeof(pool) !== undefined && group ? _react.default.createElement("g", {
    id: id,
    className: "".concat(className, " ").concat(activeClass())
  }, _react.default.createElement("rect", {
    fillOpacity: "1",
    fill: "#000",
    x: minMax.x,
    y: minMax.y,
    width: "161",
    height: "366"
  }), pool.map(function (_ref2, index) {
    var points = _ref2.points;
    return _react.default.createElement("polygon", {
      onClick: onPoolClick,
      key: "svg-".concat(id, "-").concat(index),
      fill: "#FFF",
      points: flattenedPoints(points)
    });
  })) : _react.default.createElement("polygon", {
    id: id,
    onClick: onPoolClick,
    fill: "transparent",
    className: "".concat(className, " ").concat(activeClass()),
    points: flattenedPoints(points)
  });
};

var _default = Polygon;
exports.default = _default;