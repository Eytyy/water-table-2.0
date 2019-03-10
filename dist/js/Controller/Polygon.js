"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Polygon = function Polygon(_ref) {
  var className = _ref.className,
      points = _ref.points,
      onPoolClick = _ref.onPoolClick,
      id = _ref.id,
      activePool = _ref.activePool;
  var flattenedPoints = points.reduce(function (c, n) {
    return c + " ".concat(n.x, " ").concat(n.y);
  }, '');
  var initialClass = typeof activePool === 'undefined' ? 'is-initial' : '';
  ;
  var activeClass = typeof activePool !== 'undefined' && activePool === id ? 'is-active' : '';
  return _react.default.createElement("polygon", {
    id: id,
    onClick: onPoolClick,
    fill: "transparent",
    className: "".concat(className, " ").concat(activeClass, " ").concat(initialClass),
    points: flattenedPoints
  });
};

var _default = Polygon;
exports.default = _default;