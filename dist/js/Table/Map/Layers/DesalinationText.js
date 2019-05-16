"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesalinationText = function DesalinationText(_ref) {
  var name = _ref.name,
      year = _ref.year,
      capacity = _ref.capacity;
  return _react.default.createElement("div", {
    className: "project-description__text project-description__text--desalination"
  }, _react.default.createElement("h2", {
    className: "project-name"
  }, name), year && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Year of Construction: "), _react.default.createElement("span", {
    className: "value"
  }, year)), capacity && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Capacity: "), _react.default.createElement("span", {
    className: "value"
  }, capacity, " ", _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3 per year"))));
};

var _default = DesalinationText;
exports.default = _default;