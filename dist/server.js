"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;
var app = (0, _express.default)();

var server = require('http').createServer(app);

var io = (0, _socket.default)(server);
io.on('connection', function (client) {
  client.on('join', function (data) {
    console.log(data);
  }); // controller

  client.on('controller', function (data) {
    client.broadcast.emit('controller', data);
  });
  client.on('from-table', function (data) {
    client.broadcast.emit('from-table', data);
  });
});
app.use(_express.default.static(_path.default.resolve(__dirname, "../build")));
app.get("/", function (req, res) {
  res.send(templateLanding({
    title: 'Water Table Jordan'
  }));
});
app.get("/table/:section?", function (req, res) {
  res.send(template({
    title: 'Water Table Jordan'
  }));
});
app.get("/controller/:section?", function (req, res) {
  res.send(controllerTemplate({
    title: 'Water Table Jordan'
  }));
});
server.listen(port);

function controllerTemplate(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Water Table Jordan | Controller" : _ref$title,
      _ref$ogURL = _ref.ogURL,
      ogURL = _ref$ogURL === void 0 ? "http://www.watertablejordan.com" : _ref$ogURL;
  return "\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t\t<meta charset=\"utf-8\">\n\t\t\t<meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" name=\"viewport\">\n\t\t\t<title>".concat(title, "</title>\n\t\t\t<meta property=\"og:title\" content=\"").concat(title, "\" />\n\t\t\t<meta property=\"og:url\" content=\"").concat(ogURL, "\" />\n\t\t\t<link rel=\"stylesheet\" href=\"/controller.css\"/>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id=\"controller\"></div>\n\t\t\t<script src=\"/controller.js\"></script>\n\t\t</body>\n\t\t</html>\n\t");
}

function template(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "Water Table Jordan" : _ref2$title,
      _ref2$ogURL = _ref2.ogURL,
      ogURL = _ref2$ogURL === void 0 ? "http://www.watertablejordan.com" : _ref2$ogURL;
  return "\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t\t<meta charset=\"utf-8\">\n\t\t\t<meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" name=\"viewport\">\n\t\t\t<title>".concat(title, "</title>\n\t\t\t<meta property=\"og:title\" content=\"").concat(title, "\" />\n\t\t\t<meta property=\"og:url\" content=\"").concat(ogURL, "\" />\n\t\t\t<link rel=\"stylesheet\" href=\"/table.css\"/>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id=\"table\"></div>\n\t\t\t<script src=\"/table.js\"></script>\n\t\t</body>\n\t\t</html>\n\t");
}