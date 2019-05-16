"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactDom = require("react-dom");

var _Controller = _interopRequireDefault(require("./Controller"));

var _controller = _interopRequireDefault(require("../../styles/controller/controller.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_Controller.default, null)), document.getElementById('controller'));