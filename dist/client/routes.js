"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./containers/App"));

var _Home = _interopRequireDefault(require("./containers/Home"));

var _Post = _interopRequireDefault(require("./containers/Post"));

var _Work = _interopRequireDefault(require("./containers/Work"));

var _Project = _interopRequireDefault(require("./containers/Project"));

var _Atelier = _interopRequireDefault(require("./containers/Atelier"));

var _AtelierAbout = _interopRequireDefault(require("./containers/AtelierAbout"));

var _AtelierProject = _interopRequireDefault(require("./containers/AtelierProject"));

var _Practice = _interopRequireDefault(require("./containers/Practice"));

var _Contact = _interopRequireDefault(require("./containers/Contact"));

var _Search = _interopRequireDefault(require("./containers/Search"));

var _TeamMember = _interopRequireDefault(require("./containers/TeamMember"));

var _Career = _interopRequireDefault(require("./containers/Career"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App.default,
  routes: [{
    path: '/',
    exact: true,
    component: _Home.default
  }, {
    path: '/work',
    exact: true,
    component: _Work.default
  }, {
    path: '/work/:id',
    exact: true,
    component: _Project.default
  }, {
    path: '/atelier',
    exact: true,
    component: _AtelierAbout.default
  }, {
    path: '/atelier/portfolio',
    exact: true,
    component: _Atelier.default
  }, {
    path: '/atelier/:id',
    exact: true,
    component: _AtelierProject.default
  }, {
    path: '/practice',
    exact: true,
    component: _Practice.default
  }, {
    path: '/contact',
    exact: true,
    component: _Contact.default
  }, {
    path: '/journal/:id',
    exact: true,
    component: _Post.default
  }, {
    path: '/search',
    exact: true,
    component: _Search.default
  }, {
    path: '/team/:id',
    exact: true,
    component: _TeamMember.default
  }, {
    path: '/careers/:id',
    exact: true,
    component: _Career.default
  }]
}];
var _default = routes;
exports.default = _default;