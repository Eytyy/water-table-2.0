"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesalinationText = function DesalinationText(_ref) {
  var name = _ref.name,
      figures = _ref.figures,
      id = _ref.id,
      position = _ref.position,
      activePlant = _ref.activePlant;
  var style = {
    position: 'absolute',
    top: "".concat(position.y, "px"),
    left: "".concat(position.x + 50 + 180, "px"),
    color: '#FFF',
    opacity: activePlant === id ? '1' : '0'
  };
  return _react.default.createElement("div", {
    style: style,
    className: "resources-text"
  }, _react.default.createElement("h2", {
    className: "resource-text__title"
  }, name), _react.default.createElement("div", {
    className: "resource-text__group"
  }, figures.map(function (_ref2) {
    var label = _ref2.label,
        value = _ref2.value;
    return _react.default.createElement("div", {
      key: "".concat(id, "-").concat(label),
      className: "resource-text__group__item"
    }, _react.default.createElement("div", {
      className: "resource-text__figure-label"
    }, label), _react.default.createElement("div", {
      className: "resource-text__figure-value"
    }, value));
  })));
};

var _default = DesalinationText;
exports.default = _default;