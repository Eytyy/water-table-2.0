"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MapLayer = _interopRequireDefault(require("../MapLayer"));

var _MapLayerContent = _interopRequireDefault(require("../MapLayerContent"));

var _MapLayerText = _interopRequireDefault(require("../MapLayerText"));

var _wastewaterConfig = _interopRequireDefault(require("../../wastewaterConfig"));

var _TreatmentPlantIcon = _interopRequireDefault(require("../../icons/TreatmentPlantIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WasteWater =
/*#__PURE__*/
function (_Component) {
  _inherits(WasteWater, _Component);

  function WasteWater() {
    _classCallCheck(this, WasteWater);

    return _possibleConstructorReturn(this, _getPrototypeOf(WasteWater).apply(this, arguments));
  }

  _createClass(WasteWater, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          active = _this$props.active;
      return _react.default.createElement(_MapLayerContent.default, {
        layerName: "waste",
        activeLayer: activeLayer,
        active: active,
        config: _wastewaterConfig.default,
        renderIcon: function renderIcon() {
          return _react.default.createElement(_TreatmentPlantIcon.default, null);
        },
        renderText: function renderText(_ref) {
          var name = _ref.name,
              figures = _ref.figures,
              id = _ref.id,
              position = _ref.position;
          return _react.default.createElement(_MapLayerText.default, {
            layerName: "waste",
            key: "rx-".concat(id),
            active: active,
            name: name,
            figures: figures,
            id: id,
            position: position
          });
        }
      });
    }
  }]);

  return WasteWater;
}(_react.Component);

var _default = (0, _MapLayer.default)(WasteWater, {
  pageName: 'waste'
});

exports.default = _default;