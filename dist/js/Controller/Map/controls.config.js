"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NaturalIcon = _interopRequireDefault(require("../../icons/NaturalIcon"));

var _SupplyIcon = _interopRequireDefault(require("../../icons/SupplyIcon"));

var _DamIcon = _interopRequireDefault(require("../../icons/DamIcon"));

var _CanalIcon = _interopRequireDefault(require("../../icons/CanalIcon"));

var _DesalinationIcon = _interopRequireDefault(require("../../icons/DesalinationIcon"));

var _TreatmentPlantIcon = _interopRequireDefault(require("../../icons/TreatmentPlantIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  id: 'default',
  label: 'default',
  icon: function icon() {
    return _react.default.createElement(_NaturalIcon.default, null);
  },
  title: 'Natural Water Resources'
}, {
  id: 'supply',
  label: 'supply',
  icon: function icon() {
    return _react.default.createElement(_SupplyIcon.default, null);
  },
  title: 'Utilities &amp; Water Supply Projects'
}, {
  id: 'waste',
  label: 'waste',
  icon: function icon() {
    return _react.default.createElement(_TreatmentPlantIcon.default, null);
  },
  title: 'Wastewater Treatment Plants'
}, {
  id: 'desalination',
  label: 'desalination',
  icon: function icon() {
    return _react.default.createElement(_DesalinationIcon.default, null);
  },
  title: 'Water Desalination Stations'
}, {
  id: 'dams',
  label: 'dams',
  icon: function icon() {
    return _react.default.createElement(_DamIcon.default, null);
  },
  title: 'Dams'
},, {
  id: 'canal',
  label: 'canal',
  icon: function icon() {
    return _react.default.createElement(_CanalIcon.default, null);
  },
  title: 'King Abdullah Canal'
}];
exports.default = _default;