"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VisualizationControls = function VisualizationControls() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
    className: "timeline"
  }, _react.default.createElement("h2", null, "Story & Projections"), _react.default.createElement("button", null, "1960"), _react.default.createElement("button", null, "1970"), _react.default.createElement("button", null, "1980"), _react.default.createElement("button", null, "1990"), _react.default.createElement("button", null, "2000"), _react.default.createElement("button", null, "2010"), _react.default.createElement("button", null, "2019")), _react.default.createElement("section", {
    className: "data"
  }, _react.default.createElement("section", null, _react.default.createElement("h2", null, "Water Levels")), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Population"))));
};

var _default = VisualizationControls;
exports.default = _default;