"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapControlButton = function MapControlButton(_ref) {
  var activeLayer = _ref.activeLayer,
      label = _ref.label,
      title = _ref.title,
      renderIcon = _ref.renderIcon,
      _onClick = _ref.onClick,
      parent = _ref.parent,
      children = _ref.children,
      defaultChild = _ref.defaultChild;

  var isActive = function isActive() {
    if (activeLayer === label || parent && parent === activeLayer && defaultChild) {
      return true;
    } else if (children) {
      var isParentOfActiveSub = children.indexOf(activeLayer) >= 0;
      return isParentOfActiveSub;
    }

    return false;
  };

  return _react.default.createElement("div", {
    className: "btn-group ".concat(isActive() ? 'is-active' : ''),
    onClick: function onClick() {
      _onClick(label);
    }
  }, _react.default.createElement("i", {
    className: "btn-icon icon--".concat(label)
  }, renderIcon()), _react.default.createElement("span", {
    className: "btn-label"
  }, title));
};

var _default = MapControlButton;
exports.default = _default;