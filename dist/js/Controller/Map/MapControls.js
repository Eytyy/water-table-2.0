"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _PoolsSVG = _interopRequireDefault(require("./PoolsSVG"));

var _NaturalIcon = _interopRequireDefault(require("../../icons/NaturalIcon"));

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

var _groundwaterconfig = _interopRequireDefault(require("../../groundwaterconfig"));

var _MapControlButton = _interopRequireDefault(require("./MapControlButton"));

var _GroundWaterIcon = _interopRequireDefault(require("../../icons/GroundWaterIcon"));

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
      activeLayer: 'natural',
      active: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveLayer", function (layer) {
      var active;

      if (layer === 'canal') {
        active = _canalConfig.default.entries[0].id;
      }

      _this.setState({
        activeLayer: _this.state.activeLayer === layer ? 'natural' : layer,
        active: active
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickLayer", function (view) {
      _this.setActiveLayer(view);

      if (view === 'canal') {
        (0, _api.broadcastEvent)({
          source: 'controller',
          event: 'mapClicked',
          payload: _canalConfig.default.entries[0].id
        });
      }

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'switchMapView',
        payload: view
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPoolClick", function (e) {
      var id;
      var target = e.currentTarget;
      var parent = target.parentNode;

      if (parent.classList.contains('svg-group')) {
        id = parent.id;
      } else {
        id = target.id;
      }

      _this.setState({
        active: id
      });

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'poolClicked',
        payload: id
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
      var activeLayer = this.state.activeLayer;
      return _react.default.createElement("section", {
        className: "controller map-console"
      }, _react.default.createElement("div", {
        className: "map-console__controls"
      }, _react.default.createElement("h1", {
        className: "controller__title"
      }, "WATER MAP & PROJECTS"), _react.default.createElement("div", {
        className: "map-console__controls__group map-console__controls__group--main"
      }, _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "natural",
        children: ['surface', 'groundwater'],
        renderIcon: function renderIcon() {
          return _react.default.createElement(_NaturalIcon.default, null);
        },
        title: "Natural Water Resources",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "supply",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_SupplyIcon.default, null);
        },
        title: "Utilities & Water Supply Projects",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "waste",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_TreatmentPlantIcon.default, null);
        },
        title: "Wastewater Treatment Plants",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "desalination",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_DesalinationIcon.default, null);
        },
        title: "Water Desalination Stations",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "dams",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_DamIcon.default, null);
        },
        title: "Dams",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        label: "canal",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_CanalIcon.default, null);
        },
        title: "King Abdullah Canal",
        onClick: this.onClickLayer
      })), (activeLayer === 'natural' || activeLayer === 'surface' || activeLayer === 'groundwater') && _react.default.createElement("div", {
        className: "map-console__controls__group map-console__controls__group--secondary"
      }, _react.default.createElement(_MapControlButton.default, {
        activeLayer: activeLayer,
        parent: "natural",
        defaultChild: true,
        label: "surface",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_NaturalIcon.default, null);
        },
        title: "Surface Water",
        onClick: this.onClickLayer
      }), _react.default.createElement(_MapControlButton.default, {
        parent: "natural",
        activeLayer: activeLayer,
        label: "groundwater",
        renderIcon: function renderIcon() {
          return _react.default.createElement(_GroundWaterIcon.default, null);
        },
        title: "Ground Water",
        onClick: this.onClickLayer
      }))), _react.default.createElement("div", {
        className: "map-console__mini-map"
      }, _react.default.createElement(_PoolsSVG.default, {
        activeLayer: this.state.activeLayer,
        PoolsConfig: _poolsConfig.default,
        active: this.state.active,
        onPoolClick: this.onPoolClick
      }), _react.default.createElement(_MapLayer.default, {
        layerName: "groundwater",
        config: _groundwaterconfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_GroundWaterIcon.default, null);
        },
        active: this.state.active,
        activeLayer: this.state.activeLayer,
        onClick: this.onMapClick
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