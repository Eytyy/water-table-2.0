"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _d = require("d3");

var _api = require("../../../api");

var _population = _interopRequireDefault(require("../../../../data/population.1"));

var _PopulationCircle = _interopRequireDefault(require("./PopulationCircle"));

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

var PopulationVisulization =
/*#__PURE__*/
function (_Component) {
  _inherits(PopulationVisulization, _Component);

  function PopulationVisulization() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PopulationVisulization);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopulationVisulization)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "width", 1080);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "height", 1300);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "canvas", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ctx", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "next_year_population", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previous_year_population", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reverse", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "population_data", _population.default);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nodesRangeCount", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rendered", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "radiusRangeSize", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "current_radius", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "next_radius", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rf", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stop", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "frameCount", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fps", 10);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fpsInterval", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startTime", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "now", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "then", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elapsed", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allPopulation", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeYear: 1960
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentPopulation", function () {
      var index = _this.population_data.findIndex(function (_ref) {
        var year = _ref.year;
        return year === _this.next_year_population;
      });

      return {
        count: _this.population_data[index].population,
        index: index
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNodesRangeCount", function () {
      var MinPopulation = _population.default[0].population;
      var MaxPopulation = _population.default[_population.default.length - 1].population;
      _this.nodesRangeCount = (0, _d.scaleLinear)().domain([MinPopulation, MaxPopulation]).range([20, 100]).clamp(true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getNodesRangeCount", function (num) {
      return Math.ceil(_this.nodesRangeCount(num));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRadiusRangeSize", function () {
      var populationLength = _population.default.length;
      _this.radiusRangeSize = (0, _d.scaleLinear)().domain([0, populationLength]).range([30, 200]).clamp(true);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupPopulationCircles", function () {
      var max = _this.getNodesRangeCount(_population.default[_population.default.length - 1].population);

      for (var i = 0; i < max; i++) {
        var obj = new _PopulationCircle.default({
          width: _this.width,
          height: _this.height,
          ctx: _this.ctx
        });

        _this.allPopulation.push(obj);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drawPopulation", function () {
      var ctx = _this.ctx || _this.canvas.current.getContext('2d');

      ctx.clearRect(0, 0, _this.width, _this.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';

      var radius = _this.getRadius();

      for (var i = 0; i < _this.rendered; i++) {
        _this.allPopulation[i].update(radius);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function () {
      _this.raf = requestAnimationFrame(_this.update);
      _this.now = Date.now();
      _this.elapsed = _this.now - _this.then;

      if (_this.elapsed > _this.fpsInterval) {
        _this.then = _this.now - _this.elapsed % _this.fpsInterval;

        _this.drawPopulation();

        if (!_this.reverse) {
          if (_this.rendered < _this.next_year_population) {
            _this.rendered += 1;
          } else if (_this.current_radius >= _this.next_radius) {
            _this.reset();
          }
        }

        if (_this.reverse) {
          if (_this.rendered > _this.next_year_population) {
            _this.rendered -= 1;
          } else if (_this.current_radius <= _this.next_radius) {
            _this.reset();
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moveCircles", function () {
      _this.raf = requestAnimationFrame(_this.moveCircles);
      _this.now = Date.now();
      _this.elapsed = _this.now - _this.then;

      if (_this.elapsed > _this.fpsInterval) {
        _this.then = _this.now - _this.elapsed % _this.fpsInterval;

        _this.ctx.clearRect(0, 0, _this.width, _this.height);

        for (var i = 0; i < _this.rendered; i++) {
          _this.allPopulation[i].move();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startIdleAnimation", function () {
      _this.fpsInterval = 1000 / _this.fps;
      _this.then = Date.now();
      _this.startTime = _this.then;

      _this.moveCircles();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopRunningAnimation", function () {
      cancelAnimationFrame(_this.raf);
      _this.raf = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      _this.stopRunningAnimation();

      _this.rendered = _this.previous_year_population = _this.next_year_population;

      _this.startIdleAnimation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateActiveYear", function (payload) {
      // cancel running animation
      cancelAnimationFrame(_this.raf);
      _this.raf = null;

      _this.setState({
        activeYear: payload
      });

      var yearIndex = _population.default.findIndex(function (_ref2) {
        var year = _ref2.year;
        return year === parseInt(payload, 10);
      });

      var nextYearPopulation = _this.population_data[yearIndex].population;

      var nextRange = _this.getNodesRangeCount(nextYearPopulation);

      _this.next_year_population = nextRange;
      _this.reverse = _this.previous_year_population > nextRange ? true : false;
      _this.next_radius = _this.rendered === 0 ? _this.radiusRangeSize(yearIndex) : _this.reverse ? _this.radiusRangeSize(yearIndex - 1) : _this.radiusRangeSize(yearIndex + 1);
      _this.rendered = _this.previous_year_population;
      _this.fpsInterval = 1000 / _this.fps;
      _this.then = Date.now();
      _this.startTime = _this.then;

      _this.update();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenToIncomingEvents", function () {
      _api.socket.on('controller', function (message) {
        var event = message.event,
            payload = message.payload;

        switch (event) {
          case 'yearClicked':
            _this.updateActiveYear(payload);

            break;

          default:
            return;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopulation", function () {
      return (0, _d.format)(",.0f")(_this.population_data.find(function (_ref3) {
        var year = _ref3.year;
        return year === parseInt(_this.state.activeYear, 10);
      }).population).replace(/,/g, ' ');
    });

    return _this;
  }

  _createClass(PopulationVisulization, [{
    key: "getRadius",
    value: function getRadius() {
      var r = 0;

      if (this.reverse) {
        this.current_radius -= 1;
        r = this.current_radius <= this.next_radius ? this.next_radius : this.current_radius;
      } else {
        this.current_radius += 1;
        r = this.current_radius >= this.next_radius ? this.next_radius : this.current_radius;
      }

      this.current_radius = Math.ceil(r);
      return this.current_radius;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ctx = this.canvas.current.getContext('2d');
      this.listenToIncomingEvents();
      this.setNodesRangeCount();
      this.setRadiusRangeSize();
      this.setupPopulationCircles();
      this.rendered = this.previous_year_population = 0;
      this.next_year_population = this.getNodesRangeCount(_population.default[0].population);
      this.drawPopulation();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopRunningAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "population__visualization",
        className: "visualization-wrapper"
      }, _react.default.createElement("canvas", {
        className: "visualization",
        width: this.width,
        height: this.height,
        ref: this.canvas
      }), _react.default.createElement("div", {
        className: "visualization__content"
      }, _react.default.createElement("h2", {
        className: "visualization__content__label"
      }, "Population"), _react.default.createElement("div", {
        className: "visualization__content__data"
      }, this.getPopulation())));
    }
  }]);

  return PopulationVisulization;
}(_react.Component);

var _default = PopulationVisulization;
exports.default = _default;