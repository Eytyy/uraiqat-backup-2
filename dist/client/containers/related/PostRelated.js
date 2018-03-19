'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RelatedProject = require('../../components/related/RelatedProject');

var _RelatedProject2 = _interopRequireDefault(_RelatedProject);

var _RelatedPost = require('../../components/related/RelatedPost');

var _RelatedPost2 = _interopRequireDefault(_RelatedPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostRelated = function (_Component) {
	_inherits(PostRelated, _Component);

	function PostRelated() {
		_classCallCheck(this, PostRelated);

		return _possibleConstructorReturn(this, (PostRelated.__proto__ || Object.getPrototypeOf(PostRelated)).apply(this, arguments));
	}

	_createClass(PostRelated, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    relatedProject = _props.relatedProject,
			    relatedPosts = _props.relatedPosts;

			return _react2.default.createElement(
				'aside',
				{ className: 'related-content post__related' },
				relatedProject && _react2.default.createElement(_RelatedProject2.default, { id: relatedProject[0].sys.id, content: relatedProject[0].fields }),
				_react2.default.createElement(_RelatedPost2.default, { content: relatedPosts })
			);
		}
	}]);

	return PostRelated;
}(_react.Component);

exports.default = PostRelated;