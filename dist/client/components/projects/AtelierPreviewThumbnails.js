"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImageComponent = _interopRequireDefault(require("../media/ImageComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AtelierPreviewThumbnails = function AtelierPreviewThumbnails(_ref) {
  var previewMainThumbnail = _ref.previewMainThumbnail,
      featured = _ref.featured;

  if (typeof window === 'undefined') {
    return _react.default.createElement("div", {
      className: "atelier-preview__thumbs"
    });
  }

  var patternID = window.innerWidth < 768 ? 'atelier-main-thumb--featured' : typeof featured !== 'undefined' && featured ? 'atelier-main-thumb--featured' : 'project-main-thumb';
  return _react.default.createElement("div", {
    className: "atelier-preview__thumbs"
  }, _react.default.createElement(_ImageComponent.default, {
    patternId: "".concat(patternID),
    imagesQuery: '?fl=progressive&w=756',
    classList: "atelier-preview__image atelier-preview__image--main",
    src: previewMainThumbnail.fields.file.url
  }));
};

var _default = AtelierPreviewThumbnails;
exports.default = _default;