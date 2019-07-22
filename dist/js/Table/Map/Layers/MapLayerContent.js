"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MapLayerText = _interopRequireDefault(require("./MapLayerText"));

var _Basins = _interopRequireDefault(require("./Basins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapLayerContent = function MapLayerContent(_ref) {
  var layerName = _ref.layerName,
      activeLayer = _ref.activeLayer,
      active = _ref.active,
      config = _ref.config,
      renderIcon = _ref.renderIcon,
      renderText = _ref.renderText;
  var iconSizes = {
    'supply': {
      w: 25,
      h: 25,
      scale: '2'
    },
    'groundwater': {
      w: 25,
      h: 25,
      scale: '2'
    },
    'desalination': {
      w: 25,
      h: 25,
      scale: '2'
    },
    'waste': {
      w: 25,
      h: 25,
      scale: '2'
    },
    'canal': {
      w: 50,
      h: 30,
      scale: '1.5'
    },
    'dams': {
      w: 25,
      h: 25,
      scale: '1.5'
    }
  };

  var getOpacity = function getOpacity(id) {
    if (typeof active !== 'undefined' && active !== id) {
      if (active === 'natural' && (id === 'surface' || id === 'ground')) {
        return '1';
      }

      return '0.5';
    }

    return '1';
  };

  var getLayerVisibility = function getLayerVisibility() {
    if (activeLayer === layerName || activeLayer === 'natural' && layerName === 'surface') {
      return true;
    }

    return false;
  };

  var width = iconSizes[layerName].w;
  var height = iconSizes[layerName].h;
  var scale = iconSizes[layerName].scale;
  var isLayerActive = getLayerVisibility();
  return _react.default.createElement("div", {
    className: "layer layer--".concat(layerName, " ").concat(isLayerActive ? 'layer--is-active' : 'layer--is-hidden')
  }, layerName === 'groundwater' && _react.default.createElement(_Basins.default, null), _react.default.createElement("div", {
    className: "resources resources--".concat(layerName)
  }, config.entries.map(function (_ref2) {
    var id = _ref2.id,
        position = _ref2.position;
    return _react.default.createElement("div", {
      className: "icon icon--".concat(layerName),
      key: id,
      style: {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        position: 'absolute',
        top: position.y,
        left: position.x,
        transform: "".concat(active !== id ? 'scale(1, 1)' : "scale(".concat(scale, ", ").concat(scale, ")")),
        opacity: getOpacity(id),
        zIndex: "".concat(active !== id ? '2' : '1')
      }
    }, renderIcon());
  })), config.entries.map(function (props) {
    return _react.default.createElement(_MapLayerText.default, {
      layerName: layerName,
      key: "rx-".concat(props.id),
      active: active,
      id: props.id,
      position: props.position,
      iconWidth: width,
      iconHeight: height,
      renderText: renderText,
      entryProps: props
    });
  }));
};

var _default = MapLayerContent;
exports.default = _default;