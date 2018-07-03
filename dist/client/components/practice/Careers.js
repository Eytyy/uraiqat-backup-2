'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _BodyText = require('../BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Careers = function Careers(_ref) {
	var content = _ref.content,
	    desc = _ref.desc;

	if (!content) {
		return null;
	}
	return _react2.default.createElement(
		'section',
		{ className: 'practice-section--careers practice-section' },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			'Careers'
		),
		_react2.default.createElement(
			'div',
			{ className: 'practice-section__inner' },
			_react2.default.createElement(_BodyText2.default, { content: desc }),
			content.map(function (_ref2) {
				var sys = _ref2.sys,
				    fields = _ref2.fields;

				var date = new Date(sys.createdAt);
				var formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
				return _react2.default.createElement(
					'article',
					{ key: sys.id, className: 'career-preview' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ className: 'link career-preview__link', to: 'careers/' + sys.id },
						_react2.default.createElement(
							'time',
							{ className: 'career-preview__date', dateTime: sys.createdAt },
							formatedDate
						),
						_react2.default.createElement(
							'span',
							{ className: 'sep' },
							'->'
						),
						_react2.default.createElement(
							'h3',
							{ className: 'career-preview__title' },
							fields.title
						)
					)
				);
			})
		)
	);
};

exports.default = Careers;