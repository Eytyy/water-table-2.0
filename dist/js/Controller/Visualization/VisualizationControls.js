"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("../../api");

var _population = _interopRequireDefault(require("../../../data/population.1"));

var _d = require("d3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VisualizationControls =
/*#__PURE__*/
function (_Component) {
  _inherits(VisualizationControls, _Component);

  function VisualizationControls() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VisualizationControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VisualizationControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeYear: '1960',
      intro: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "years", ['1960', '1970', '1980', '1990', '2000', '2010', '2019']);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onYearClick", function (e) {
      var nextYear = e.currentTarget.id;

      if (_this.state.intro) {
        _this.toggleIntro();
      }

      _this.setState({
        activeYear: nextYear
      });

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'yearClicked',
        payload: nextYear
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleIntro", function () {
      var intro = !_this.state.intro;

      _this.setState({
        intro: intro
      });

      (0, _api.broadcastEvent)({
        source: 'controller',
        event: 'toggleIntro',
        payload: intro
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onIntroClick", function () {
      if (_this.state.intro) {
        return;
      }

      _this.toggleIntro();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopulation", function () {
      return (0, _d.format)(",.0f")(_population.default.find(function (_ref) {
        var year = _ref.year;
        return year === parseInt(_this.state.activeYear, 10);
      }).population).replace(/,/g, ' ');
    });

    return _this;
  }

  _createClass(VisualizationControls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "controller controller__data-viz"
      }, _react.default.createElement("section", {
        className: "controller__section controller__section--intro"
      }, _react.default.createElement("button", {
        className: "intro__btn ".concat(this.state.intro ? 'controller__btn controller__btn--active' : 'controller__btn'),
        onClick: this.onIntroClick
      }, 'Intro')), _react.default.createElement("section", {
        className: "controller__section controller__section--timeline"
      }, _react.default.createElement("h2", {
        className: "controller__sub-title"
      }, "Story & Projections"), _react.default.createElement("div", {
        className: "timeline__controls"
      }, this.years.map(function (year) {
        return _react.default.createElement("button", {
          id: year,
          key: year,
          className: "timeline__time ".concat(!_this2.state.intro && _this2.state.activeYear === year ? 'controller__btn controller__btn--active' : 'controller__btn'),
          onClick: _this2.onYearClick
        }, year);
      }))), _react.default.createElement("section", {
        className: "controller__section controller__section--data"
      }, _react.default.createElement("div", {
        className: "controller__section--data__item"
      }, _react.default.createElement("h2", {
        className: "controller__sub-title"
      }, "Water Levels"), _react.default.createElement("div", {
        className: "data__item__content"
      }, _react.default.createElement("span", {
        className: "data__item__content__value"
      }, "--"), _react.default.createElement("span", {
        className: "data__item__content__label"
      }, " mcm"))), _react.default.createElement("div", {
        className: "controller__section--data__item data__population"
      }, _react.default.createElement("h2", {
        className: "controller__sub-title"
      }, "Population"), _react.default.createElement("div", {
        className: "data__item__content"
      }, _react.default.createElement("span", {
        className: "data__item__content__value"
      }, this.state.intro ? '--' : this.getPopulation())))));
    }
  }]);

  return VisualizationControls;
}(_react.Component);

var _default = VisualizationControls;
exports.default = _default;