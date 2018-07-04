'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LandingFeatured = require('./LandingFeatured');

var _LandingFeatured2 = _interopRequireDefault(_LandingFeatured);

var _LandingChrono = require('./LandingChrono');

var _LandingChrono2 = _interopRequireDefault(_LandingChrono);

var _BodyText = require('../BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
	_inherits(Landing, _Component);

	function Landing() {
		_classCallCheck(this, Landing);

		var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this));

		_this.state = {
			initialIndex: 1,
			skip: 0
		};
		_this.visible = [];
		_this.adjustContainerHeight = _this.adjustContainerHeight.bind(_this);
		_this.updateUi = _this.updateUi.bind(_this);
		_this.onScroll = (0, _throttle2.default)(_this.onScroll.bind(_this), 500, { leading: false, trailing: true });
		return _this;
	}

	_createClass(Landing, [{
		key: 'updateUi',
		value: function updateUi() {
			this.setState({
				skip: this.state.skip + 1,
				initialIndex: this.state.initialIndex + 1
			});
		}
	}, {
		key: 'onScroll',
		value: function onScroll() {
			if (this.visible === this.contentLength) {
				return;
			}
			if (window.innerHeight * this.state.initialIndex >= this.section.offsetHeight - this.intro.offsetHeight - window.scrollY) {
				requestAnimationFrame(this.updateUi);
			}
		}
	}, {
		key: 'adjustContainerHeight',
		value: function adjustContainerHeight() {
			var featured = document.querySelector('.landing-section--featured');
			var main = document.querySelector('.landing-section--main');
			var introHeight = this.intro.offsetHeight + parseInt(window.getComputedStyle(this.intro).getPropertyValue('margin-bottom'), 10);
			var featuredHeight = featured ? featured.getBoundingClientRect().height : 0;
			var mainHeight = main ? main.getBoundingClientRect().height : 0;

			var newHeight = featuredHeight + mainHeight + introHeight + 'px';
			this.section.style.height = newHeight;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var content = this.props.content;
			var mainContent = content.mainContent,
			    featuredContent = content.featuredContent;


			this.contentLength = mainContent.length + featuredContent.length;

			if (typeof window !== 'undefined') {
				this.adjustContainerHeight();
			}
			window.addEventListener('scroll', this.onScroll);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.adjustContainerHeight();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('scroll', this.onScroll);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    page = _props.page,
			    content = _props.content;
			var intro = content.intro;
			var mainContent = content.mainContent,
			    featuredContent = content.featuredContent;

			var classList = 'landing-page landing-page--' + page + ' main-section';
			var numberOfVisibleItemsPerScroll = page === 'journal' ? 8 : 3;

			this.visibleFeatured = typeof this.state.skip !== 'undefined' ? featuredContent.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll) : featuredContent;
			this.visibleMain = typeof this.state.skip !== 'undefined' ? mainContent.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll - this.visibleFeatured.length) : mainContent;
			this.visible = this.visibleFeatured.length + this.visibleMain.length;

			return _react2.default.createElement(
				'section',
				{ ref: function ref(el) {
						_this2.section = el;
					}, className: classList },
				page === 'atelier' && intro && _react2.default.createElement(
					'div',
					{ ref: function ref(el) {
							_this2.intro = el;
						}, className: 'atelier-landing__top' },
					_react2.default.createElement(
						'div',
						{ className: 'atelier-landing__top__desc' },
						intro.desc && _react2.default.createElement(_BodyText2.default, { content: intro.desc })
					)
				),
				featuredContent && _react2.default.createElement(_LandingFeatured2.default, { page: page, content: this.visibleFeatured }),
				mainContent && _react2.default.createElement(_LandingChrono2.default, { page: page, content: this.visibleMain })
			);
		}
	}]);

	return Landing;
}(_react.Component);

exports.default = Landing;