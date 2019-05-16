"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SupplyText = function SupplyText(_ref) {
  var type = _ref.type,
      name = _ref.name,
      startYear = _ref.startYear,
      upgradeYear = _ref.upgradeYear,
      initialCapactiy = _ref.initialCapactiy,
      upgradedCapacity = _ref.upgradedCapacity,
      city = _ref.city,
      year = _ref.year;
  return _react.default.createElement("div", {
    className: "project-description__text project-description__text--supply--".concat(type)
  }, _react.default.createElement("h2", {
    className: "project-name"
  }, name), type === 'project' && _react.default.createElement(_react.default.Fragment, null, startYear && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Year of Operation: "), _react.default.createElement("span", {
    className: "value"
  }, startYear)), upgradeYear && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Upgraded in: "), _react.default.createElement("span", {
    className: "value"
  }, upgradeYear)), initialCapactiy && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Capacity: "), _react.default.createElement("span", {
    className: "value"
  }, initialCapactiy)), upgradedCapacity && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "New Capacity: "), _react.default.createElement("span", {
    className: "value"
  }, upgradedCapacity))), type === 'utility' && _react.default.createElement(_react.default.Fragment, null, year && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Year of Operation: "), _react.default.createElement("span", {
    className: "value"
  }, year)), city && _react.default.createElement("div", {
    className: "project-description__item"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Location: "), _react.default.createElement("span", {
    className: "value"
  }, city))));
};

var _default = SupplyText;
exports.default = _default;