"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Preview = _interopRequireDefault(require("../../Preview"));

var _PostMediaImage = _interopRequireDefault(require("../PostMediaImage"));

var _PostMediaVideo = _interopRequireDefault(require("../PostMediaVideo"));

var _YoutubeComponent = _interopRequireDefault(require("../../media/YoutubeComponent"));

var _helpers = require("../../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostDefaultMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(PostDefaultMedia, _Component);

  function PostDefaultMedia() {
    _classCallCheck(this, PostDefaultMedia);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostDefaultMedia).apply(this, arguments));
  }

  _createClass(PostDefaultMedia, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      var previewThumbnail = content.previewThumbnail,
          previewThumbnailYoutube = content.previewThumbnailYoutube,
          id = content.id,
          category = content.category,
          date = content.date,
          title = content.title,
          previewText = content.previewText; // determine whether the media content is a video or an image

      var isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);

      if (previewThumbnailYoutube) {
        return _react.default.createElement(_Preview.default, {
          classList: "post-preview post-preview--video post-preview--default post-preview--landscape"
        }, _react.default.createElement(_reactRouterDom.Link, {
          className: "post-preview__link",
          to: "/journal/".concat(id)
        }, (category || date) && _react.default.createElement("div", {
          className: "post-preview__meta"
        }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
          className: "post-preview__meta__title"
        }, ' -> ', category.fields.title))), _react.default.createElement(_YoutubeComponent.default, {
          videoId: previewThumbnailYoutube,
          controls: 0,
          classes: "default-post--video"
        }), _react.default.createElement(_reactRouterDom.Link, {
          className: "post-preview__link",
          to: "/journal/".concat(id)
        }, _react.default.createElement("div", {
          className: "post-preview__content"
        }, title && _react.default.createElement("h2", {
          className: "post-preview__title title"
        }, title), previewText && _react.default.createElement("div", {
          className: "post-preview__desc"
        }, _react.default.createElement("p", null, previewText)))));
      }

      if (!isMediaOfTypeImage) {
        return _react.default.createElement(_Preview.default, {
          classList: "post-preview post-preview--video post-preview--default post-preview--landscape"
        }, _react.default.createElement(_reactRouterDom.Link, {
          className: "post-preview__link",
          to: "/journal/".concat(id)
        }, (category || date) && _react.default.createElement("div", {
          className: "post-preview__meta"
        }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
          className: "post-preview__meta__title"
        }, ' -> ', category.fields.title))), _react.default.createElement(_PostMediaVideo.default, {
          content: previewThumbnail,
          patternId: "default-post--video"
        }), _react.default.createElement(_reactRouterDom.Link, {
          className: "post-preview__link",
          to: "/journal/".concat(id)
        }, _react.default.createElement("div", {
          className: "post-preview__content"
        }, title && _react.default.createElement("h2", {
          className: "post-preview__title title"
        }, title), previewText && _react.default.createElement("div", {
          className: "post-preview__desc"
        }, _react.default.createElement("p", null, previewText)))));
      } else {
        var imgSize = previewThumbnail.fields.file.details.image;
        var orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
        var query = window.innerWidth > 1440 ? 'w=800' : 'w=600';

        if (orientation === 'portrait') {
          return _react.default.createElement(_Preview.default, {
            classList: "post-preview post-preview--default post-preview--portrait"
          }, _react.default.createElement(_reactRouterDom.Link, {
            className: "post-preview__link",
            to: "/journal/".concat(id)
          }, (category || date) && _react.default.createElement("div", {
            className: "post-preview__meta post-preview__meta--top"
          }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
            className: "post-preview__meta__title"
          }, ' -> ', category.fields.title)), _react.default.createElement(_PostMediaImage.default, {
            query: query,
            orientation: orientation,
            patternId: "default-post",
            content: previewThumbnail
          }), _react.default.createElement("div", {
            className: "post-preview__content"
          }, (category || date) && _react.default.createElement("div", {
            className: "post-preview__meta post-preview__meta--bottom"
          }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
            className: "post-preview__meta__title"
          }, ' -> ', category.fields.title)), title && _react.default.createElement("h2", {
            className: "post-preview__title title"
          }, title), previewText && _react.default.createElement("div", {
            className: "post-preview__desc"
          }, _react.default.createElement("p", null, previewText)))));
        } else {
          return _react.default.createElement(_Preview.default, {
            classList: "post-preview post-preview--default post-preview--landscape"
          }, _react.default.createElement(_reactRouterDom.Link, {
            className: "post-preview__link",
            to: "/journal/".concat(id)
          }, (category || date) && _react.default.createElement("div", {
            className: "post-preview__meta"
          }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
            className: "post-preview__meta__title"
          }, ' -> ', category.fields.title)), _react.default.createElement(_PostMediaImage.default, {
            query: query,
            orientation: orientation,
            patternId: "default-post",
            content: previewThumbnail
          }), title && _react.default.createElement("h2", {
            className: "post-preview__title title"
          }, title), previewText && _react.default.createElement("div", {
            className: "post-preview__desc"
          }, _react.default.createElement("p", null, previewText))));
        }
      }
    }
  }]);

  return PostDefaultMedia;
}(_react.Component);

var _default = PostDefaultMedia;
exports.default = _default;