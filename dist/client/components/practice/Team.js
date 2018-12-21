"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PostMediaImage = _interopRequireDefault(require("../home/PostMediaImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Team = function Team(_ref) {
  var content = _ref.content,
      type = _ref.type;

  if (!content) {
    return null;
  }

  return _react.default.createElement("section", {
    className: "practice-section--team practice-section"
  }, _react.default.createElement("h2", {
    className: "practice-section__title"
  }, type === 'current' ? 'Team' : 'Previous Team Members'), _react.default.createElement("div", {
    className: "practice-section__inner"
  }, type === 'current' ? _react.default.createElement("div", {
    className: "practice-section__team-list"
  }, content.map(function (_ref2) {
    var sys = _ref2.sys,
        fields = _ref2.fields;
    return _react.default.createElement("article", {
      key: sys.id,
      className: "team-member-preview"
    }, _react.default.createElement(_reactRouterDom.Link, {
      className: "link team-member-preview__link",
      to: "team/".concat(sys.id)
    }, _react.default.createElement(_PostMediaImage.default, {
      orientation: "portrait",
      patternId: "team-member",
      query: "w=350",
      content: fields.profileImagevideo
    }), _react.default.createElement("h3", {
      className: "team-member-preview__name"
    }, fields.name)));
  })) : _react.default.createElement("div", {
    className: "practice-section__team-previous-list"
  }, content.map(function (_ref3, index) {
    var sys = _ref3.sys,
        fields = _ref3.fields;
    return _react.default.createElement("span", {
      style: {
        display: 'inline-block'
      },
      key: sys.id,
      className: "previous-member"
    }, fields.name, index === content.length - 1 ? '.' : ', ');
  }))));
};

var _default = Team;
exports.default = _default;