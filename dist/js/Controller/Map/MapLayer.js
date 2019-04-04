"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapLayer = function MapLayer(_ref) {
  var layerName = _ref.layerName,
      config = _ref.config,
      active = _ref.active,
      activeLayer = _ref.activeLayer,
      renderIcon = _ref.renderIcon,
      _onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "".concat(activeLayer === layerName ? 'is-active' : 'is-hidden', " resources resources--").concat(layerName)
  }, config.entries.map(function (_ref2) {
    var id = _ref2.id,
        position = _ref2.position;
    return _react.default.createElement("div", {
      className: "icon icon--".concat(layerName),
      key: id,
      id: id,
      style: {
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: position.y,
        left: position.x,
        transform: "".concat(active !== id ? 'scale(1, 1)' : 'scale(3, 3)'),
        zIndex: "".concat(active !== id ? '2' : '1')
      },
      onClick: function onClick(e) {
        return _onClick(e, layerName);
      }
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