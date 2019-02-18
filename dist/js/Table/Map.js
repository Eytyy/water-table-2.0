"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Pools = _interopRequireDefault(require("./Pools/Pools"));

var _Textures = _interopRequireDefault(require("./Pools/Textures"));

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

// import Particles from './research/particles';
var Map =
/*#__PURE__*/
function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "map", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      playing: false,
      animationCurrentUnit: 0.0 //animation settings

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Anim", {
      'duration': 4000,
      'interval': 10,
      'stepUnit': 1.0,
      'currUnit': 0.0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "raf", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleAnimation", function () {
      if (!_this.state.playing) {
        _this.startAnimation();
      } else {
        _this.stopAnimation();
      }

      _this.state.playing = !_this.state.playing;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startAnimation", function () {
      _this.animate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopAnimation", function () {
      cancelAnimationFrame(_this.raf);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animate", function () {
      var steps = _this.Anim.duration / _this.Anim.interval; // 300

      var step_u = _this.Anim.stepUnit / steps; // 1.0/300
      // updatePools({au: this.Anim.currUnit});

      _this.setState({
        animationCurrentUnit: _this.Anim.currUnit
      });

      if (_this.Anim.currUnit >= 1.0) {
        _this.Anim.currUnit = 0;

        _this.setState({
          animationCurrentUnit: 0
        }); // updateCurrentStop();

      }

      _this.Anim.currUnit += step_u;
      _this.raf = requestAnimationFrame(_this.animate);
    });

    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.map.addEvent;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: this.map,
        onClick: this.toggleAnimation
      }, _react.default.createElement(_Pools.default, {
        au: this.state.animationCurrentUnit
      }));
    }
  }]);

  return Map;
}(_react.Component);

var _default = Map;
exports.default = _default;