"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.update = void 0;

var _Texture = _interopRequireDefault(require("./Texture"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = 1080;
var height = 1920;
var image;
canvas.id = 'pools-textures';
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas); // DeadSea 1

var DeadSeaTop = new _Texture.default(_config.DeadSeaTopConfig); // DeadSea2

var DeadSeaBottom = new _Texture.default(_config.DeadSeaBottomConfig); // Azraq

var Azraq = new _Texture.default(_config.AzraqConfig); // Jafar

var Jafar = new _Texture.default(_config.JafarConfig); // Aqaba

var Aqaba = new _Texture.default(_config.AqabaConfig); // Tabariah

var Tabariah = new _Texture.default(_config.TabariahConfig);
var Textures = [DeadSeaTop, DeadSeaBottom, Azraq, Jafar, Aqaba, Tabariah];

var init = function init() {
  Textures.map(function (texture) {
    return texture.draw({
      image: image,
      ctx: ctx
    });
  });
};

var update = function update() {
  ctx.clearRect(0, 0, width, height);
  Textures.map(function (texture) {
    return texture.draw();
  });
};

exports.update = update;
var _default = init;
exports.default = _default;