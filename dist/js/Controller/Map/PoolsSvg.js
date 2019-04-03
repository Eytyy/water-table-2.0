"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Polygon = _interopRequireDefault(require("./Polygon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoolsSvg = function PoolsSvg(_ref) {
  var PoolsConfig = _ref.PoolsConfig,
      activePool = _ref.activePool,
      activeLayer = _ref.activeLayer;
  return _react.default.createElement("svg", {
    id: "pools",
    className: "".concat(activeLayer === 'default' ? 'is-active' : 'is-hidden', " resources resources---pools"),
    width: "914",
    height: "1539",
    viewBox: "0 0 914 1539"
  }, PoolsConfig.entries.map(function (_ref2) {
    var pool = _ref2.pool,
        id = _ref2.id;
    return Array.isArray(pool) ? _react.default.createElement(_Polygon.default, {
      key: "svg-".concat(id),
      className: "pool",
      activePool: activePool,
      pool: pool,
      id: id,
      group: true
    }) : _react.default.createElement(_Polygon.default, {
      key: "svg-".concat(id),
      className: "pool",
      activePool: activePool,
      points: pool.points,
      id: id
    });
  }));
};

var _default = PoolsSvg;
exports.default = _default;