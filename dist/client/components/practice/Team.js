'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _PostMediaImage = require('../home/PostMediaImage');

var _PostMediaImage2 = _interopRequireDefault(_PostMediaImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Team = function Team(_ref) {
	var content = _ref.content,
	    type = _ref.type;

	if (!content) {
		return null;
	}
	return _react2.default.createElement(
		'section',
		{ className: 'practice-section--team practice-section' },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			type === 'current' ? 'Team' : 'Previous Team Members'
		),
		_react2.default.createElement(
			'div',
			{ className: 'practice-section__inner' },
			type === 'current' ? _react2.default.createElement(
				'div',
				{ className: 'practice-section__team-list' },
				content.map(function (_ref2) {
					var sys = _ref2.sys,
					    fields = _ref2.fields;
					return _react2.default.createElement(
						'article',
						{ key: sys.id, className: 'team-member-preview' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ className: 'link team-member-preview__link', to: 'team/' + sys.id },
							_react2.default.createElement(_PostMediaImage2.default, { orientation: 'portrait', patternId: 'team-member', query: 'w=350', content: fields.profileImagevideo }),
							_react2.default.createElement(
								'h3',
								{ className: 'team-member-preview__name' },
								fields.name
							)
						)
					);
				})
			) : _react2.default.createElement(
				'div',
				{ className: 'practice-section__team-list' },
				content.map(function (_ref3) {
					var sys = _ref3.sys,
					    fields = _ref3.fields;
					return _react2.default.createElement(
						'article',
						{ key: sys.id, className: 'team-member-preview' },
						_react2.default.createElement(
							'h3',
							{ className: 'team-member-preview__name' },
							fields.name
						)
					);
				})
			)
		)
	);
};

exports.default = Team;