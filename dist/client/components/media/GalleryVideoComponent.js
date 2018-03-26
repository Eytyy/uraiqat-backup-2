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

var VideoComponent = function (_Component) {
	_inherits(VideoComponent, _Component);

	function VideoComponent() {
		_classCallCheck(this, VideoComponent);

		var _this = _possibleConstructorReturn(this, (VideoComponent.__proto__ || Object.getPrototypeOf(VideoComponent)).call(this));

		_this.state = {
			playing: false
		};
		_this.playVideo = _this.playVideo.bind(_this);
		_this.stopVideo = _this.stopVideo.bind(_this);
		_this.toggleVideo = _this.toggleVideo.bind(_this);
		return _this;
	}

	_createClass(VideoComponent, [{
		key: 'toggleVideo',
		value: function toggleVideo() {
			if (this.state.playing) {
				this.stopVideo();
			} else {
				this.playVideo();
			}
			this.setState({
				playing: !this.state.playing
			});
		}
	}, {
		key: 'playVideo',
		value: function playVideo() {
			this.video.play();
		}
	}, {
		key: 'stopVideo',
		value: function stopVideo() {
			this.video.pause();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    content = _props.content,
			    classList = _props.classList,
			    active = _props.active;

			var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
			var allClasses = 'slide slide--video video gallery__slide ' + classList + ' ' + (this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused');
			return _react2.default.createElement(
				'div',
				{ onClick: this.toggleVideo, className: allClasses },
				_react2.default.createElement(
					'div',
					{ className: 'video__wrapper' },
					_react2.default.createElement(
						'div',
						{ className: 'video-controls' },
						_react2.default.createElement('span', { className: 'video-controls__item video-state' })
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

	return VideoComponent;
}(_react.Component);

exports.default = VideoComponent;