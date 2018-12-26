"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getContactContent = exports.isContactFetching = exports.getCareer = exports.isCareerFetching = exports.getTeamMember = exports.isTeamMemberFetching = exports.getPracticeContent = exports.isPracticeFetching = exports.getFilteredContent = exports.getActiveFilters = exports.getFilters = exports.getSearchResults = exports.isSearchFetching = exports.getActiveSlide = exports.getGalleryContent = exports.getRelatedAuthorPosts = exports.isRelatedAuthorPostsFetching = exports.getRelatedPosts = exports.isRelatedFetching = exports.getNextPrev = exports.isAtelierProjectFetching = exports.getAtelierIntro = exports.getAtelierProjects = exports.getAtelierProject = exports.isAtelierProjectsFetching = exports.isProjectFetching = exports.getProjects = exports.getProject = exports.isProjectsFetching = exports.getPost = exports.isPostFetching = exports.getPosts = exports.isPostsFetching = exports.getAppConfigs = void 0;

var _redux = require("redux");

var fromApp = _interopRequireWildcard(require("./app"));

var fromHome = _interopRequireWildcard(require("./home"));

var fromWork = _interopRequireWildcard(require("./work"));

var fromAtelier = _interopRequireWildcard(require("./atelier"));

var fromRelated = _interopRequireWildcard(require("./related"));

var fromGallery = _interopRequireWildcard(require("./gallery"));

var fromSearch = _interopRequireWildcard(require("./search"));

var fromPractice = _interopRequireWildcard(require("./practice"));

var fromContact = _interopRequireWildcard(require("./contact"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var RootReducer = (0, _redux.combineReducers)({
  app: fromApp.default,
  posts: fromHome.default,
  projects: fromWork.default,
  atelier: fromAtelier.default,
  related: fromRelated.default,
  gallery: fromGallery.default,
  search: fromSearch.default,
  practice: fromPractice.default,
  contact: fromContact.default
}); // App Selectors

var getAppConfigs = function getAppConfigs(state) {
  return fromApp.getConfigs(state.app);
}; // Home Selectors


exports.getAppConfigs = getAppConfigs;

var isPostsFetching = function isPostsFetching(state) {
  return fromHome.getIsFetching(state.posts);
};

exports.isPostsFetching = isPostsFetching;

var getPosts = function getPosts(state) {
  var featuredContent = fromHome.getAll(state.posts).featuredContent.map(function (id) {
    return fromHome.getPost(state.posts, id);
  });
  var mainContent = fromHome.getAll(state.posts).mainContent.map(function (id) {
    var post = fromHome.getPost(state.posts, id);
    return post;
  }).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return {
    featuredContent: featuredContent,
    mainContent: mainContent
  };
};

exports.getPosts = getPosts;

var isPostFetching = function isPostFetching(state) {
  return fromHome.getIsFetching(state.posts);
};

exports.isPostFetching = isPostFetching;

var getPost = function getPost(state, id) {
  return fromHome.getPost(state.posts, id);
}; // Work Selectors


exports.getPost = getPost;

var isProjectsFetching = function isProjectsFetching(state) {
  return fromWork.getIsFetching(state.projects);
};

exports.isProjectsFetching = isProjectsFetching;

var getProject = function getProject(state, id) {
  return fromWork.getProject(state.projects, id);
};

exports.getProject = getProject;

var getProjects = function getProjects(state) {
  return fromWork.getAll(state.projects).map(function (id) {
    return getProject(state, id);
  }); // .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
};

exports.getProjects = getProjects;

var isProjectFetching = function isProjectFetching(state) {
  return fromWork.getIsFetching(state.projects);
}; // Atelier Selectors


exports.isProjectFetching = isProjectFetching;

var isAtelierProjectsFetching = function isAtelierProjectsFetching(state) {
  return fromAtelier.getIsFetching(state.atelier);
};

exports.isAtelierProjectsFetching = isAtelierProjectsFetching;

var getAtelierProject = function getAtelierProject(state, id) {
  return fromAtelier.getProject(state.atelier, id);
};

exports.getAtelierProject = getAtelierProject;

var getAtelierProjects = function getAtelierProjects(state) {
  return fromAtelier.getAll(state.atelier).map(function (id) {
    return getAtelierProject(state, id);
  });
};

exports.getAtelierProjects = getAtelierProjects;

var getAtelierIntro = function getAtelierIntro(state) {
  return fromAtelier.getIntro(state.atelier);
};

exports.getAtelierIntro = getAtelierIntro;

var isAtelierProjectFetching = function isAtelierProjectFetching(state) {
  return fromAtelier.getIsFetching(state.atelier);
};

exports.isAtelierProjectFetching = isAtelierProjectFetching;

var getNextPrev = function getNextPrev(state, id, type) {
  switch (type) {
    case 'journal':
      return fromHome.getNextPrev(state.posts, id);

    case 'atelier':
      return fromAtelier.getNextPrev(state.atelier, id);

    default:
      return fromWork.getNextPrev(state.projects, id);
  }
}; // Related Selectors


exports.getNextPrev = getNextPrev;

var isRelatedFetching = function isRelatedFetching(state) {
  return fromRelated.getIsFetching(state.related);
};

exports.isRelatedFetching = isRelatedFetching;

var getRelatedPosts = function getRelatedPosts(state, id, postID) {
  var content = fromRelated.getPost(state.related, id);

  if (typeof postID === 'undefined') {
    var rval = typeof content === 'undefined' ? [] : content;
    return rval;
  }

  return typeof content === 'undefined' ? [] : content.filter(function (_ref) {
    var sys = _ref.sys;
    return sys.id !== postID;
  });
};

exports.getRelatedPosts = getRelatedPosts;

var isRelatedAuthorPostsFetching = function isRelatedAuthorPostsFetching(state) {
  return fromRelated.getIsAuthorFetching(state.related);
};

exports.isRelatedAuthorPostsFetching = isRelatedAuthorPostsFetching;

var getRelatedAuthorPosts = function getRelatedAuthorPosts(state, name) {
  var content = fromRelated.getAuthorPost(state.related, name);
  return typeof content === 'undefined' ? [] : content;
}; // Gallery Selectors


exports.getRelatedAuthorPosts = getRelatedAuthorPosts;

var getGalleryContent = function getGalleryContent(state) {
  return fromGallery.getGalleryContent(state.gallery);
};

exports.getGalleryContent = getGalleryContent;

var getActiveSlide = function getActiveSlide(state, id) {
  return fromGallery.getActiveSlide(state.gallery, id);
}; // Search Selectors


exports.getActiveSlide = getActiveSlide;

var isSearchFetching = function isSearchFetching(state) {
  return fromSearch.getIsFetching(state.search);
};

exports.isSearchFetching = isSearchFetching;

var getSearchResults = function getSearchResults(state, query) {
  var content = fromSearch.getAll(state.search, query);
  return typeof content === 'undefined' ? [] : content;
}; // Filters Selectors


exports.getSearchResults = getSearchResults;

var getFilters = function getFilters(state) {
  var content = fromSearch.getFilters(state.search);
  return typeof content === 'undefined' ? [] : content;
};

exports.getFilters = getFilters;

var getActiveFilters = function getActiveFilters(state) {
  return fromSearch.getActiveFilters(state.search);
};

exports.getActiveFilters = getActiveFilters;

var getFilteredContent = function getFilteredContent(state) {
  var posts = getPosts(state);
  var filters = getActiveFilters(state).map(function (_ref2) {
    var title = _ref2.title;
    return title;
  });

  if (filters.length > 0) {
    var featuredContent = posts.featuredContent.filter(function (_ref3) {
      var category = _ref3.category;
      return filters.indexOf(category.fields.title) > -1;
    });
    var mainContent = posts.mainContent.filter(function (_ref4) {
      var category = _ref4.category;
      return filters.indexOf(category.fields.title) > -1;
    });
    return {
      featuredContent: featuredContent,
      mainContent: mainContent
    };
  }

  return posts;
};

exports.getFilteredContent = getFilteredContent;

var isPracticeFetching = function isPracticeFetching(state) {
  return fromPractice.getIsFetching(state.practice);
};

exports.isPracticeFetching = isPracticeFetching;

var getPracticeContent = function getPracticeContent(state) {
  return fromPractice.getContent(state.practice);
};

exports.getPracticeContent = getPracticeContent;

var isTeamMemberFetching = function isTeamMemberFetching(state) {
  return fromPractice.getIsTeamMemberFetching(state.practice);
};

exports.isTeamMemberFetching = isTeamMemberFetching;

var getTeamMember = function getTeamMember(state, id) {
  return fromPractice.getTeamMember(state.practice, id);
};

exports.getTeamMember = getTeamMember;

var isCareerFetching = function isCareerFetching(state) {
  return fromPractice.getIsCareerFetching(state.practice);
};

exports.isCareerFetching = isCareerFetching;

var getCareer = function getCareer(state, id) {
  return fromPractice.getCareer(state.practice, id);
};

exports.getCareer = getCareer;

var isContactFetching = function isContactFetching(state) {
  return fromPractice.getIsFetching(state.contact);
};

exports.isContactFetching = isContactFetching;

var getContactContent = function getContactContent(state) {
  return fromContact.getContent(state.contact);
};

exports.getContactContent = getContactContent;
var _default = RootReducer;
exports.default = _default;