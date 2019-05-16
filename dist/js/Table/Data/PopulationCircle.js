"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utility = require("../../utility");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopulationCircle = function PopulationCircle(_ref) {
  var _this = this;

  var ctx = _ref.ctx,
      _width = _ref.width,
      _height = _ref.height;

  _classCallCheck(this, PopulationCircle);

  _defineProperty(this, "draw", function () {
    var color = (0, _utility.getRandomInt)(250, 255);
    _this.ctx.fillStyle = "rgba(".concat(color, ", ").concat(color, ", ").concat(color, ", 0.2)");

    _this.ctx.beginPath();

    _this.ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);

    _this.ctx.fill();

    _this.ctx.closePath();
  });

  _defineProperty(this, "updateTranslationBoundries", function (width, height, radius) {
    var uWidth = width || _this.width;
    var uHeight = height || _this.height;
    var uRadius = radius || _this.radius;
    _this.sxp = uWidth / 2 - uRadius / 2; // x start point

    _this.exp = uWidth / 2 + uRadius / 2; // x end point

    _this.syp = uHeight / 2 - uRadius / 2; // y start point

    _this.eyp = uHeight / 2 + uRadius / 2; // y end point
  });

  _defineProperty(this, "update", function (radius) {
    _this.radius = radius;

    _this.updateTranslationBoundries();

    _this.x = (0, _utility.getRandomInt)(_this.sxp, _this.exp);
    _this.y = (0, _utility.getRandomInt)(_this.syp, _this.eyp);

    _this.draw();
  });

  _defineProperty(this, "move", function () {
    _this.updateTranslationBoundries();

    _this.x += _this.vx;
    _this.y += _this.vy;

    if (_this.x < _this.sxp || _this.x > _this.exp) {
      _this.vx *= -1;
    }

    if (_this.y < _this.syp || _this.y > _this.eyp) {
      _this.vy *= -1;
    }

    _this.draw();
  });

  this.ctx = ctx;
  this.width = _width;
  this.height = _height;
  this.radius = 0;
  this.vx = (0, _utility.getRandomInt)(-2, 2); // vector x

  this.vy = (0, _utility.getRandomInt)(-2, 2); // vector y

  this.x = (0, _utility.getRandomInt)(_width / 2 - this.radius, _width / 2 + this.radius);
  this.y = (0, _utility.getRandomInt)(_height / 2 - this.radius, _height / 2 + this.radius);
  this.updateTranslationBoundries(_width, _height, this.radius);
};

exports.default = PopulationCircle;