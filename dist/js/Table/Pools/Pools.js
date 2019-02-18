"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Pool = _interopRequireDefault(require("./Pool"));

var _config = require("./config");

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ctx", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pools", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "width", "1080");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "height", "1920");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupPools", function (ctx, au) {
      _this.pools.DeadSeaTop = new _Pool.default(_config.DeadSeaTopConfig);
      _this.pools.DeadSeaBottom = new _Pool.default(_config.DeadSeaBottomConfig);
      _this.pools.Azraq = new _Pool.default(_config.AzraqConfig);
      _this.pools.Jafar = new _Pool.default(_config.JafarConfig);
      _this.pools.Aqaba = new _Pool.default(_config.AqabaConfig);
      _this.pools.Tabariah = new _Pool.default(_config.TabariahConfig);
      Object.keys(_this.pools).map(function (pool) {
        _this.pools[pool].init({
          ctx: ctx,
          au: au
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePools", function (ctx, au) {
      ctx.clearRect(0, 0, _this.width, _this.height);
      Object.keys(_this.pools).map(function (pool) {
        _this.pools[pool].update({
          ctx: ctx,
          au: au
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCurrentStop", function (ctx, au) {
      Object.keys(_this.pools).map(function (pool) {
        _this.pools[pool].updateCurrentStop();
      });
    });

    return _this;
  }

  _createClass(Pools, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var au = this.props.au;
      this.ctx = this.canvas.current.getContext('2d');
      this.setupPools(this.ctx, au);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var au = _ref.au;

      if (au !== this.props.au) {
        this.updatePools(this.ctx, au);

        if (au === 0) {
          this.updateCurrentStop(this.ctx, this.props.au);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("canvas", {
        id: "pools",
        width: this.width,
        height: this.height,
        ref: this.canvas
      });
    }
  }]);

  return Pools;
}(_react.Component);

var _default = Pools;
exports.default = _default;