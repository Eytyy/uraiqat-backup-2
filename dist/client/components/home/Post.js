'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostDefault = require('./default/PostDefault');

var _PostDefault2 = _interopRequireDefault(_PostDefault);

var _PostFeatured = require('./featured/PostFeatured');

var _PostFeatured2 = _interopRequireDefault(_PostFeatured);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(content) {
	var previewDisplaySize = content.previewDisplaySize;

	return previewDisplaySize === 'Featured' ? _react2.default.createElement(_PostFeatured2.default, { content: content }) : _react2.default.createElement(_PostDefault2.default, { content: content });
};

exports.default = Post;