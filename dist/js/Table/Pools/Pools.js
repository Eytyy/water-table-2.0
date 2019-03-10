"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _poolsConfig = _interopRequireDefault(require("../../poolsConfig"));

var _PoolComponent = _interopRequireDefault(require("./PoolComponent"));

var _PoolsSvg = _interopRequireDefault(require("./PoolsSvg"));

var _PoolText = _interopRequireDefault(require("./PoolText"));

var _api = require("../../api");

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

var Pools =
/*#__PURE__*/
function (_Component) {
  _inherits(Pools, _Component);

  function Pools() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pools);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pools)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "canvas", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pools", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "width", "1080");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "height", "1540");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ctx: null,
      activePool: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenToIncomingEvents", function () {
      _api.socket.on('controller', function (message) {
        var event = message.event,
            payload = message.payload;

        switch (event) {
          case 'poolClicked':
            _this.updateActivePool(payload);

            break;

          default:
            return;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateActivePool", function (activePool) {
      _this.setState({
        activePool: activePool
      });
    });

    return _this;
  }

  _createClass(Pools, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        ctx: this.canvas.current.getContext('2d')
      });
      this.listenToIncomingEvents();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var activeLayer = _ref.activeLayer;

      if (this.props.activeLayer !== activeLayer) {
        this.setState({
          activePool: undefined
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          au = _this$props.au,
          activeLayer = _this$props.activeLayer;
      return _react.default.createElement("div", {
        className: "layer layer--pools ".concat(activeLayer === 'natural' ? 'layer--is-active' : 'layer--is-hidden')
      }, _react.default.createElement("canvas", {
        id: "pools",
        width: this.width,
        height: this.height,
        ref: this.canvas
      }), this.state.ctx && _poolsConfig.default.entries.map(function (config) {
        return Array.isArray(config.pool) ? config.pool.map(function (_ref2, index) {
          var points = _ref2.points;
          return _react.default.createElement(_PoolComponent.default, {
            key: "".concat(config.id, "--").concat(index),
            ctx: _this2.state.ctx,
            config: config,
            au: au,
            points: points
          });
        }) : _react.default.createElement(_PoolComponent.default, {
          key: config.id,
          ctx: _this2.state.ctx,
          config: config,
          au: au
        });
      }), _react.default.createElement(_PoolsSvg.default, {
        PoolsConfig: _poolsConfig.default,
        activePool: this.state.activePool
      }), _poolsConfig.default.entries.map(function (_ref3) {
        var name = _ref3.name,
            figures = _ref3.figures,
            id = _ref3.id,
            pool = _ref3.pool;
        return Array.isArray(pool) ? _react.default.createElement(_PoolText.default, {
          key: "rx-".concat(id),
          activePool: _this2.state.activePool,
          name: name,
          figures: figures,
          id: id,
          points: pool[0].points
        }) : _react.default.createElement(_PoolText.default, {
          key: "rx-".concat(id),
          activePool: _this2.state.activePool,
          name: name,
          figures: figures,
          id: id,
          points: pool.points
        });
      }));
    }
  }]);

  return Pools;
}(_react.Component);

var _default = Pools;
exports.default = _default;