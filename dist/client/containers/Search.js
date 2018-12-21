"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var actions = _interopRequireWildcard(require("../actions"));

var _reducers = require("../reducers");

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

var _SearchPreview = _interopRequireDefault(require("../components/SearchPreview"));

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

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          isFetching = _this$props.isFetching,
          keyword = _this$props.keyword;

      if (isFetching && content.length === 0) {
        return _react.default.createElement("div", {
          className: "loader"
        }, _react.default.createElement(_LoadingPattern.default, null));
      }

      var sortedContent = content.sort(function (a, b) {
        if (a.fields.date && b.fields.date) {
          return new Date(b.fields.date) - new Date(a.fields.date);
        } else if (a.fields.year && b.fields.year) {
          return parseInt(b.fields.year, 10) - parseInt(a.fields.year, 10);
        }

        var comp1 = a.fields.year ? parseInt(a.fields.year, 10) : new Date(a.fields.date).getFullYear();
        var comp2 = b.fields.year ? parseInt(b.fields.year, 10) : new Date(b.fields.date).getFullYear();
        return comp2 - comp1;
      });
      return _react.default.createElement("section", {
        className: "landing-section landing-section--featured"
      }, _react.default.createElement("h1", {
        className: "search-results-title"
      }, content.length === 0 ? "Couldn't find content with the keyword [".concat(keyword, "]") : "Search results for [".concat(keyword, "]")), _react.default.createElement("div", {
        className: "search-results"
      }, sortedContent.map(function (_ref) {
        var sys = _ref.sys,
            fields = _ref.fields;
        return _react.default.createElement(_SearchPreview.default, {
          content: fields,
          type: sys.contentType.sys.id,
          id: sys.id,
          key: sys.id
        });
      })));
    }
  }]);

  return Search;
}(_react.Component);

Search.propTypes = {
  isFetching: _propTypes.default.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var location = _ref2.location;
  var query = typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search) : '';
  var keyword = typeof URLSearchParams !== 'undefined' ? query.get('keyword') : '';
  return {
    isFetching: (0, _reducers.isSearchFetching)(state),
    content: (0, _reducers.getSearchResults)(state, keyword),
    keyword: keyword
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(Search));

exports.default = _default;