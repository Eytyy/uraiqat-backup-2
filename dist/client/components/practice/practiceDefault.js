'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BodyText = require('../BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PracticeDefault = function PracticeDefault(_ref) {
	var sectionTitle = _ref.sectionTitle,
	    content = _ref.content;

	return _react2.default.createElement(
		'section',
		{ className: 'practice-section practice-section' + sectionTitle },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			sectionTitle
		),
		_react2.default.createElement(_BodyText2.default, { content: content })
	);
};

exports.default = PracticeDefault;