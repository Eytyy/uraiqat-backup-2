'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VideoComponent = require('../media/VideoComponent');

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostMediaVideo = function PostMediaVideo(_ref) {
	var content = _ref.content;

	var videoClass = 'post-preview__video';
	return _react2.default.createElement(_VideoComponent2.default, { classList: videoClass, content: content });
};

exports.default = PostMediaVideo;