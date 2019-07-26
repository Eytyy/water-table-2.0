"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactDom = require("react-dom");

var _Main = _interopRequireDefault(require("./Main"));

var _table = _interopRequireDefault(require("../../styles/table/table.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_Main.default, null)), document.getElementById('table'));