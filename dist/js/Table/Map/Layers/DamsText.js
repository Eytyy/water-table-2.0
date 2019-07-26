"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DamDescription = function DamDescription(_ref) {
  var name = _ref.name,
      yearConstructed = _ref.yearConstructed,
      yearRaised = _ref.yearRaised,
      capacity = _ref.capacity;
  return _react.default.createElement("div", {
    className: "project-description__text project-description__text--dams"
  }, _react.default.createElement("h2", {
    className: "project-name"
  }, name), _react.default.createElement("div", {
    className: "project-details"
  }, yearConstructed && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Year"), _react.default.createElement("span", {
    className: "value"
  }, yearConstructed)), yearRaised && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Raised"), _react.default.createElement("span", {
    className: "value"
  }, yearRaised)), capacity && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Capacity: "), _react.default.createElement("span", {
    className: "value"
  }, capacity, _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3")))));
};

var _default = DamDescription;
exports.default = _default;