'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HeaderMMain = require('./HeaderMMain');

var _HeaderMMain2 = _interopRequireDefault(_HeaderMMain);

var _HeaderMSearch = require('./HeaderMSearch');

var _HeaderMSearch2 = _interopRequireDefault(_HeaderMSearch);

var _HeaderMFilter = require('./HeaderMFilter');

var _HeaderMFilter2 = _interopRequireDefault(_HeaderMFilter);

var _PatternChunk = require('../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderM = function (_Component) {
	_inherits(HeaderM, _Component);

	function HeaderM(props) {
		_classCallCheck(this, HeaderM);

		var _this = _possibleConstructorReturn(this, (HeaderM.__proto__ || Object.getPrototypeOf(HeaderM)).call(this, props));

		_this.state = {
			isVisible: false
		};
		_this.toggle = _this.toggle.bind(_this);
		return _this;
	}

	_createClass(HeaderM, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.location.pathname !== this.props.location.pathname && this.state.isVisible) {
				this.toggle();
			}
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			this.setState({
				isVisible: !this.state.isVisible
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'website-header__inner website-header__inner--mobile wrapper' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ className: 'link', to: '/' },
						'U'
					),
					_react2.default.createElement(_PatternChunk2.default, { reserved: 2 }),
					_react2.default.createElement(
						'span',
						{ className: 'mobile-menu-toggle link', to: '/', onClick: this.toggle },
						':'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
				),
				this.state.isVisible ? _react2.default.createElement(
					'div',
					{ className: 'menu' },
					_react2.default.createElement(_HeaderMMain2.default, null),
					_react2.default.createElement(_HeaderMSearch2.default, null),
					_react2.default.createElement(_HeaderMFilter2.default, null)
				) : null
			);
		}
	}]);

	return HeaderM;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(HeaderM);