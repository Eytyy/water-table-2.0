"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../api");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MapControls =
/*#__PURE__*/
function (_Component) {
  _inherits(MapControls, _Component);

  function MapControls() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MapControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (view) {
      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'switchMapView',
        payload: view
      });
    });

    return _this;
  }

  _createClass(MapControls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("section", {
        className: "map-console"
      }, _react.default.createElement("div", {
        className: "map-console__controls"
      }, _react.default.createElement("h1", null, "WATER MAP & PROJECTS"), _react.default.createElement("div", {
        className: "map-console__controls__main"
      }, _react.default.createElement("div", {
        className: "btn-group",
        onClick: function onClick() {
          _this2.onClick('natural');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--natural"
      }), _react.default.createElement("span", {
        className: "btn-label"
      }, "Natural Water Resources")), _react.default.createElement("div", {
        className: "btn-group",
        onClick: function onClick() {
          _this2.onClick('utilities');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--projects"
      }), _react.default.createElement("span", {
        className: "btn-label"
      }, "Utilities & Water Supply Projects")), _react.default.createElement("div", {
        className: "btn-group",
        onClick: function onClick() {
          _this2.onClick('waste');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--waste"
      }), _react.default.createElement("span", {
        className: "btn-label"
      }, "Wastewater Treatment Plants")), _react.default.createElement("div", {
        className: "btn-group",
        onClick: function onClick() {
          _this2.onClick('conveyors');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--conveyors"
      }), _react.default.createElement("span", {
        className: "btn-label"
      }, "Water Conveyors")), _react.default.createElement("div", {
        className: "btn-group",
        onClick: function onClick() {
          _this2.onClick('dams');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--dams"
      }), _react.default.createElement("span", {
        className: "btn-label"
      }, "Dams")))), _react.default.createElement("div", {
        className: "map-console__mini-map"
      }, "imagine a map here"));
    }
  }]);

  return MapControls;
}(_react.Component);

var _default = MapControls;
exports.default = _default;