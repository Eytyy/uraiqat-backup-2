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
	var content = _ref.content;

	if (!content) {
		return null;
	}
	var current = content.filter(function (_ref2) {
		var fields = _ref2.fields;
		return !fields.previousMember;
	});
	var previous = content.filter(function (_ref3) {
		var fields = _ref3.fields;
		return fields.previousMember;
	});
	console.log(previous);
	return _react2.default.createElement(
		'section',
		{ className: 'practice-section--team practice-section' },
		_react2.default.createElement(
			'h2',
			{ className: 'practice-section__title' },
			'Team'
		),
		_react2.default.createElement(
			'div',
			{ className: 'practice-section__inner' },
			_react2.default.createElement(
				'div',
				{ className: 'practice-section__team-list' },
				current.map(function (_ref4) {
					var sys = _ref4.sys,
					    fields = _ref4.fields;
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
			),
			_react2.default.createElement(
				'div',
				{ className: 'practice-section__team-list practice-section__team-list--previous' },
				previous && previous.map(function (_ref5) {
					var sys = _ref5.sys,
					    fields = _ref5.fields;
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