'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YoutubeComponent = function YoutubeComponent(_ref) {
	var videoId = _ref.videoId,
	    _ref$autoplay = _ref.autoplay,
	    autoplay = _ref$autoplay === undefined ? 0 : _ref$autoplay,
	    _ref$classes = _ref.classes,
	    classes = _ref$classes === undefined ? '' : _ref$classes,
	    _ref$controls = _ref.controls,
	    controls = _ref$controls === undefined ? 1 : _ref$controls;

	var opts = {
		height: '390',
		width: '640',
		playerVars: {
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
			playsinline: 1,
			autoplay: autoplay,
			controls: controls
		}
	};
	return _react2.default.createElement(_reactYoutube2.default, {
		videoId: videoId,
		id: videoId,
		className: 'video',
		containerClassName: 'youtube-video-wrapper ' + classes,
		opts: opts
	});
};

exports.default = YoutubeComponent;