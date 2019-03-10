"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utility = require("./utility");

var _gradient = _interopRequireDefault(require("./gradient"));

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

var stopAColor = [{
  'r': '255',
  'g': '255',
  'b': '255',
  a: '0.9'
}, //blue
{
  'r': '150',
  'g': '150',
  'b': '150',
  a: '1'
}, //blue
{
  'r': '230',
  'g': '230',
  'b': '230',
  a: '0.8'
}];
var stopBColor = [{
  'r': '150',
  'g': '150',
  'b': '150',
  a: '0.7'
}, //blue
{
  'r': '230',
  'g': '230',
  'b': '230',
  a: '1'
}, //blue
{
  'r': '255',
  'g': '255',
  'b': '255',
  a: '0.9'
}];
var stopCColor = [{
  'r': '230',
  'g': '230',
  'b': '230',
  a: '1'
}, //blue
{
  'r': '255',
  'g': '255',
  'b': '255',
  a: '0.8'
}, //blue
{
  'r': '200',
  'g': '200',
  'b': '200',
  a: '0.7'
}];

var PoolComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PoolComponent, _Component);

  function PoolComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PoolComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PoolComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "colorStops", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentStop", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addColorStop", function (pos, colors) {
      _this.colorStops.push({
        'pos': pos,
        'colors': colors,
        'currColor': null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addColorStops", function () {
      _this.addColorStop(0.1, stopAColor);

      _this.addColorStop(0.6, stopBColor);

      _this.addColorStop(1, stopCColor);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCurrentStop", function () {
      var stopsLength = _this.colorStops[0].colors.length - 1;

      if (_this.currentStop < stopsLength) {
        _this.currentStop++;
      } else {
        _this.currentStop = 0;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateColorStops", function (au) {
      // cycle through all stops in gradient
      var stopsLength = _this.colorStops[0].colors.length - 1;

      _this.colorStops.forEach(function (stop) {
        //get stop 1 color
        var startColor = stop.colors[_this.currentStop]; //get stop 2 color, go to first if at last stop

        var endColor = _this.currentStop < stopsLength ? stop.colors[_this.currentStop + 1] : stop.colors[0]; //interpolate both stop 1&2 colors to get new color based on animaiton unit

        var r = Math.floor((0, _utility.lerp)(startColor.r, endColor.r, au));
        var g = Math.floor((0, _utility.lerp)(startColor.g, endColor.g, au));
        var b = Math.floor((0, _utility.lerp)(startColor.b, endColor.b, au));
        var a = (0, _utility.lerp)(startColor.a, endColor.a, au);
        stop.currColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "draw", function () {
      var _this$props = _this.props,
          _this$props$config = _this$props.config,
          pool = _this$props$config.pool,
          direction = _this$props$config.direction,
          ctx = _this$props.ctx;
      var points = pool.points || _this.props.points;
      var minMax = (0, _utility.setMinMax)(points);
      var poolWidth = minMax.x.max - minMax.x.min;
      var poolHeight = minMax.y.max - minMax.y.min;
      ctx.beginPath();
      ctx.save();
      var fillStyle = (0, _gradient.default)({
        context: ctx,
        width: poolWidth,
        height: poolHeight,
        x0: minMax.x.min,
        y0: minMax.y.min,
        currentStop: _this.currentStop,
        colorStops: _this.colorStops,
        direction: direction
      });
      ctx.fillStyle = fillStyle;
      (0, _utility.drawPolyline)({
        ctx: ctx,
        points: points
      });
      ctx.clip();
      ctx.restore();
    });

    return _this;
  }

  _createClass(PoolComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var au = _ref.au;
      var ctx = this.props.ctx;

      if (this.colorStops.length === 0) {
        this.addColorStops();
      }

      if (au !== this.props.au) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.updateColorStops(au);
        this.draw();

        if (au === 0) {
          this.updateCurrentStop();
        }
      } // empty color stops for next pool


      this.colorStops = [];
      this.currentStop = 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var au = this.props.au;
      this.addColorStops();
      this.updateColorStops(au);
      this.draw();
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      return null;
    }
  }]);

  return PoolComponent;
}(_react.Component);

var _default = PoolComponent;
exports.default = _default;