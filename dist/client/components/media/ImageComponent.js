'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageComponent = function ImageComponent(_ref) {
	var src = _ref.src,
	    classList = _ref.classList,
	    imagesQuery = _ref.imagesQuery;

	var url = typeof imagesQuery !== 'undefined' ? '' + src + imagesQuery : src;
	var style = {
		backgroundImage: 'url(\'' + url + '\')'
	};
	var classes = typeof classList !== 'undefined' ? classList : '';
	return _react2.default.createElement('div', { className: 'preview-image ' + classes, style: style });
};

exports.default = ImageComponent;