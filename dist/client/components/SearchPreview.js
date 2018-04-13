'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostDefault = require('./home/default/PostDefault');

var _PostDefault2 = _interopRequireDefault(_PostDefault);

var _SearchPreviewProject = require('./SearchPreviewProject');

var _SearchPreviewProject2 = _interopRequireDefault(_SearchPreviewProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchPreview = function SearchPreview(_ref) {
	var content = _ref.content,
	    type = _ref.type,
	    id = _ref.id;

	var contentWid = _extends({}, content, {
		id: id
	});
	return type === 'post' ? _react2.default.createElement(_PostDefault2.default, { content: contentWid }) : _react2.default.createElement(_SearchPreviewProject2.default, { content: contentWid });
};

exports.default = SearchPreview;