"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utility = require("../utility");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MapLayerText =
/*#__PURE__*/
function (_Component) {
  _inherits(MapLayerText, _Component);

  function MapLayerText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MapLayerText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapLayerText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "textBox", _react.default.createRef());

    return _this;
  }

  _createClass(MapLayerText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          position = _this$props.position,
          figures = _this$props.figures,
          active = _this$props.active,
          id = _this$props.id,
          name = _this$props.name,
          layerName = _this$props.layerName,
          iconWidth = _this$props.iconWidth,
          iconHeight = _this$props.iconHeight;
      var isActive = typeof active !== 'undefined' && active === id;
      var margin = 50;
      var textWidth = this.textBox.current ? this.textBox.current.offsetwidth : 240;
      var textHeight = this.textBox.current ? this.textBox.current.offsetHeight : 120;
      var maxScreenWidth = 1080;

      var _calculateTextPositio = (0, _utility.calculateTextPosition)({
        x: position.x + 190,
        y: position.y + 180,
        iconWidth: iconWidth,
        iconHeight: iconHeight,
        margin: margin,
        textHeight: textHeight,
        textWidth: textWidth,
        maxScreenWidth: maxScreenWidth
      }),
          orientation = _calculateTextPositio.orientation,
          positionCSS = _calculateTextPositio.positionCSS;

      var style = _objectSpread({
        color: '#FFF',
        opacity: isActive ? '1' : '0'
      }, positionCSS);

      return _react.default.createElement("div", {
        ref: this.textBox,
        style: style,
        className: "resources-text resources-text--".concat(layerName.toLowerCase(), " resources-text--").concat(orientation.x, " resources-text--").concat(orientation.y)
      }, _react.default.createElement("h2", {
        className: "resource-text__title"
      }, name), _react.default.createElement("div", {
        className: "resource-text__group"
      }, figures.map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return _react.default.createElement("div", {
          key: "".concat(id, "-").concat(label),
          className: "resource-text__group__item"
        }, _react.default.createElement("div", {
          className: "resource-text__figure-label"
        }, label), _react.default.createElement("div", {
          className: "resource-text__figure-value"
        }, value));
      })));
    }
  }]);

  return MapLayerText;
}(_react.Component);

var _default = MapLayerText;
exports.default = _default;