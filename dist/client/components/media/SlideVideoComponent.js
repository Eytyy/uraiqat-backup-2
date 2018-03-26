'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
			playing: false
		};
		_this.playVideo = _this.playVideo.bind(_this);
		_this.stopVideo = _this.stopVideo.bind(_this);
		_this.toggleVideo = _this.toggleVideo.bind(_this);
		_this.onSlideClick = _this.onSlideClick.bind(_this);
		return _this;
	}

	_createClass(SlideVideoComponent, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.activeSlide !== nextProps.index && this.state.playing) {
				this.stopVideo();
			}
		}
	}, {
		key: 'toggleVideo',
		value: function toggleVideo() {
			if (this.state.playing) {
				this.stopVideo();
			} else {
				this.playVideo();
			}
		}
	}, {
		key: 'playVideo',
		value: function playVideo() {
			this.video.play();
			this.setState({
				playing: true
			});
		}
	}, {
		key: 'stopVideo',
		value: function stopVideo() {
			this.video.pause();
			this.setState({
				playing: false
			});
		}
	}, {
		key: 'onSlideClick',
		value: function onSlideClick() {
			var _props = this.props,
			    onClick = _props.onClick,
			    id = _props.id;

			this.stopVideo();
			onClick(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    content = _props2.content,
			    active = _props2.active;

			var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
			var allClasses = 'slide slide--video ' + (this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused');
			return _react2.default.createElement(
				'div',
				{ className: allClasses },
				_react2.default.createElement(
					'div',
					{ className: 'video video__wrapper' },
					_react2.default.createElement(
						'div',
						{ className: 'slider__inner-controls slider__inner-controls--video' },
						_react2.default.createElement(
							'span',
							{ onClick: this.onSlideClick, className: 'video-controls__item open-gallery' },
							'+ enlarge ',
							' / '
						),
						_react2.default.createElement(
							'span',
							{ onClick: this.toggleVideo, className: 'video-controls__item video-btn' },
							this.state.playing ? _react2.default.createElement(
								'span',
								{ className: 'video-btn__txt' },
								'pause'
							) : _react2.default.createElement(
								'span',
								{ className: 'video-btn__txt' },
								'play'
							)
						)
					),
					_react2.default.createElement('video', { ref: function ref(el) {
							_this2.video = el;
						}, src: url })
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