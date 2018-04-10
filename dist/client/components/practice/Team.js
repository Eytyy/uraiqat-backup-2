'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Team = function Team(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'section',
		{ className: 'practice-section__careers practice__team' },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			'Team'
		),
		content.map(function (_ref2) {
			var sys = _ref2.sys,
			    fields = _ref2.fields;

			var bgStyle = {
				backgroundImage: 'url(\'' + fields.profileImagevideo.fields.file.url + '\')'
			};
			return _react2.default.createElement(
				'article',
				{ key: sys.id, className: 'team-member-preview' },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ className: 'link team-member-preview__link', to: 'team/' + sys.id },
					_react2.default.createElement('div', { className: 'team-member-preview__image', style: bgStyle }),
					_react2.default.createElement(
						'h3',
						{ className: 'team-member-preview__name' },
						fields.name
					)
				)
			);
		})
	);
};

exports.default = Team;