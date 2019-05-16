"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = require("./utility");

var _gradient = _interopRequireDefault(require("./gradient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var Pool =
/*#__PURE__*/
function () {
  function Pool(_props) {
    var _this = this;

    _classCallCheck(this, Pool);

    _defineProperty(this, "colorStops", []);

    _defineProperty(this, "currentStop", 0);

    _defineProperty(this, "updateCurrentStop", function () {
      var stopsLength = _this.colorStops[0].colors.length - 1;

      if (_this.currentStop < stopsLength) {
        _this.currentStop++;
      } else {
        _this.currentStop = 0;
      }
    });

    _defineProperty(this, "draw", function (props) {
      var _this$state = _this.state,
          pool = _this$state.pool,
          direction = _this$state.direction;
      var ctx = props.ctx;
      var points = pool.points;

      var minMax = _this.setMinMax(points);

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
      }); // ctx.arc(minMax.x.min + poolWidth/2, minMax.y.min + poolHeight/2, (poolWidth + poolHeight) / 2, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.fillRect(0,0, 100, 100);

      ctx.clip();
      ctx.restore();
    });

    _defineProperty(this, "update", function (props) {
      var au = props.au;

      _this.updateColorStops({
        au: au
      });

      _this.draw(props);
    });

    this.state = _objectSpread({}, _props);
  }

  _createClass(Pool, [{
    key: "setMinMax",
    value: function setMinMax(points) {
      return points.reduce(function (curr, next) {
        var xNext = next.x,
            yNext = next.y;
        var xCurr = curr.x,
            yCurr = curr.y;

        if (typeof xCurr === 'undefined') {
          return {
            x: {
              min: xNext,
              max: xNext
            },
            y: {
              min: yNext,
              max: yNext
            }
          };
        }

        return {
          x: {
            min: xNext < xCurr.min ? xNext : xCurr.min,
            max: xNext > xCurr.max ? xNext : xCurr.max
          },
          y: {
            min: yNext < yCurr.min ? yNext : yCurr.min,
            max: yNext > yCurr.max ? yNext : yCurr.max
          }
        };
      }, {});
    }
  }, {
    key: "addColorStop",
    value: function addColorStop(pos, colors) {
      var stop = {
        'pos': pos,
        'colors': colors,
        'currColor': null
      };
      this.colorStops.push(stop);
    }
  }, {
    key: "updateColorStops",
    value: function updateColorStops(_ref) {
      var _this2 = this;

      var au = _ref.au;
      // cycle through all stops in gradient
      var stopsLength = this.colorStops[0].colors.length - 1;
      this.colorStops.forEach(function (stop) {
        //get stop 1 color
        var startColor = stop.colors[_this2.currentStop]; //get stop 2 color, go to first if at last stop

        var endColor = _this2.currentStop < stopsLength ? stop.colors[_this2.currentStop + 1] : stop.colors[0]; //interpolate both stop 1&2 colors to get new color based on animaiton unit

        var r = Math.floor((0, _utility.lerp)(startColor.r, endColor.r, au));
        var g = Math.floor((0, _utility.lerp)(startColor.g, endColor.g, au));
        var b = Math.floor((0, _utility.lerp)(startColor.b, endColor.b, au));
        var a = (0, _utility.lerp)(startColor.a, endColor.a, au);
        stop.currColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      });
    }
  }, {
    key: "init",
    value: function init(props) {
      this.addColorStop(0.1, stopAColor);
      this.addColorStop(0.6, stopBColor);
      this.addColorStop(1, stopCColor);
      this.updateColorStops({
        au: props.au
      });
      this.draw(props);
    }
  }]);

  return Pool;
}();

var _default = Pool;
exports.default = _default;