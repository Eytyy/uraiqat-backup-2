'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostAuthorWithLink = function PostAuthorWithLink(_ref) {
	var content = _ref.content,
	    index = _ref.index,
	    lastIndex = _ref.lastIndex;

	return _react2.default.createElement(
		'span',
		{ className: 'post__authors__list__item' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ className: 'post__authors__list__item__link', to: '/team/' + content.relatedTeamMemberProfile.sys.id },
			content.authorName,
			index === lastIndex ? '.' : ' ,'
		)
	);
};

var PostAuthor = function PostAuthor(_ref2) {
	var content = _ref2.content,
	    index = _ref2.index,
	    lastIndex = _ref2.lastIndex;

	return _react2.default.createElement(
		'span',
		{ className: 'post__authors__list__item' },
		content.authorName,
		index === lastIndex ? '.' : ' ,'
	);
};

var PostAuthors = function PostAuthors(_ref3) {
	var content = _ref3.content;

	return _react2.default.createElement(
		'div',
		{ className: 'post__meta post__authors' },
		_react2.default.createElement(
			'span',
			{ className: 'label' },
			'By '
		),
		_react2.default.createElement(
			'div',
			{ className: 'post__authors__list post__meta__item' },
			content.map(function (_ref4, index) {
				var sys = _ref4.sys,
				    fields = _ref4.fields;

				return typeof fields.relatedTeamMemberProfile !== 'undefined' ? _react2.default.createElement(PostAuthorWithLink, { key: sys.id, content: fields, index: index, lastIndex: content.length - 1 }) : _react2.default.createElement(PostAuthor, { key: sys.id, index: index, content: fields, lastIndex: content.length - 1 });
			})
		)
	);
};

exports.default = PostAuthors;