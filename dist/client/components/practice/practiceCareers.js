'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PracticeCareers = function PracticeCareers(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'section',
		{ className: 'practice-section__careers practice__careers' },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			'Careers'
		),
		content.map(function (_ref2) {
			var sys = _ref2.sys,
			    fields = _ref2.fields;

			return _react2.default.createElement(
				'article',
				{ key: sys.id, className: 'career-preview' },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ className: 'link career-preview__link', to: 'careers/' + sys.id },
					_react2.default.createElement(
						'h3',
						{ className: 'career-preview__title' },
						fields.title
					)
				)
			);
		})
	);
};

exports.default = PracticeCareers;