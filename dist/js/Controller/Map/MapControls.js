"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _PoolsSVG = _interopRequireDefault(require("./PoolsSVG"));

var _SupplyIcon = _interopRequireDefault(require("../../icons/SupplyIcon"));

var _DamIcon = _interopRequireDefault(require("../../icons/DamIcon"));

var _CanalIcon = _interopRequireDefault(require("../../icons/CanalIcon"));

var _DesalinationIcon = _interopRequireDefault(require("../../icons/DesalinationIcon"));

var _TreatmentPlantIcon = _interopRequireDefault(require("../../icons/TreatmentPlantIcon"));

var _MapLayer = _interopRequireDefault(require("./MapLayer"));

var _poolsConfig = _interopRequireDefault(require("../../poolsConfig"));

var _damsConfig = _interopRequireDefault(require("../../damsConfig"));

var _desalinationConfig = _interopRequireDefault(require("../../desalinationConfig"));

var _canalConfig = _interopRequireDefault(require("../../canalConfig"));

var _supplyConfig = _interopRequireDefault(require("../../supplyConfig"));

var _wastewaterConfig = _interopRequireDefault(require("../../wastewaterConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeLayer: 'default',
      active: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveLayer", function (layer) {
      _this.setState({
        activeLayer: _this.state.activeLayer === layer ? 'default' : layer,
        active: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickLayer", function (view) {
      _this.setActiveLayer(view);

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'switchMapView',
        payload: view
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMapClick", function (e) {
      var target = e.currentTarget.id;

      _this.setState({
        active: target
      });

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'mapClicked',
        payload: target
      });
    });

    return _this;
  }

  _createClass(MapControls, [{
    key: "render",
    // Put the buttons in a config file and loop over for better readability
    value: function render() {
      var _this2 = this;

      var activeLayer = this.state.activeLayer;
      return _react.default.createElement("section", {
        className: "map-console"
      }, _react.default.createElement("div", {
        className: "map-console__controls"
      }, _react.default.createElement("h1", null, "WATER MAP & PROJECTS"), _react.default.createElement("div", {
        className: "map-console__controls__group map-console__controls__group--main"
      }, _react.default.createElement("div", {
        className: "btn-group ".concat(activeLayer === 'supply' ? 'is-active' : ''),
        onClick: function onClick() {
          _this2.onClickLayer('supply');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--supply"
      }, _react.default.createElement(_SupplyIcon.default, null)), _react.default.createElement("span", {
        className: "btn-label"
      }, "Utilities & Water Supply Projects")), _react.default.createElement("div", {
        className: "btn-group ".concat(activeLayer === 'waste' ? 'is-active' : ''),
        onClick: function onClick() {
          _this2.onClickLayer('waste');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--waste"
      }, _react.default.createElement(_TreatmentPlantIcon.default, null)), _react.default.createElement("span", {
        className: "btn-label"
      }, "Wastewater Treatment Plants")), _react.default.createElement("div", {
        className: "btn-group ".concat(activeLayer === 'desalination' ? 'is-active' : ''),
        onClick: function onClick() {
          _this2.onClickLayer('desalination');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--desalination"
      }, _react.default.createElement(_DesalinationIcon.default, null)), _react.default.createElement("span", {
        className: "btn-label"
      }, "Water Desalination Stations")), _react.default.createElement("div", {
        className: "btn-group ".concat(activeLayer === 'dams' ? 'is-active' : ''),
        onClick: function onClick() {
          _this2.onClickLayer('dams');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--dams"
      }, _react.default.createElement(_DamIcon.default, null)), _react.default.createElement("span", {
        className: "btn-label"
      }, "Dams")), _react.default.createElement("div", {
        className: "btn-group ".concat(activeLayer === 'canal' ? 'is-active' : ''),
        onClick: function onClick() {
          _this2.onClickLayer('canal');
        }
      }, _react.default.createElement("i", {
        className: "btn-icon icon--canal"
      }, _react.default.createElement(_CanalIcon.default, null)), _react.default.createElement("span", {
        className: "btn-label"
      }, "King Abdullah Canal")))), _react.default.createElement("div", {
        className: "map-console__mini-map"
      }, _react.default.createElement(_PoolsSVG.default, {
        activeLayer: this.state.activeLayer,
        PoolsConfig: _poolsConfig.default,
        active: this.state.active
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "desalination",
        config: _desalinationConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_DesalinationIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "supply",
        config: _supplyConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_SupplyIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "waste",
        config: _wastewaterConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_TreatmentPlantIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "dams",
        config: _damsConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_DamIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "canal",
        config: _canalConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_CanalIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
      })));
    }
  }]);

  return MapControls;
}(_react.Component);

var _default = MapControls;
exports.default = _default;