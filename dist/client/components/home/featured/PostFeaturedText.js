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

var PostFeaturedText = function PostFeaturedText(_ref) {
	var content = _ref.content;
	var id = content.id,
	    category = content.category,
	    date = content.date,
	    title = content.title,
	    previewText = content.previewText;

	return _react2.default.createElement(
		_Preview2.default,
		{ classList: 'post-preview post-preview--featured' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ className: 'post-preview__link', to: '/journal/' + id },
			_react2.default.createElement(
				'div',
				{ className: 'post-preview__content' },
				_react2.default.createElement(
					'div',
					{ className: 'post-preview__content__inner' },
					(category || date) && _react2.default.createElement(
						'div',
						{ className: 'post-preview__meta' },
						(0, _helpers.formatDate)(date),
						' -> ',
						category.fields.title
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
				)
			)
		)
	);
};

exports.default = PostFeaturedText;