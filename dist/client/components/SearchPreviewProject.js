"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Preview = _interopRequireDefault(require("./Preview"));

var _PostMediaImage = _interopRequireDefault(require("./home/PostMediaImage"));

var _PostMediaVideo = _interopRequireDefault(require("./home/PostMediaVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchPreviewProject = function SearchPreviewProject(_ref) {
  var content = _ref.content,
      type = _ref.type;
  var previewMainThumbnail = content.previewMainThumbnail,
      id = content.id,
      year = content.year,
      title = content.title; // determine whether the media content is a video or an image

  var isMediaOfTypeImage = RegExp('image').test(previewMainThumbnail.fields.file.contentType);

  if (!isMediaOfTypeImage) {
    return _react.default.createElement(_Preview.default, {
      classList: "post-preview post-preview--video post-preview--default post-preview--landscape"
    }, _react.default.createElement(_reactRouterDom.Link, {
      className: "post-preview__link",
      to: "/".concat(type === 'work' ? 'work' : 'atelier', "/").concat(id)
    }, year && type === 'work' && _react.default.createElement("div", {
      className: "post-preview__meta"
    }, year, " ", _react.default.createElement("span", {
      className: "post-preview__meta__title"
    }, ' -> ', "Work")), type !== 'work' && _react.default.createElement("div", {
      className: "post-preview__meta"
    }, 'Atelier')), _react.default.createElement(_PostMediaVideo.default, {
      content: previewMainThumbnail,
      patternId: "default-post--video"
    }), _react.default.createElement(_reactRouterDom.Link, {
      className: "post-preview__link",
      to: "/".concat(type === 'work' ? 'work' : 'atelier', "/").concat(id)
    }, _react.default.createElement("div", {
      className: "post-preview__content"
    }, title && _react.default.createElement("h2", {
      className: "post-preview__title title"
    }, title))));
  } else {
    return _react.default.createElement(_Preview.default, {
      classList: "post-preview post-preview--default post-preview--landscape"
    }, _react.default.createElement(_reactRouterDom.Link, {
      className: "post-preview__link",
      to: "/".concat(type === 'work' ? 'work' : 'atelier', "/").concat(id)
    }, year && type === 'work' && _react.default.createElement("div", {
      className: "post-preview__meta"
    }, year, " ", _react.default.createElement("span", {
      className: "post-preview__meta__title"
    }, ' -> ', "Work")), type !== 'work' && _react.default.createElement("div", {
      className: "post-preview__meta"
    }, 'Atelier'), _react.default.createElement(_PostMediaImage.default, {
      content: previewMainThumbnail,
      query: "w=1020",
      orientation: "landscape",
      patternId: "default-post"
    }), title && _react.default.createElement("h2", {
      className: "post-preview__title title"
    }, title)));
  }
};

var _default = SearchPreviewProject;
exports.default = _default;