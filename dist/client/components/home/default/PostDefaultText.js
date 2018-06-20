'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Preview = require('../../Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _helpers = require('../../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDefaultText = function PostDefaultText(_ref) {
	var content = _ref.content;
	var id = content.id,
	    category = content.category,
	    date = content.date,
	    title = content.title,
	    previewText = content.previewText,
	    externalPostUrl = content.externalPostUrl,
	    externalPostSource = content.externalPostSource;

	return _react2.default.createElement(
		_Preview2.default,
		{ classList: 'post-preview post-preview--default post-preview--text' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ className: 'post-preview__link', to: '/journal/' + id },
			(category || date) && _react2.default.createElement(
				'div',
				{ className: 'post-preview__meta' },
				(0, _helpers.formatDate)(date),
				' ',
				_react2.default.createElement(
					'span',
					{ className: 'post-preview__meta__title' },
					' -> ',
					category.fields.title
				)
			),
			title && _react2.default.createElement(
				'h2',
				{ className: 'post-preview__title title' },
				title
			),
			previewText && _react2.default.createElement(
				'div',
				{ className: 'post-preview__desc' },
				_react2.default.createElement(
					'p',
					null,
					previewText
				)
			)
		),
		externalPostUrl && _react2.default.createElement(
			'div',
			{ className: 'post-preview__external-link' },
			_react2.default.createElement(
				'a',
				{ href: externalPostUrl, target: '_blank', rel: 'noopener noreferrer' },
				'->',
				externalPostSource
			)
		)
	);
};

exports.default = PostDefaultText;