"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapLayer = function MapLayer(_ref) {
  var layerName = _ref.layerName,
      config = _ref.config,
      active = _ref.active,
      activeLayer = _ref.activeLayer,
      renderIcon = _ref.renderIcon,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "".concat(activeLayer === layerName ? 'is-active' : 'is-hidden', " resources resources--").concat(layerName),
    style: {
      width: '683px',
      height: '1024px',
      position: 'absolute',
      left: '0px',
      top: '0px'
    }
  }, config.entries.map(function (_ref2) {
    var id = _ref2.id,
        position = _ref2.position;
    return _react.default.createElement("div", {
      className: "icon icon--".concat(layerName),
      key: id,
      id: id,
      style: {
        width: '25px',
        height: '25px',
        position: 'absolute',
        // scale down by 66.5
        // then adjust top/left position those are determined visually
        top: Math.floor(position.y * 0.665) + 105,
        left: Math.floor(position.x * 0.665) + 125,
        opacity: "".concat(typeof active !== 'undefined' && active !== id ? '0.2' : '1'),
        zIndex: "".concat(active !== id ? '2' : '1')
      },
      onClick: onClick
    }, renderIcon());
  }));
};

MapLayer.defaultProps = {
  onClick: function onClick() {
    return false;
  }
};
var _default = MapLayer;
exports.default = _default;