"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapLayerContent = function MapLayerContent(_ref) {
  var layerName = _ref.layerName,
      activeLayer = _ref.activeLayer,
      active = _ref.active,
      config = _ref.config,
      renderIcon = _ref.renderIcon,
      renderText = _ref.renderText;
  return _react.default.createElement("div", {
    className: "layer layer--".concat(layerName, " ").concat(activeLayer === layerName ? 'layer--is-active' : 'layer--is-hidden')
  }, _react.default.createElement("div", {
    className: "resources resources--".concat(layerName)
  }, config.entries.map(function (_ref2) {
    var id = _ref2.id,
        position = _ref2.position;
    return _react.default.createElement("div", {
      className: "icon",
      key: id,
      style: {
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: position.y + 180,
        left: position.x + 190,
        transform: "".concat(active !== id ? 'scale(1, 1)' : 'scale(3, 3)'),
        zIndex: "".concat(active !== id ? '2' : '1')
      }
    }, renderIcon());
  })), config.entries.map(function (_ref3) {
    var name = _ref3.name,
        figures = _ref3.figures,
        id = _ref3.id,
        position = _ref3.position;
    return renderText({
      name: name,
      figures: figures,
      id: id,
      position: position
    });
  }));
};

var _default = MapLayerContent;
exports.default = _default;