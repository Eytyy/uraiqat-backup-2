'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideImageComponent = function SlideImageComponent(_ref) {
	var content = _ref.content,
	    imagesQuery = _ref.imagesQuery,
	    id = _ref.id,
	    onClick = _ref.onClick,
	    active = _ref.active;
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
		{ className: 'slide slide--image' },
		_react2.default.createElement(
			'div',
			{ className: 'slider__inner-controls', onClick: onSlideClick },
			'+ enlarge'
		),
		_react2.default.createElement('div', { className: 'preview-image slide__image', style: style }),
		description && _react2.default.createElement(
			'div',
			{ className: 'caption' },
			active + 1,
			': ',
			description
		)
	);
};

exports.default = SlideImageComponent;