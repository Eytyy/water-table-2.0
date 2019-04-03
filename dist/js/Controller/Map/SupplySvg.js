"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SupplySVG = function SupplySVG(_ref) {
  var config = _ref.config,
      active = _ref.active,
      _onClick = _ref.onClick,
      activeLayer = _ref.activeLayer;
  return _react.default.createElement("svg", {
    width: "1080",
    height: "1580",
    viewBox: "0 0 1080 1580",
    className: "".concat(activeLayer === 'supply' ? 'is-active' : 'is-hidden', " resources resources--supply")
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(180, 190)"
  }, config.entries.map(function (_ref2) {
    var id = _ref2.id,
        position = _ref2.position;
    return _react.default.createElement("g", {
      onClick: function onClick(e) {
        return _onClick(e, 'supply');
      },
      className: "supply",
      key: id,
      id: id,
      transform: "translate(".concat(position.x, ", ").concat(position.y, ") ").concat(active !== id ? 'scale(1, 1)' : 'scale(3, 3)')
    }, _react.default.createElement("rect", {
      id: id,
      fill: "#FFFFFF",
      x: "4",
      y: "0",
      width: "33",
      height: "27"
    }), _react.default.createElement("path", {
      d: "M0,11.5 C0.974431439,13.1666667 2.8362733,14 5.58552559,14 C9.70940401,14 9.75912746,11 13.8652459,11 C17.9713643,11 17.9056522,14 22.013542,14 C26.1214318,14 26.1702765,11 30.2932623,11 C33.0419195,11 35.2774987,12.3333333 37,15",
      id: "Path-3-Copy",
      stroke: "#000000",
      strokeWidth: "3"
    }), _react.default.createElement("path", {
      d: "M0,18.5 C0.974431439,20.1666667 2.8362733,21 5.58552559,21 C9.70940401,21 9.75912746,18 13.8652459,18 C17.9713643,18 17.9056522,21 22.013542,21 C26.1214318,21 26.1702765,18 30.2932623,18 C33.0419195,18 35.2774987,19.3333333 37,22",
      id: "Path-3-Copy",
      stroke: "#000000",
      strokeWidth: "3"
    }));
  })));
};

var _default = SupplySVG;
exports.default = _default;