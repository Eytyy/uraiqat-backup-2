"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../../../actions"));

var _reducers = require("../../../reducers");

var _Main = _interopRequireDefault(require("./Main"));

var _Search = _interopRequireDefault(require("./Search"));

var _Filters = _interopRequireDefault(require("./Filters"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

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

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isVisible: false,
      filtersAreVisible: false,
      searchIsVisible: false
    };
    _this.onMenuToggle = _this.onMenuToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleFilter = _this.toggleFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onToggleFilters = _this.onToggleFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClearFilters = _this.onClearFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFilterClick = _this.onFilterClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSearchClick = _this.onSearchClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearSearch = _this.clearSearch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "toggleFilter",
    value: function toggleFilter() {
      this.setState({
        filtersAreVisible: !this.state.filtersAreVisible,
        searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
      });
    }
  }, {
    key: "onToggleFilters",
    value: function onToggleFilters() {
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
    key: "onClearFilters",
    value: function onClearFilters() {
      var clearAllFilters = this.props.clearAllFilters;
      clearAllFilters();
      this.onToggleFilters();
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
    key: "onMenuToggle",
    value: function onMenuToggle() {
      var isMenuvisible = this.state.isVisible;

      if (!isMenuvisible) {
        isMenuvisible = true;
        document.body.classList.add('mobileMenu-isActive');
      } else {
        isMenuvisible = false;
        document.body.classList.remove('mobileMenu-isActive');
      }

      this.setState({
        isVisible: isMenuvisible
      });
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

        if (this.state.isVisible) {
          this.onMenuToggle();
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
      var navigation = [{
        name: 'Practice',
        link: '/practice',
        glyph: {
          className: 'ind',
          content: '<-'
        },
        size: 'Practice'.length
      }, {
        name: 'Work',
        link: '/work',
        glyph: {
          className: 'ind',
          content: '<-'
        },
        size: 'Work'.length
      }, {
        name: 'The Atelier',
        link: '/atelier',
        glyph: {
          className: 'ind',
          content: '<-'
        },
        size: 'The Atelier'.length
      }, {
        name: 'Contact',
        link: '/contact',
        glyph: {
          className: 'ind',
          content: '<-'
        },
        size: 'Contact'.length
      }];
      var _this$props2 = this.props,
          configs = _this$props2.configs,
          content = _this$props2.content;
      var adjustForMobile = configs.adjustForMobile;
      return _react.default.createElement("div", {
        className: "website-header__inner website-header__inner--mobile wrapper"
      }, _react.default.createElement("div", {
        className: "header__inner__wrapper"
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        className: "link uLink",
        to: "/"
      }, "U"), _react.default.createElement(_PatternChunk.default, {
        adjust: adjustForMobile,
        reserved: 2
      }), _react.default.createElement("span", {
        className: "mobile-menu-toggle-overlay",
        onClick: this.onMenuToggle
      }), this.state.isVisible ? _react.default.createElement("span", {
        className: "mobile-menu-toggle link",
        onClick: this.onMenuToggle
      }, "x") : _react.default.createElement("span", {
        className: "mobile-menu-toggle link",
        onClick: this.onMenuToggle
      }, ":")), _react.default.createElement("div", {
        className: "header__inner__wrapper"
      }, _react.default.createElement(_PatternChunk.default, {
        reserved: 0,
        adjust: adjustForMobile
      })), this.state.isVisible && _react.default.createElement("div", {
        className: "menu"
      }, _react.default.createElement("div", {
        className: "menu__inner"
      }, _react.default.createElement(_Main.default, {
        adjust: adjustForMobile,
        navigation: navigation
      }), _react.default.createElement(_Search.default, {
        adjust: adjustForMobile,
        searchIsVisible: this.state.searchIsVisible,
        onSearchClick: this.onSearchClick,
        onSearchSubmit: this.onSearchSubmit
      }), _react.default.createElement(_Filters.default, {
        onFilterClick: this.onFilterClick,
        onToggle: this.onToggleFilters,
        onClearFilters: this.onClearFilters,
        adjust: adjustForMobile,
        filtersAreVisible: this.state.filtersAreVisible,
        content: content
      }), _react.default.createElement("div", null, _react.default.createElement(_PatternChunk.default, {
        adjust: adjustForMobile,
        reserved: 0
      })), _react.default.createElement("div", null, _react.default.createElement(_PatternChunk.default, {
        adjust: adjustForMobile,
        reserved: 0
      })))));
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    configs: (0, _reducers.getAppConfigs)(state),
    content: (0, _reducers.getFilters)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(Header));

exports.default = _default;