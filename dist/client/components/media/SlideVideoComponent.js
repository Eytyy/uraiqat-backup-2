'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pattern = require('../patterns/Pattern');

var _Pattern2 = _interopRequireDefault(_Pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideVideoComponent = function (_Component) {
	_inherits(SlideVideoComponent, _Component);

	function SlideVideoComponent() {
		_classCallCheck(this, SlideVideoComponent);

		var _this = _possibleConstructorReturn(this, (SlideVideoComponent.__proto__ || Object.getPrototypeOf(SlideVideoComponent)).call(this));

		_this.state = {
			playing: false,
			videoIsLoaded: false
		};
		_this.isStillMounted = true;
		_this.onSlideClick = _this.onSlideClick.bind(_this);
		_this.loadVideo = _this.loadVideo.bind(_this);
		_this.checkVideo = _this.checkVideo.bind(_this);
		return _this;
	}

	_createClass(SlideVideoComponent, [{
		key: 'onSlideClick',
		value: function onSlideClick() {
			var _props = this.props,
			    onClick = _props.onClick,
			    id = _props.id;

			if (this.state.videoIsLoaded) {
				onClick(id);
			}
		}
	}, {
		key: 'checkVideo',
		value: function checkVideo() {
			var _this2 = this;

			var content = this.props.content;

			var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
			return new Promise(function (resolve) {
				_this2.video.addEventListener('loadeddata', function () {
					return resolve({ url: url, status: 'ok' });
				}, false);
				_this2.video.addEventListener('error', function () {
					return resolve({ url: url, status: 'error' });
				}, false);
			});
		}
	}, {
		key: 'loadVideo',
		value: function loadVideo() {
			var _this3 = this;

			this.checkVideo().then(function () {
				if (_this3.isStillMounted) {
					_this3.setState({
						videoIsLoaded: true
					});
				}
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadVideo();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.isStillMounted = false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _props2 = this.props,
			    content = _props2.content,
			    active = _props2.active,
			    sliderName = _props2.sliderName;

			var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
			var allClasses = 'slide slide--video ' + (this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused');
			return _react2.default.createElement(
				'div',
				{ className: allClasses },
				_react2.default.createElement(
					'div',
					{ onClick: this.onSlideClick, className: 'video video__wrapper ' + (this.state.videoIsLoaded ? 'video--loaded' : 'video--loading') },
					_react2.default.createElement(
						'div',
						{ className: 'video-controls' },
						_react2.default.createElement('span', { className: 'video-controls__item video-state' })
					),
					_react2.default.createElement('video', { ref: function ref(el) {
							_this4.video = el;
						}, src: url }),
					_react2.default.createElement(
						'div',
						{ className: 'preview-pattern ' + (this.state.videoIsLoaded ? 'preview-pattern--hidden' : '') },
						_react2.default.createElement(_Pattern2.default, { sliderName: sliderName })
					)
				),
				content.description && _react2.default.createElement(
					'div',
					{ className: 'caption' },
					active + 1,
					': ',
					content.description
				)
			);
		}
	}]);

	return SlideVideoComponent;
}(_react.Component);

exports.default = SlideVideoComponent;