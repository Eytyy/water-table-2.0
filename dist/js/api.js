"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastEvent = exports.socket = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ip = '192.168.1.82'; // strada
// const ip = '192.168.86.214';

var port = '8080';

var socket = _socket.default.connect("http://".concat(ip, ":").concat(port));

exports.socket = socket;
socket.on('connect', function () {
  socket.emit('join', 'Water Table Controller: connected');
});

var broadcastEvent = function broadcastEvent(_ref) {
  var source = _ref.source,
      event = _ref.event,
      payload = _ref.payload;
  socket.emit(source, {
    event: event,
    payload: payload
  });
};

exports.broadcastEvent = broadcastEvent;