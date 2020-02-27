/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar DIST_DIR = __dirname;\n\nvar server = __webpack_require__(/*! http */ \"http\").createServer(app);\n\nvar io = socket_io__WEBPACK_IMPORTED_MODULE_1___default()(server);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](DIST_DIR));\nio.on(\"connection\", function (client) {\n  client.on(\"join\", function (data) {\n    console.log(data);\n  }); // controller\n\n  client.on(\"controller\", function (data) {\n    client.broadcast.emit(\"controller\", data);\n  });\n  client.on(\"from-table\", function (data) {\n    client.broadcast.emit(\"from-table\", data);\n  });\n});\napp.get(\"/\", function (req, res) {\n  console.log(\"redirecting\");\n  res.redirect(\"/table\");\n});\napp.get(\"/table/:section?\", function (req, res, ext) {\n  res.send(template({\n    title: \"Water Table Jordan\"\n  }));\n});\napp.get(\"/controller/:section?\", function (req, res) {\n  res.send(controllerTemplate({\n    title: \"Water Table Jordan\"\n  }));\n});\nvar PORT = process.env.PORT || 8080;\nserver.listen(PORT);\n\nfunction controllerTemplate(_ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"Water Table Jordan | Controller\" : _ref$title,\n      _ref$ogURL = _ref.ogURL,\n      ogURL = _ref$ogURL === void 0 ? \"http://www.watertablejordan.com\" : _ref$ogURL;\n  return \"\\n\\t\\t<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t<head>\\n\\t\\t\\t<meta charset=\\\"utf-8\\\">\\n\\t\\t\\t<meta content=\\\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\\\" name=\\\"viewport\\\">\\n\\t\\t\\t<title>\".concat(title, \"</title>\\n\\t\\t\\t<meta property=\\\"og:title\\\" content=\\\"\").concat(title, \"\\\" />\\n\\t\\t\\t<meta property=\\\"og:url\\\" content=\\\"\").concat(ogURL, \"\\\" />\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/controller.css\\\"/>\\n\\t\\t</head>\\n\\t\\t<body>\\n\\t\\t\\t<div id=\\\"controller\\\"></div>\\n\\t\\t\\t<script src=\\\"/controller.js\\\"></script>\\n\\t\\t</body>\\n\\t\\t</html>\\n\\t\");\n}\n\nfunction template(_ref2) {\n  var _ref2$title = _ref2.title,\n      title = _ref2$title === void 0 ? \"Water Table Jordan\" : _ref2$title,\n      _ref2$ogURL = _ref2.ogURL,\n      ogURL = _ref2$ogURL === void 0 ? \"http://www.watertablejordan.com\" : _ref2$ogURL;\n  return \"\\n\\t\\t<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t<head>\\n\\t\\t\\t<meta charset=\\\"utf-8\\\">\\n\\t\\t\\t<meta content=\\\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\\\" name=\\\"viewport\\\">\\n\\t\\t\\t<title>\".concat(title, \"</title>\\n\\t\\t\\t<meta property=\\\"og:title\\\" content=\\\"\").concat(title, \"\\\" />\\n\\t\\t\\t<meta property=\\\"og:url\\\" content=\\\"\").concat(ogURL, \"\\\" />\\n\\t\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"/table.css\\\"/>\\n\\t\\t</head>\\n\\t\\t<body>\\n\\t\\t\\t<div id=\\\"table\\\"></div>\\n\\t\\t\\t<script src=\\\"/table.js\\\"></script>\\n\\t\\t</body>\\n\\t\\t</html>\\n\\t\");\n}\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });