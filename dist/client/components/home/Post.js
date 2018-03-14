'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostDefault = require('./PostDefault');

var _PostDefault2 = _interopRequireDefault(_PostDefault);

var _PostFeatured = require('./PostFeatured');

var _PostFeatured2 = _interopRequireDefault(_PostFeatured);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Post = function Post(_ref) {
	var content = _ref.content;

	var previewDisplaySize = content.previewDisplaySize,
	    rest = _objectWithoutProperties(content, ['previewDisplaySize']);

	return previewDisplaySize === 'Featured' ? _react2.default.createElement(_PostFeatured2.default, rest) : _react2.default.createElement(_PostDefault2.default, rest);
};

exports.default = Post;