"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _wastewaterConfig = _interopRequireDefault(require("../../wastewaterConfig"));

var _WasteWaterText = _interopRequireDefault(require("./WasteWaterText"));

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
      }, _react.default.createElement("svg", {
        width: "1080",
        height: "1580",
        viewBox: "0 0 1080 1580"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(180, 190)"
      }, _wastewaterConfig.default.entries.map(function (_ref2) {
        var id = _ref2.id,
            position = _ref2.position;
        return _react.default.createElement("g", {
          className: "waste ".concat(activeClass(id)),
          key: id,
          transform: "translate(".concat(position.x, ", ").concat(position.y, ") ").concat(_this2.state.activePlant !== id ? 'scale(1, 1)' : 'scale(3, 3)')
        }, _react.default.createElement("g", {
          className: "waste-inner"
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
      })))), _wastewaterConfig.default.entries.map(function (_ref3) {
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