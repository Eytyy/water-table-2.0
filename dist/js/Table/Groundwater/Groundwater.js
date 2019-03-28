"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _GroundwaterText = _interopRequireDefault(require("./GroundwaterText"));

var _groundwaterConfig = _interopRequireDefault(require("../../groundwaterConfig"));

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

var Groundwater =
/*#__PURE__*/
function (_Component) {
  _inherits(Groundwater, _Component);

  function Groundwater() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Groundwater);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Groundwater)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeResource: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenToIncomingEvents", function () {
      _api.socket.on('controller', function (message) {
        var event = message.event,
            payload = message.payload;

        switch (event) {
          case 'groundResourceClicked':
            _this.updateActiveResource(payload);

            break;

          default:
            return;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateActiveResource", function (payload) {
      _this.setState({
        activeResource: payload
      });
    });

    return _this;
  }

  _createClass(Groundwater, [{
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
          activeResource: undefined
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeLayer = this.props.activeLayer;

      var activeClass = function activeClass(id) {
        if (typeof _this2.state.activeResource === 'undefined') {
          return '';
        } else {
          if (_this2.state.activeResource === id) {
            return 'is-active';
          } else {
            return 'is-inActive';
          }
        }
      };

      return _react.default.createElement("div", {
        className: "layer layer--ground ".concat(activeLayer === 'ground' ? 'layer--is-active' : 'layer--is-hidden')
      }, _react.default.createElement("div", {
        className: "resources resources--ground-water"
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
      }, _groundwaterConfig.default.entries.map(function (_ref2) {
        var id = _ref2.id,
            position = _ref2.position;
        return _react.default.createElement("g", {
          className: "waste ".concat(activeClass(id)),
          key: id,
          transform: "translate(".concat(position.x, ", ").concat(position.y, ") ").concat(_this2.state.activeResource !== id ? 'scale(1, 1)' : 'scale(3, 3)')
        }, _react.default.createElement("rect", {
          id: "Rectangle-3",
          fill: "#FFFFFF",
          x: "4",
          y: "0",
          width: "33",
          height: "27"
        }), _react.default.createElement("path", {
          d: "M0,11.5 C0.974431439,13.1666667 2.8362733,14 5.58552559,14 C9.70940401,14 9.75912746,11 13.8652459,11 C17.9713643,11 17.9056522,14 22.013542,14 C26.1214318,14 26.1702765,11 30.2932623,11 C33.0419195,11 35.2774987,12.3333333 37,15",
          id: "Path-3-Copy",
          stroke: "#000000",
          strokeWidth: "3"
        }), _react.default.createElement("path", {
          d: "M0,18.5 C0.974431439,20.1666667 2.8362733,21 5.58552559,21 C9.70940401,21 9.75912746,18 13.8652459,18 C17.9713643,18 17.9056522,21 22.013542,21 C26.1214318,21 26.1702765,18 30.2932623,18 C33.0419195,18 35.2774987,19.3333333 37,22",
          id: "Path-3-Copy",
          stroke: "#000000",
          strokeWidth: "3"
        }));
      })))), _groundwaterConfig.default.entries.map(function (_ref3) {
        var name = _ref3.name,
            figures = _ref3.figures,
            id = _ref3.id,
            position = _ref3.position;
        return _react.default.createElement(_GroundwaterText.default, {
          key: "rx-".concat(id),
          activeResource: _this2.state.activeResource,
          name: name,
          figures: figures,
          id: id,
          position: position
        });
      }));
    }
  }]);

  return Groundwater;
}(_react.Component);

var _default = Groundwater;
exports.default = _default;