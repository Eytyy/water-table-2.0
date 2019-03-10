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
      activePool = _ref.activePool;

  var getXYofRect = function getXYofRect(pool) {
    var x = pool.map(function (_ref2) {
      var points = _ref2.points;
      return points.map(function (_ref3) {
        var x = _ref3.x;
        return x;
      });
    }).reduce(function (c, n) {
      return c.concat(n);
    }).reduce(function (c, n) {
      return Math.min(c, n);
    });
    var y = pool.map(function (_ref4) {
      var points = _ref4.points;
      return points.map(function (_ref5) {
        var y = _ref5.y;
        return y;
      });
    }).reduce(function (c, n) {
      return c.concat(n);
    }).reduce(function (c, n) {
      return Math.min(c, n);
    });
    return {
      x: x,
      y: y
    };
  };

  return _react.default.createElement("svg", {
    id: "pools",
    className: "resources resources--pools",
    width: "914",
    height: "1539",
    viewBox: "0 0 914 1539"
  }, PoolsConfig.entries.map(function (_ref6) {
    var pool = _ref6.pool,
        id = _ref6.id;
    return Array.isArray(pool) ? _react.default.createElement(_Polygon.default, {
      key: "svg-".concat(id),
      className: "pool",
      activePool: activePool,
      pool: pool,
      id: id,
      group: true,
      minMax: getXYofRect(pool)
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