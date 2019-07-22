"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroundWaterText = function GroundWaterText(_ref) {
  var name = _ref.name,
      balance = _ref.balance,
      safeyield = _ref.safeyield,
      extraction = _ref.extraction;
  return _react.default.createElement("div", {
    className: "project-description__text project-description__text--groundwater"
  }, _react.default.createElement("h2", {
    className: "project-name"
  }, name), _react.default.createElement("div", {
    className: "project-details"
  }, _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Total Extraction"), _react.default.createElement("span", {
    className: "value"
  }, extraction, _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3"))), _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Balance"), _react.default.createElement("span", {
    className: "value"
  }, balance, " ", _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3 per year"))), _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Safe yield"), _react.default.createElement("span", {
    className: "value"
  }, safeyield, _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3 per year")))));
};

var _default = GroundWaterText;
exports.default = _default;