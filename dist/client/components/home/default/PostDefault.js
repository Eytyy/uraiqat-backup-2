'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostDefaultText = require('./PostDefaultText');

var _PostDefaultText2 = _interopRequireDefault(_PostDefaultText);

var _PostDefaultMedia = require('./PostDefaultMedia');

var _PostDefaultMedia2 = _interopRequireDefault(_PostDefaultMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDefault = function PostDefault(_ref) {
	var content = _ref.content;
	var previewThumbnail = content.previewThumbnail;

	return typeof previewThumbnail !== 'undefined' ? _react2.default.createElement(_PostDefaultMedia2.default, { content: content }) : _react2.default.createElement(_PostDefaultText2.default, { content: content });
};

exports.default = PostDefault;