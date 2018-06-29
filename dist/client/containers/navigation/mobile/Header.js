'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reducers = require('../../../reducers');

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

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
		key: 'render',
		value: function render() {
			var navigation = [{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length }, { name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length }, { name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length }, { name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length }];
			var adjustForMobile = this.props.configs.adjustForMobile;

			return _react2.default.createElement(
				'div',
				{ className: 'website-header__inner website-header__inner--mobile wrapper' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ className: 'link uLink', to: '/' },
						'U'
					),
					_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 2 }),
					_react2.default.createElement('span', { className: 'mobile-menu-toggle-overlay', onClick: this.toggle }),
					this.state.isVisible ? _react2.default.createElement(
						'span',
						{ className: 'mobile-menu-toggle link', onClick: this.toggle },
						'x'
					) : _react2.default.createElement(
						'span',
						{ className: 'mobile-menu-toggle link', onClick: this.toggle },
						':'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0, adjust: adjustForMobile })
				),
				this.state.isVisible ? _react2.default.createElement(
					'div',
					{ className: 'menu' },
					_react2.default.createElement(
						'div',
						{ className: 'menu__inner' },
						_react2.default.createElement(_Main2.default, { adjust: adjustForMobile, navigation: navigation }),
						_react2.default.createElement(_Search2.default, { adjust: adjustForMobile }),
						_react2.default.createElement(_Filter2.default, { adjust: adjustForMobile }),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 0 })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 0 })
						)
					)
				) : null
			);
		}
	}]);

	return HeaderM;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		configs: (0, _reducers.getAppConfigs)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(HeaderM));