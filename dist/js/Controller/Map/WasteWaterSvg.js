"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

var WasteWaterSVG = function WasteWaterSVG(_ref) {
  var config = _ref.config,
      active = _ref.active,
      _onClick = _ref.onClick,
      activeLayer = _ref.activeLayer;
  return _react.default.createElement("svg", {
    width: "1080",
    height: "1580",
    viewBox: "0 0 1080 1580",
    className: "".concat(activeLayer === 'waste' ? 'is-active' : 'is-hidden', " resources resources--waste")
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
        return _onClick(e, 'waste');
      },
      className: "waste ".concat(active === id ? 'is-active' : ''),
      key: id,
      id: id,
      transform: "translate(".concat(position.x, ", ").concat(position.y, ") ").concat(active === id ? 'scale(3,3)' : 'scale(1,1)')
    }, _react.default.createElement("g", {
      className: "waste-inner",
      transform: "rotate(".concat(getRandomInt(0, 360), ")")
    }, _react.default.createElement("path", {
      d: "M16.8958333,13.3958333 C16.8958333,15.3288378 15.3288378,16.8958333 13.3958333,16.8958333 C11.4628289,16.8958333 9.89583333,15.3288378 9.89583333,13.3958333 C9.89583333,11.4628289 11.4628289,9.89583333 13.3958333,9.89583333 C15.3288378,9.89583333 16.8958333,11.4628289 16.8958333,13.3958333 Z",
      id: "Stroke-1",
      stroke: "#262525",
      strokeWidth: "3"
    }), _react.default.createElement("path", {
      d: "M13.6784958,1.52083333 C6.96400073,1.52083333 1.52083333,6.88411068 1.52083333,13.5000562 C1.52083333,20.1158893 6.96400073,25.4791667 13.6784958,25.4791667 C13.7930647,25.4791667 13.9070631,25.4772552 14.0208333,25.4742194 L14.0208333,1.52578059 C13.9070631,1.52274477 13.7930647,1.52083333 13.6784958,1.52083333 Z",
      id: "Stroke-3",
      stroke: "#262525",
      strokeWidth: "3"
    }), _react.default.createElement("path", {
      d: "M26,13.5000562 C26,6.99431133 20.667853,1.69957062 14.0208333,1.52083333 L14.0208333,25.4791667 C20.667853,25.3004294 26,20.0058011 26,13.5000562 Z",
      id: "Stroke-5",
      stroke: "#262525",
      strokeWidth: "3"
    }), _react.default.createElement("path", {
      d: "M1,13.5 C1,20.4035653 6.59643475,26 13.5,26 L13.5,1 C6.59643475,1 1,6.59643475 1,13.5 Z",
      id: "Stroke-7",
      stroke: "#FEFEFE",
      strokeWidth: "2"
    }), _react.default.createElement("path", {
      d: "M13.5,1 L13.5,26 C20.4035653,26 26,20.4034765 26,13.4999428 C26,6.59640915 20.4035653,1 13.5,1 Z",
      id: "Stroke-9",
      stroke: "#FEFEFE",
      strokeWidth: "2"
    }), _react.default.createElement("path", {
      d: "M27.4479167,13.5 C27.4479167,20.9559438 21.4038604,27 13.9479167,27 C6.4919729,27 0.447916667,20.9559438 0.447916667,13.5 C0.447916667,6.04405624 6.4919729,0 13.9479167,0 C21.4038604,0 27.4479167,6.04405624 27.4479167,13.5",
      id: "Fill-11"
    }), _react.default.createElement("path", {
      d: "M15.8958333,13.3958333 C15.8958333,14.7765508 14.7765508,15.8958333 13.3958333,15.8958333 C12.0151159,15.8958333 10.8958333,14.7765508 10.8958333,13.3958333 C10.8958333,12.0151159 12.0151159,10.8958333 13.3958333,10.8958333 C14.7765508,10.8958333 15.8958333,12.0151159 15.8958333,13.3958333 Z",
      id: "Stroke-1",
      stroke: "#FFFFFF",
      strokeWidth: "3"
    })), _react.default.createElement("rect", {
      id: id,
      x: "0",
      y: "0",
      width: "30",
      height: "30",
      fill: "transparent"
    }));
  })));
};

var _default = WasteWaterSVG;
exports.default = _default;