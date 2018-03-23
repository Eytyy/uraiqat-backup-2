'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideImageComponent = function SlideImageComponent(_ref) {
	var content = _ref.content,
	    classList = _ref.classList,
	    imagesQuery = _ref.imagesQuery,
	    id = _ref.id,
	    onClick = _ref.onClick;
	var file = content.file,
	    description = content.description;

	var url = typeof imagesQuery !== 'undefined' ? '' + file.url + imagesQuery : file.url;
	var style = {
		backgroundImage: 'url(\'' + url + '\')'
	};
	var onSlideClick = function onSlideClick() {
		onClick(id);
	};
	return _react2.default.createElement(
		'div',
		{ className: 'slide' },
		_react2.default.createElement('div', { onClick: onSlideClick, className: 'preview-image slide__image', style: style }),
		_react2.default.createElement(
			'div',
			{ className: 'caption' },
			description
		)
	);
};

exports.default = SlideImageComponent;