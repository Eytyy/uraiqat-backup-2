'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexibleImageComponent = function FlexibleImageComponent(_ref) {
	var content = _ref.content;
	var _content$fields = content.fields,
	    title = _content$fields.title,
	    file = _content$fields.file;

	return _react2.default.createElement('img', { src: file.url });
};

exports.default = FlexibleImageComponent;