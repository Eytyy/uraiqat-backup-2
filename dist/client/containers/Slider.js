'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _reducers = require('../reducers');

var _Slide = require('../components/media/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

		_this.onSlideClick = _this.onSlideClick.bind(_this);
		_this.updateSlide = _this.updateSlide.bind(_this);
		return _this;
	}

	_createClass(Slider, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    updateGallery = _props.updateGallery,
			    sliderId = _props.sliderId;

			updateGallery(sliderId, content);
		}
	}, {
		key: 'updateSlide',
		value: function updateSlide(direction) {
			var _props2 = this.props,
			    updateActiveSlide = _props2.updateActiveSlide,
			    sliderId = _props2.sliderId;

			updateActiveSlide(sliderId, direction);
		}
	}, {
		key: 'onSlideClick',
		value: function onSlideClick() {
			var _props3 = this.props,
			    toggleGallery = _props3.toggleGallery,
			    sliderId = _props3.sliderId;

			var openGallery = true;
			toggleGallery(sliderId, openGallery);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    content = _props4.content,
			    classList = _props4.classList,
			    imagesQuery = _props4.imagesQuery,
			    activeSlideIndex = _props4.activeSlideIndex;

			var sliderRailStyle = {
				transform: 'translateX(-' + activeSlideIndex * 100 + '%)'
			};
			if (content.length === 0) {
				return null;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'slider ' + classList },
				_react2.default.createElement(
					'div',
					{ className: 'slider__inner' },
					_react2.default.createElement(
						'div',
						{ style: sliderRailStyle, className: 'slider__slides' },
						content.map(function (_ref, index) {
							var fields = _ref.fields,
							    sys = _ref.sys;
							return _react2.default.createElement(_Slide2.default, { index: index, active: activeSlideIndex, onClick: _this2.onSlideClick, key: sys.id, imagesQuery: imagesQuery, content: fields });
						})
					)
				),
				content.length === 1 ? null : _react2.default.createElement(
					'div',
					{ className: 'slider__controls' },
					_react2.default.createElement(
						'div',
						{ onClick: function onClick() {
								return _this2.updateSlide('prev');
							}, className: 'slider__controls__item slider-btn slider-btn--prev' },
						'<'
					),
					_react2.default.createElement(
						'div',
						{ className: 'slider__controls__item slider__counter' },
						activeSlideIndex + 1,
						'/',
						content.length
					),
					_react2.default.createElement(
						'div',
						{ onClick: function onClick() {
								return _this2.updateSlide('next');
							}, className: 'slider__controls__item slider-btn slider-btn--next' },
						'>'
					)
				)
			);
		}
	}]);

	return Slider;
}(_react.Component);

Slider.defaultProps = {
	isFlexible: false,
	activeSlideIndex: 0
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
	var sliderId = _ref2.sliderId;
	return {
		activeSlideIndex: (0, _reducers.getActiveSlide)(state, sliderId)
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Slider);