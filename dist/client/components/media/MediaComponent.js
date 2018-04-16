'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VideoComponent = require('./VideoComponent');

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

var _ImageComponent = require('./ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaComponent = function MediaComponent(_ref) {
	var media = _ref.media;

	var isMediaOfTypeImage = RegExp('image').test(media.fields.file.contentType);
	console.log(media);
	if (isMediaOfTypeImage) {
		var style = {
			backgroundImage: 'url(\'' + media.fields.file.url + '\')'
		};
		return _react2.default.createElement('div', { className: 'atelier-landing__image', style: style });
	} else {
		return _react2.default.createElement(_VideoComponent2.default, { classList: 'atelier-landing__video', patternId: 'atelier-landing-media-video', content: media });
	}
};

exports.default = MediaComponent;