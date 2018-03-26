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

var _helprs = require('./helprs');

var _Slide = require('../components/media/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatternHelpers = function PatternHelpers() {
	var containerSize = {
		w: 882,
		h: 576
	};
	var windowDimensions = {
		w: (0, _helprs.getWindowSize)().width,
		h: (0, _helprs.getWindowSize)().height
	};

	var font = {};

	if (windowDimensions.w >= 1920 && windowDimensions.h >= 1080) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else if (windowDimensions.w > 380 && windowDimensions.h > 900) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else {
		font.characterWidth = 14;
		font.characterHeight = 32;
	}

	containerSize.w = containerSize.w - font.characterWidth * 2;
	containerSize.h = containerSize.h - font.characterHeight;

	var x = Math.floor(containerSize.w / font.characterWidth);
	var y = Math.floor(containerSize.h / font.characterHeight);

	return {
		getWindowDimensions: function getWindowDimensions() {
			return windowDimensions;
		},
		getContainerSize: function getContainerSize() {
			return containerSize;
		},
		getNoOfChars: function getNoOfChars() {
			return {
				x: x,
				y: y
			};
		}
	};
};

var PatternLine = function PatternLine(_ref) {
	var noOfChars = _ref.noOfChars;

	var count = 1;
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomGlyph() {
		var glyphs = ['-', '-', '/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/', '-', '-', '-', '/', '-', '\\', '-'];
		var index = getRandomIntInclusive(1, glyphs.length - 2);
		var glyph = glyphs[index];
		return glyph;
	}
	var generatePattern = function generatePattern() {
		var pattern = '';
		for (count; count <= noOfChars; count++) {
			pattern += getRandomGlyph();
		}
		return pattern;
	};
	return _react2.default.createElement(
		'div',
		{ className: 'patternline' },
		generatePattern()
	);
};

var Pattern = function Pattern() {
	if (typeof window === 'undefined') {
		return null;
	}
	var helpers = PatternHelpers();

	var numberOfLines = helpers.getNoOfChars();
	var fakeArray = Array(numberOfLines.y).fill('pl');

	return _react2.default.createElement(
		'div',
		{ className: 'pattern pattern--slider' },
		fakeArray.map(function (item, index) {
			return _react2.default.createElement(PatternLine, { key: 'pl-' + index, noOfChars: numberOfLines.x });
		})
	);
};

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

		_this.state = {
			allImagesAreLoaded: false,
			clientLoaded: false
		};
		_this.onSlideClick = _this.onSlideClick.bind(_this);
		_this.updateSlide = _this.updateSlide.bind(_this);
		return _this;
	}

	_createClass(Slider, [{
		key: 'checkImage',
		value: function checkImage(path) {
			return new Promise(function (resolve) {
				var img = new Image();
				var imgSrc = path.fields.file.url;
				img.onload = function () {
					console.log('loaded', imgSrc);
					return resolve({ imgSrc: imgSrc, status: 'ok' });
				};
				img.onerror = function () {
					return resolve({ imgSrc: imgSrc, status: 'error' });
				};
				img.src = imgSrc;
			});
		}
	}, {
		key: 'loadImages',
		value: function loadImages() {
			var _this2 = this;

			var content = this.props.content;

			Promise.all(content.map(this.checkImage)).then(function () {
				_this2.setState({
					allImagesAreLoaded: true
				});
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    updateGallery = _props.updateGallery,
			    sliderId = _props.sliderId;

			this.setState({
				clientLoaded: true
			});
			this.loadImages();
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
			var _this3 = this;

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
			if (!this.state.allImagesAreLoaded) {
				return _react2.default.createElement(Pattern, null);
			}
			return _react2.default.createElement(
				'div',
				{ ref: function ref(el) {
						_this3.slider = el;
					}, className: 'slider ' + classList },
				_react2.default.createElement(
					'div',
					{ className: 'slider__inner' },
					_react2.default.createElement(
						'div',
						{ style: sliderRailStyle, className: 'slider__slides' },
						content.map(function (_ref2, index) {
							var fields = _ref2.fields,
							    sys = _ref2.sys;
							return _react2.default.createElement(_Slide2.default, { index: index, active: activeSlideIndex, onClick: _this3.onSlideClick, key: sys.id, imagesQuery: imagesQuery, content: fields });
						})
					)
				),
				content.length === 1 ? null : _react2.default.createElement(
					'div',
					{ className: 'slider__controls' },
					_react2.default.createElement(
						'div',
						{ onClick: function onClick() {
								return _this3.updateSlide('prev');
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
								return _this3.updateSlide('next');
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

var mapStateToProps = function mapStateToProps(state, _ref3) {
	var sliderId = _ref3.sliderId;
	return {
		activeSlideIndex: (0, _reducers.getActiveSlide)(state, sliderId)
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Slider);