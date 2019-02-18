"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.updateCurrentStop = exports.update = void 0;

var _Pool = _interopRequireDefault(require("./Pool"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = 1080;
var height = 1920;
canvas.id = 'pools';
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas); // DeadSea 1

var DeadSeaTop = new _Pool.default(_config.DeadSeaTopConfig); // DeadSea2

var DeadSeaBottom = new _Pool.default(_config.DeadSeaBottomConfig); // Azraq

var Azraq = new _Pool.default(_config.AzraqConfig); // Jafar

var Jafar = new _Pool.default(_config.JafarConfig); // Aqaba

var Aqaba = new _Pool.default(_config.AqabaConfig); // Tabariah

var Tabariah = new _Pool.default(_config.TabariahConfig);
var Pools = [DeadSeaTop, DeadSeaBottom, Azraq, Jafar, Aqaba, Tabariah];

var init = function init(_ref) {
  var au = _ref.au;
  Pools.map(function (pool) {
    return pool.init({
      ctx: ctx,
      au: au
    });
  });
};

var update = function update(_ref2) {
  var au = _ref2.au;
  ctx.clearRect(0, 0, width, height);
  Pools.map(function (pool) {
    return pool.update({
      au: au,
      ctx: ctx
    });
  });
};

exports.update = update;

var updateCurrentStop = function updateCurrentStop() {
  Pools.map(function (pool) {
    return pool.updateCurrentStop();
  });
};

exports.updateCurrentStop = updateCurrentStop;
var _default = init;
exports.default = _default;