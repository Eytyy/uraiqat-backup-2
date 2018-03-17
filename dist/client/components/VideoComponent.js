'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoComponent = function VideoComponent(_ref) {
	var content = _ref.content,
	    classList = _ref.classList;

	var url = content.fields.file.url;
	return _react2.default.createElement(
		'div',
		{ className: classList },
		_react2.default.createElement('video', { src: url })
	);
};

exports.default = VideoComponent;