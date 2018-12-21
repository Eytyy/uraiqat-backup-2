"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reducers = require("../../../reducers");

var actions = _interopRequireWildcard(require("../../../actions"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

var _FiltersToggle = _interopRequireDefault(require("./FiltersToggle"));

var _Search = _interopRequireDefault(require("./Search"));

var _FiltersList = _interopRequireDefault(require("./FiltersList"));

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

var FilterSearchWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(FilterSearchWrapper, _Component);

  function FilterSearchWrapper() {
    var _this;

    _classCallCheck(this, FilterSearchWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchWrapper).call(this));
    _this.state = {
      filtersAreVisible: false,
      searchIsVisible: false
    };
    _this.onToggleClick = _this.onToggleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFilterClick = _this.onFilterClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSearchClick = _this.onSearchClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearSearch = _this.clearSearch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClearFilters = _this.onClearFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FilterSearchWrapper, [{
    key: "toggleFilter",
    value: function toggleFilter() {
      this.setState({
        filtersAreVisible: !this.state.filtersAreVisible,
        searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
      });
    }
  }, {
    key: "onToggleClick",
    value: function onToggleClick() {
      var _this2 = this;

      var _this$props = this.props,
          fetchFilters = _this$props.fetchFilters,
          content = _this$props.content;

      if (!this.state.filtersAreVisible) {
        if (content.length === 0) {
          fetchFilters().then(function () {
            _this2.toggleFilter();
          });
        } else {
          this.toggleFilter();
        }
      } else {
        this.toggleFilter();
      }
    }
  }, {
    key: "onFilterClick",
    value: function onFilterClick(id) {
      var updateFilter = this.props.updateFilter;
      updateFilter(id);
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      if (this.search) {
        this.search.value = '';
      }
    }
  }, {
    key: "onSearchClick",
    value: function onSearchClick() {
      this.setState({
        searchIsVisible: !this.state.searchIsVisible,
        filtersAreVisible: this.state.filtersAreVisible ? !this.state.filtersAreVisible : this.state.filtersAreVisible
      });
    }
  }, {
    key: "onSearchSubmit",
    value: function onSearchSubmit(event) {
      var fetchSearchResults = this.props.fetchSearchResults;
      var keyword = new FormData(event.target).get('keyword');
      fetchSearchResults(keyword);
      event.preventDefault();
      this.props.history.push("/search?keyword=".concat(keyword));
      this.clearSearch();
      this.onSearchClick();
      return false;
    }
  }, {
    key: "onClearFilters",
    value: function onClearFilters() {
      var clearAllFilters = this.props.clearAllFilters;
      clearAllFilters();
      this.toggleFilter();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        var filterState = this.state.filtersAreVisible;
        var searchState = this.state.searchIsVisible;

        if (this.state.filtersAreVisible) {
          filterState = !this.state.filtersAreVisible;
        }

        if (this.state.searchIsVisible) {
          searchState = !this.state.searchIsVisible;
        }

        this.setState({
          searchIsVisible: searchState,
          filtersAreVisible: filterState
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          location = _this$props2.location;
      var fixedStart = window.innerWidth >= 1280 ? 11 : 8;
      var config = {
        separator: '/',
        filter: {
          name: 'Filter',
          glyph: {
            className: 'ind',
            content: '+'
          },
          spacesBefore: 3,
          spacesAfter: 1
        },
        search: {
          name: 'Search',
          glyph: {
            className: 'ind',
            content: ':'
          },
          searchInputSize: 32,
          spacesBefore: 3,
          spacesAfter: 1
        }
      };
      var reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize; // filters don't have a reserved space if you're not on the home page

      var isFront = location.pathname === '/';
      var reservedFilterSize = isFront ? config.filter.name.length + config.filter.glyph.content.length + config.separator.length : 0;
      var reservedEmptySpaces = isFront ? config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore : config.search.spacesAfter + config.search.spacesBefore;
      var totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + fixedStart;
      var activeFiltersLength = content.filter(function (_ref) {
        var active = _ref.active;
        return active;
      }).length;
      return _react.default.createElement("div", {
        className: "header--desktop__main"
      }, _react.default.createElement(_PatternChunk.default, {
        fixed: fixedStart
      }), reservedFilterSize !== 0 && _react.default.createElement(_FiltersToggle.default, {
        filtersAreVisible: this.state.filtersAreVisible,
        onToggle: this.onToggleClick,
        config: config.filter
      }), _react.default.createElement(_Search.default, {
        searchIsVisible: this.state.searchIsVisible,
        onSearchClick: this.onSearchClick,
        onSearchSubmit: this.onSearchSubmit,
        config: config.search,
        isFront: isFront
      }), _react.default.createElement(_PatternChunk.default, {
        reserved: totalReservedSpaces
      }), _react.default.createElement(_FiltersList.default, {
        onFilterClick: this.onFilterClick,
        content: content,
        isVisible: this.state.filtersAreVisible
      }), activeFiltersLength && this.state.filtersAreVisible ? _react.default.createElement("div", null, _react.default.createElement(_PatternChunk.default, {
        fixed: fixedStart
      }), _react.default.createElement("span", {
        className: "ws"
      }, "-"), _react.default.createElement("span", {
        className: "ws"
      }, "-"), _react.default.createElement("span", {
        className: "ws"
      }, "-"), _react.default.createElement("span", {
        onClick: this.onClearFilters,
        className: "link"
      }, "clear"), _react.default.createElement("span", {
        className: "ws"
      }, "-"), _react.default.createElement("span", {
        className: "ws"
      }, "-"), _react.default.createElement(_PatternChunk.default, {
        reserved: fixedStart + 'clear'.length + 5
      })) : null);
    }
  }]);

  return FilterSearchWrapper;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    content: (0, _reducers.getFilters)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(FilterSearchWrapper));

exports.default = _default;