"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WasteWaterText = function WasteWaterText(_ref) {
  var name = _ref.name,
      startYear = _ref.startYear,
      upgradeYear = _ref.upgradeYear,
      designFlow = _ref.designFlow;
  return _react.default.createElement("div", {
    className: "project-description__text project-description__text--wastewater"
  }, _react.default.createElement("h2", {
    className: "project-name"
  }, name), _react.default.createElement("div", {
    className: "project-details"
  }, startYear && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Year"), _react.default.createElement("span", {
    className: "value"
  }, startYear)), upgradeYear.length > 0 && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Upgraded"), _react.default.createElement("span", {
    className: "value"
  }, upgradeYear.map(function (year, i) {
    return i === upgradeYear.length - 1 ? "".concat(year, ".") : "".concat(year, ", ");
  }))), designFlow && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Design Flow"), _react.default.createElement("span", {
    className: "value"
  }, designFlow, _react.default.createElement("span", {
    className: "unit"
  }, "m\xB3 per day")))));
};

var _default = WasteWaterText;
exports.default = _default;