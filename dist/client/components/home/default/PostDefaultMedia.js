'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Preview = require('../../Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _PostMediaImage = require('../PostMediaImage');

var _PostMediaImage2 = _interopRequireDefault(_PostMediaImage);

var _PostMediaVideo = require('../PostMediaVideo');

var _PostMediaVideo2 = _interopRequireDefault(_PostMediaVideo);

var _helpers = require('../../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostDefaultMedia = function (_Component) {
	_inherits(PostDefaultMedia, _Component);

	function PostDefaultMedia() {
		_classCallCheck(this, PostDefaultMedia);

		return _possibleConstructorReturn(this, (PostDefaultMedia.__proto__ || Object.getPrototypeOf(PostDefaultMedia)).apply(this, arguments));
	}

	_createClass(PostDefaultMedia, [{
		key: 'render',
		value: function render() {
			var content = this.props.content;
			var previewThumbnail = content.previewThumbnail,
			    id = content.id,
			    category = content.category,
			    date = content.date,
			    title = content.title,
			    previewText = content.previewText;
			// determine whether the media content is a video or an image

			var isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);

			if (!isMediaOfTypeImage) {
				return _react2.default.createElement(
					_Preview2.default,
					{ classList: 'post-preview post-preview--video post-preview--default post-preview--landscape' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ className: 'post-preview__link', to: '/journal/' + id },
						(category || date) && _react2.default.createElement(
							'div',
							{ className: 'post-preview__meta' },
							(0, _helpers.formatDate)(date),
							' -> ',
							category.fields.title
						)
					),
					_react2.default.createElement(_PostMediaVideo2.default, { content: previewThumbnail, patternId: 'default-post--video' }),
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ className: 'post-preview__link', to: '/journal/' + id },
						_react2.default.createElement(
							'div',
							{ className: 'post-preview__content' },
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
				);
			} else {
				var imgSize = previewThumbnail.fields.file.details.image;
				var orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
				if (orientation === 'portrait') {
					return _react2.default.createElement(
						_Preview2.default,
						{ classList: 'post-preview post-preview--default post-preview--portrait' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ className: 'post-preview__link', to: '/journal/' + id },
							_react2.default.createElement(_PostMediaImage2.default, { orientation: orientation, patternId: 'default-post', content: previewThumbnail }),
							_react2.default.createElement(
								'div',
								{ className: 'post-preview__content' },
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
					);
				} else {
					return _react2.default.createElement(
						_Preview2.default,
						{ classList: 'post-preview post-preview--default post-preview--landscape' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ className: 'post-preview__link', to: '/journal/' + id },
							(category || date) && _react2.default.createElement(
								'div',
								{ className: 'post-preview__meta' },
								(0, _helpers.formatDate)(date),
								' -> ',
								category.fields.title
							),
							_react2.default.createElement(_PostMediaImage2.default, { orientation: orientation, patternId: 'default-post', content: previewThumbnail }),
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
					);
				}
			}
		}
	}]);

	return PostDefaultMedia;
}(_react.Component);

exports.default = PostDefaultMedia;