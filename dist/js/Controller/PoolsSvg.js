"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Polygon = _interopRequireDefault(require("./Polygon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PoolsSvg = function PoolsSvg(_ref) {
  var _React$createElement;

  var PoolsConfig = _ref.PoolsConfig,
      activePool = _ref.activePool,
      onPoolClick = _ref.onPoolClick;
  return _react.default.createElement("div", {
    className: "map-console__mini-map"
  }, _react.default.createElement("svg", (_React$createElement = {
    id: "pools",
    className: "resources resources-svg"
  }, _defineProperty(_React$createElement, "id", "svg1"), _defineProperty(_React$createElement, "width", "914"), _defineProperty(_React$createElement, "height", "1539"), _defineProperty(_React$createElement, "viewBox", "0 0 914 1539"), _React$createElement), PoolsConfig.entries.map(function (_ref2) {
    var points = _ref2.pool.points,
        id = _ref2.id;
    return _react.default.createElement(_Polygon.default, {
      key: "svg-".concat(id),
      className: "pool",
      activePool: activePool,
      points: points,
      onPoolClick: onPoolClick,
      id: id
    });
  })));
};

var _default = PoolsSvg;
exports.default = _default;