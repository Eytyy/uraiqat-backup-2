'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Preview = require('../../components/Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _PostMediaImage = require('../home/PostMediaImage');

var _PostMediaImage2 = _interopRequireDefault(_PostMediaImage);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RelatedProject = function (_Component) {
	_inherits(RelatedProject, _Component);

	function RelatedProject() {
		_classCallCheck(this, RelatedProject);

		return _possibleConstructorReturn(this, (RelatedProject.__proto__ || Object.getPrototypeOf(RelatedProject)).apply(this, arguments));
	}

	_createClass(RelatedProject, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    id = _props.id;
			var previewMainThumbnail = content.previewMainThumbnail,
			    year = content.year,
			    title = content.title;

			return _react2.default.createElement(
				_Preview2.default,
				{ classList: 'post-preview post-preview--default post-preview--landscape related-item related-item--project' },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ className: 'post-preview__link', to: '/work/' + id },
					year && _react2.default.createElement(
						'div',
						{ className: 'post-preview__meta' },
						(0, _helpers.formatDate)(year),
						' -> ',
						'Project'
					),
					_react2.default.createElement(_PostMediaImage2.default, { orientation: 'landscape', patternId: 'related-project', content: previewMainThumbnail }),
					title && _react2.default.createElement(
						'h3',
						{ className: 'post-preview__title title' },
						title,
						' -> '
					)
				)
			);
		}
	}]);

	return RelatedProject;
}(_react.Component);

exports.default = RelatedProject;