"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PostContentText = _interopRequireDefault(require("./PostContentText"));

var _PostContentMedia = _interopRequireDefault(require("./PostContentMedia"));

var _PostContentYoutube = _interopRequireDefault(require("./PostContentYoutube"));

var _PostContentSubtitle = _interopRequireDefault(require("./PostContentSubtitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContent = function PostContent(_ref) {
  var content = _ref.content;
  return _react.default.createElement("div", {
    className: "post__content"
  }, content.map(function (_ref2) {
    var sys = _ref2.sys,
        fields = _ref2.fields;

    switch (sys.contentType.sys.id) {
      case 'blockPostText':
        return _react.default.createElement(_PostContentText.default, {
          key: sys.id,
          content: fields
        });

      case 'blockPostMedia':
        return _react.default.createElement(_PostContentMedia.default, {
          key: sys.id,
          id: sys.id,
          content: fields
        });

      case 'blockPostYoutubeEmbed':
        return _react.default.createElement(_PostContentYoutube.default, {
          key: sys.id,
          id: sys.id,
          content: fields
        });

      default:
        return _react.default.createElement(_PostContentSubtitle.default, {
          key: sys.id,
          content: fields
        });
    }
  }));
};

var _default = PostContent;
exports.default = _default;