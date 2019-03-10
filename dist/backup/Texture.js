"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = require("../utility");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Texture =
/*#__PURE__*/
function () {
  function Texture(_props) {
    var _this = this;

    _classCallCheck(this, Texture);

    _defineProperty(this, "draw", function (props) {
      var pool = _this.state.pool;
      var ctx = props.ctx;
      var intensity = typeof props !== 'undefined' ? props.intensity : _this.state.intensity;
      var points = pool.points;
      ctx.beginPath();
      ctx.save();
      var fillStyle = 'rgba(0,0,0,0)';
      ctx.fillStyle = fillStyle;
      (0, _utility.drawPolyline)({
        ctx: ctx,
        points: points
      });
      ctx.clip();
      ctx.restore();
    });

    this.state = _objectSpread({}, _props);
  }

  _createClass(Texture, [{
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
  }]);

  return Texture;
}();

var _default = Texture;
exports.default = _default;