'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reducers = require('../reducers');

var _GallerySlide = require('../components/media/GallerySlide');

var _GallerySlide2 = _interopRequireDefault(_GallerySlide);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		_classCallCheck(this, Gallery);

		var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

		_this.updateSlide = _this.updateSlide.bind(_this);
		_this.closeGallery = _this.closeGallery.bind(_this);
		return _this;
	}

	_createClass(Gallery, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var content = nextProps.content;
			var isActive = content.isActive;

			if (isActive) {
				document.body.classList.add('js-gallery-isActive');
			} else {
				document.body.classList.remove('js-gallery-isActive');
			}
		}
	}, {
		key: 'updateSlide',
		value: function updateSlide(direction) {
			var updateActiveSlide = this.props.updateActiveSlide;

			updateActiveSlide(direction);
		}
	}, {
		key: 'closeGallery',
		value: function closeGallery() {
			var toggleGallery = this.props.toggleGallery;

			var openGallery = false;
			toggleGallery(openGallery);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var content = this.props.content;
			var slides = content.slides,
			    isActive = content.isActive,
			    activeSlide = content.activeSlide;

			var visibleSlide = slides[activeSlide];
			if (!isActive) {
				return null;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'gallery' },
				_react2.default.createElement(
					'div',
					{ className: 'gallery__inner' },
					_react2.default.createElement(_GallerySlide2.default, { active: activeSlide, key: visibleSlide.id, content: visibleSlide })
				),
				content.length === 1 ? null : _react2.default.createElement(
					'div',
					{ className: 'slider__controls' },
					_react2.default.createElement(
						'div',
						{ onClick: this.closeGallery, className: 'slider__controls__item slider-btn slider-btn--close' },
						'x'
					),
					_react2.default.createElement(
						'div',
						{ className: 'slider__controls__bottom' },
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
							activeSlide + 1,
							'/',
							slides.length
						),
						_react2.default.createElement(
							'div',
							{ onClick: function onClick() {
									return _this2.updateSlide('next');
								}, className: 'slider__controls__item slider-btn slider-btn--next' },
							'>'
						)
					)
				)
			);
		}
	}]);

	return Gallery;
}(_react.Component);

Gallery.defaultProps = {
	activeSlide: 0
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		content: (0, _reducers.getGalleryContent)(state),
		activeSlide: (0, _reducers.getActiveSlide)(state)
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Gallery);