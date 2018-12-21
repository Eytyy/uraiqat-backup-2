"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchContact = exports.fetchAuthorRelated = exports.fetchTeamMember = exports.fetchCareer = exports.fetchPractice = exports.clearAllFilters = exports.updateFilter = exports.fetchFilters = exports.fetchSearchResults = exports.toggleGallery = exports.updateActiveSlide = exports.updateGallery = exports.fetchRelated = exports.fetchAtelierProjects = exports.fetchProjects = exports.fetchPosts = exports.updateApp = exports.initClient = void 0;

var _reducers = require("./reducers");

var api = _interopRequireWildcard(require("./api"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// App Action Creators
var requestClient = function requestClient() {
  return {
    type: 'INIT_CLIENT'
  };
};

var recieveClient = function recieveClient(authState) {
  return {
    type: 'LOADED_CLIENT',
    authState: authState
  };
};

var initClient = function initClient() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestClient());

    if ((0, _reducers.getIsClientLoading)(state)) {
      return Promise.resolve();
    }

    return api.setupClient().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveClient(response));
    });
  };
};

exports.initClient = initClient;

var updateAppConfigs = function updateAppConfigs(configs) {
  return {
    type: 'UPDATE_APP_CONFIGS',
    response: _objectSpread({}, configs)
  };
};

var updateApp = function updateApp(configs) {
  return function (dispatch) {
    dispatch(updateAppConfigs(configs));
  };
}; // Journal Action Creators


exports.updateApp = updateApp;

var requestPosts = function requestPosts() {
  return {
    type: 'REQUEST_POSTS'
  };
};

var recievePosts = function recievePosts(payload) {
  return {
    type: 'RECIEVE_POSTS',
    response: payload
  };
};

var fetchPosts = function fetchPosts() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestPosts());

    if ((0, _reducers.isPostsFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchPosts().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recievePosts(response));
    });
  };
}; // Work Action Creators


exports.fetchPosts = fetchPosts;

var requestProjects = function requestProjects() {
  return {
    type: 'REQUEST_PROJECTS'
  };
};

var recieveProjects = function recieveProjects(payload) {
  return {
    type: 'RECIEVE_PROJECTS',
    response: payload
  };
};

var fetchProjects = function fetchProjects() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestProjects());

    if ((0, _reducers.isProjectsFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchProjects().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveProjects(response));
    });
  };
}; // Atelier Action Creators


exports.fetchProjects = fetchProjects;

var requestAtelierProjects = function requestAtelierProjects() {
  return {
    type: 'REQUEST_ATELIER_PROJECTS'
  };
};

var recieveAtelierProjects = function recieveAtelierProjects(payload) {
  return {
    type: 'RECIEVE_ATELIER_PROJECTS',
    response: payload
  };
};

var fetchAtelierProjects = function fetchAtelierProjects() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestAtelierProjects());

    if ((0, _reducers.isAtelierProjectsFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchAtelierProjects().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveAtelierProjects(response));
    });
  };
}; // Related Action Creators


exports.fetchAtelierProjects = fetchAtelierProjects;

var requestRelated = function requestRelated() {
  return {
    type: 'REQUEST_RELATED'
  };
};

var recieveRelated = function recieveRelated(payload, id) {
  return {
    type: 'RECIEVE_RELATED',
    response: payload,
    projectID: id
  };
};

var fetchRelated = function fetchRelated(id) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestRelated());

    if ((0, _reducers.isRelatedFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchRelatedPosts(id).then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveRelated(response, id));
    });
  };
}; // Gallery Action Creators


exports.fetchRelated = fetchRelated;

var recieveGalleryContent = function recieveGalleryContent(sliderId, content, contentTitle, type) {
  return {
    type: 'RECIEVE_GALLERY_CONTENT',
    response: {
      sliderId: sliderId,
      content: content,
      contentTitle: contentTitle,
      type: type
    }
  };
};

var updateGallery = function updateGallery(sliderId, content, contentTitle, type) {
  return function (dispatch) {
    return dispatch(recieveGalleryContent(sliderId, content, contentTitle, type));
  };
};

exports.updateGallery = updateGallery;

var updateSlide = function updateSlide(sliderId, direction) {
  return {
    type: 'UPDATE_ACTIVE_SLIDE',
    response: {
      direction: direction,
      sliderId: sliderId
    }
  };
};

var updateActiveSlide = function updateActiveSlide(sliderId, direction) {
  return function (dispatch) {
    return dispatch(updateSlide(sliderId, direction));
  };
};

exports.updateActiveSlide = updateActiveSlide;

var updateGalleryVisibility = function updateGalleryVisibility(sliderId, isVisible, type) {
  return {
    type: 'UPDATE_GALLERY_VISIBILITY',
    response: {
      sliderId: sliderId,
      isVisible: isVisible,
      type: type
    }
  };
};

var toggleGallery = function toggleGallery(sliderId, isVisible, type) {
  return function (dispatch) {
    return dispatch(updateGalleryVisibility(sliderId, isVisible, type));
  };
}; // Search Action Creator 


exports.toggleGallery = toggleGallery;

var requestSearch = function requestSearch() {
  return {
    type: 'REQUEST_SEARCH'
  };
};

var recieveSearch = function recieveSearch(payload, query) {
  return {
    type: 'RECIEVE_SEARCH',
    response: payload,
    query: query
  };
};

var fetchSearchResults = function fetchSearchResults(query) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestSearch());

    if ((0, _reducers.isSearchFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchSearchResults(query).then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveSearch(response, query));
    });
  };
}; // Filter Action Creator


exports.fetchSearchResults = fetchSearchResults;

var requestFilters = function requestFilters() {
  return {
    type: 'REQUEST_FILTERS'
  };
};

var recieveFilters = function recieveFilters(payload) {
  return {
    type: 'RECIEVE_FILTERS',
    response: payload
  };
};

var fetchFilters = function fetchFilters() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestFilters);

    if ((0, _reducers.isSearchFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchFilters().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveFilters(response));
    });
  };
};

exports.fetchFilters = fetchFilters;

var updateFilterState = function updateFilterState(id) {
  return {
    type: 'UPDATE_FILTER',
    response: {
      id: id
    }
  };
};

var clearFilters = function clearFilters() {
  return {
    type: 'CLEAR_FILTERS'
  };
};

var updateFilter = function updateFilter(id) {
  return function (dispatch) {
    return dispatch(updateFilterState(id));
  };
};

exports.updateFilter = updateFilter;

var clearAllFilters = function clearAllFilters() {
  return function (dispatch) {
    return dispatch(clearFilters());
  };
}; // Pratctice Action Creator 


exports.clearAllFilters = clearAllFilters;

var requestPractice = function requestPractice() {
  return {
    type: 'REQUEST_PRACTICE'
  };
};

var recievePractice = function recievePractice(payload) {
  return {
    type: 'RECIEVE_PRACTICE',
    response: payload
  };
};

var fetchPractice = function fetchPractice() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestPractice);

    if ((0, _reducers.isPracticeFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchPractice().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recievePractice(response));
    });
  };
};

exports.fetchPractice = fetchPractice;

var requestCareer = function requestCareer() {
  return {
    type: 'REQUEST_CAREER'
  };
};

var recieveCareer = function recieveCareer(payload) {
  return {
    type: 'RECIEVE_CAREER',
    response: payload
  };
};

var fetchCareer = function fetchCareer(id) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestCareer());

    if ((0, _reducers.isCareerFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchPost(id).then(function (response) {
      dispatch(recieveCareer(response));
    });
  };
};

exports.fetchCareer = fetchCareer;

var requestTeamMember = function requestTeamMember() {
  return {
    type: 'REQUEST_TEAMMEMBER'
  };
};

var recieveTeamMember = function recieveTeamMember(payload) {
  return {
    type: 'RECIEVE_TEAMMEMBER',
    response: payload
  };
};

var fetchTeamMember = function fetchTeamMember(id) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestTeamMember());

    if ((0, _reducers.isTeamMemberFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchPost(id).then(function (response) {
      dispatch(recieveTeamMember(response));
    });
  };
};

exports.fetchTeamMember = fetchTeamMember;

var requestAuthorRelated = function requestAuthorRelated() {
  return {
    type: 'REQUEST_AUTHOR_RELATED'
  };
};

var recieveAuthorRelated = function recieveAuthorRelated(payload, name) {
  return {
    type: 'RECIEVE_AUTHOR_RELATED',
    response: payload,
    authorName: name
  };
};

var fetchAuthorRelated = function fetchAuthorRelated(name) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestAuthorRelated());

    if ((0, _reducers.isRelatedAuthorPostsFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchRelatedAuthorPosts(name).then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveAuthorRelated(response, name));
    });
  };
};

exports.fetchAuthorRelated = fetchAuthorRelated;

var requestContact = function requestContact() {
  return {
    type: 'REQUEST_CONTACT'
  };
};

var recieveContact = function recieveContact(payload) {
  return {
    type: 'RECIEVE_CONTACT',
    response: payload
  };
};

var fetchContact = function fetchContact() {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(requestContact);

    if ((0, _reducers.isContactFetching)(state)) {
      return Promise.resolve();
    }

    return api.fetchContact().then(function (response) {
      return response;
    }).then(function (response) {
      dispatch(recieveContact(response));
    });
  };
};

exports.fetchContact = fetchContact;