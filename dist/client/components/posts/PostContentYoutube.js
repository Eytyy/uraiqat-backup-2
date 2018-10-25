'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _YoutubeComponent = require('../media/YoutubeComponent');

var _YoutubeComponent2 = _interopRequireDefault(_YoutubeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
	var content = _ref.content;

	if (typeof content === 'undefined') {
		return null;
	}
	return _react2.default.createElement(
		'div',
		{ className: 'post__media post__media--video' },
		_react2.default.createElement(
			'div',
			{ className: 'post__media__video-wrapper' },
			_react2.default.createElement(_YoutubeComponent2.default, { classes: 'post__media__video', autplay: 0, videoId: content.youtubeId })
		)
	);
};

exports.default = PostContentMedia;