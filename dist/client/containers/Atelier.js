"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _actions = require("../actions");

var _reducers = require("../reducers");

var _LandingAtelier = _interopRequireDefault(require("../components/landing/LandingAtelier"));

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Atelier =
/*#__PURE__*/
function (_Component) {
  _inherits(Atelier, _Component);

  function Atelier() {
    _classCallCheck(this, Atelier);

    return _possibleConstructorReturn(this, _getPrototypeOf(Atelier).apply(this, arguments));
  }

  _createClass(Atelier, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchAtelierProjects = this.props.fetchAtelierProjects;
      return fetchAtelierProjects();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isFetching = _this$props.isFetching,
          content = _this$props.content;

      if (isFetching && typeof content === 'undefined' || typeof content === 'undefined') {
        return _react.default.createElement(_LoadingPattern.default, null);
      }

      return _react.default.createElement(_LandingAtelier.default, {
        content: content
      });
    }
  }], [{
    key: "fetchData",
    value: function fetchData(store) {
      return store.dispatch((0, _actions.fetchAtelierProjects)());
    }
  }]);

  return Atelier;
}(_react.Component);

Atelier.propTypes = {
  isFetching: _propTypes.default.bool.isRequired,
  fetchAtelierProjects: _propTypes.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: (0, _reducers.isAtelierProjectsFetching)(state),
    content: (0, _reducers.getAtelierProjects)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchAtelierProjects: _actions.fetchAtelierProjects
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Atelier);

exports.default = _default;