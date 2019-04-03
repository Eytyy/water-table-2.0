"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _wastewaterConfig = _interopRequireDefault(require("../../wastewaterConfig"));

var _WasteWaterText = _interopRequireDefault(require("./WasteWaterText"));

var _TreatmentPlantIcon = _interopRequireDefault(require("../../icons/TreatmentPlantIcon"));

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

var WasteWater =
/*#__PURE__*/
function (_Component) {
  _inherits(WasteWater, _Component);

  function WasteWater() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WasteWater);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WasteWater)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activePlant: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenToIncomingEvents", function () {
      _api.socket.on('controller', function (message) {
        var event = message.event,
            payload = message.payload;

        switch (event) {
          case 'plantClicked':
            _this.updateActivePlant(payload);

            break;

          default:
            return;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateActivePlant", function (payload) {
      _this.setState({
        activePlant: payload
      });
    });

    return _this;
  }

  _createClass(WasteWater, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listenToIncomingEvents();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var activeLayer = _ref.activeLayer;

      if (this.props.activeLayer !== activeLayer) {
        this.setState({
          activePlant: undefined
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeLayer = this.props.activeLayer;

      var activeClass = function activeClass(id) {
        if (typeof _this2.state.activePlant === 'undefined') {
          return '';
        } else {
          if (_this2.state.activePlant === id) {
            return 'is-active';
          } else {
            return 'is-inActive';
          }
        }
      };

      return _react.default.createElement("div", {
        className: "layer layer--waste ".concat(activeLayer === 'waste' ? 'layer--is-active' : 'layer--is-hidden')
      }, _react.default.createElement("div", {
        className: "resources resources--waste-plants"
      }, _wastewaterConfig.default.entries.map(function (_ref2) {
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
            transform: "".concat(_this2.state.activePlant !== id ? 'scale(1, 1)' : 'scale(3, 3)'),
            zIndex: "".concat(_this2.state.activePlant !== id ? '2' : '1')
          }
        }, _react.default.createElement(_TreatmentPlantIcon.default, null));
      })), _wastewaterConfig.default.entries.map(function (_ref3) {
        var name = _ref3.name,
            figures = _ref3.figures,
            id = _ref3.id,
            position = _ref3.position;
        return _react.default.createElement(_WasteWaterText.default, {
          key: "rx-".concat(id),
          activePlant: _this2.state.activePlant,
          name: name,
          figures: figures,
          id: id,
          position: position
        });
      }));
    }
  }]);

  return WasteWater;
}(_react.Component);

var _default = WasteWater;
exports.default = _default;