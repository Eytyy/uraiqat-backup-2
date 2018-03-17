'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PreviewMediaImage = require('./PreviewMediaImage');

var _PreviewMediaImage2 = _interopRequireDefault(_PreviewMediaImage);

var _PreviewMediaVideo = require('./PreviewMediaVideo');

var _PreviewMediaVideo2 = _interopRequireDefault(_PreviewMediaVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewMedia = function PreviewMedia(_ref) {
	var content = _ref.content;
	var previewImagevideo = content.previewImagevideo;

	return RegExp('image').test(previewImagevideo.fields.file.contentType) ? _react2.default.createElement(_PreviewMediaImage2.default, { content: content }) : _react2.default.createElement(_PreviewMediaVideo2.default, { content: content });
};

exports.default = PreviewMedia;