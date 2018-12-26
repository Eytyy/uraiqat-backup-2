"use strict";

var _express = _interopRequireDefault(require("express"));

var _request = _interopRequireDefault(require("request"));

var _react = _interopRequireWildcard(require("react"));

var _server = require("react-dom/server");

var _StaticRouter = _interopRequireDefault(require("react-router-dom/StaticRouter"));

var _reactRouterConfig = require("react-router-config");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _routes = _interopRequireDefault(require("../client/routes"));

var _reducers = _interopRequireDefault(require("../client/reducers"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var router = _express.default.Router();
/*eslint-enable*/


var store = (0, _redux.createStore)(_reducers.default, (0, _redux.applyMiddleware)(_reduxThunk.default));
router.get('/', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref) {
    var route = _ref.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Uraiqat Architects',
      data: payload,
      content: content
    });
  });
});
router.get('/search', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref2) {
    var route = _ref2.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Uraiqat Architects',
      data: payload,
      content: content
    });
  });
});
router.get('/practice', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref3) {
    var route = _ref3.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Practice',
      data: payload,
      content: content
    });
  });
});
router.get('/work', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref4) {
    var route = _ref4.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Work',
      data: payload,
      content: content
    });
  });
});
router.get('/work/:id', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref5) {
    var route = _ref5.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    var obj = payload.projects.ById["".concat(req.params.id)];
    var imageUrl = typeof obj.socialMediaImage === 'undefined' ? obj.previewMainThumbnail.fields.file.url : obj.socialMediaImage.fields.file.url;
    var description = obj.aboutTheProject;
    res.render('index', {
      title: "Work | ".concat(obj.title),
      desc: "<meta property=\"description\" content=\"".concat(description, "\" />"),
      ogTitle: "<meta property=\"og:title\" content=\"Work | ".concat(obj.title, "\" />"),
      ogURL: "<meta property=\"og:url\" content=\"".concat(req.url, "\" />"),
      ogImg: "<meta property=\"og:image\" content=\"".concat(imageUrl, "\" />"),
      ogDesc: "<meta property=\"og:description\" content=\"".concat(description, "\" />"),
      data: payload,
      content: content
    });
  });
});

var AtelierPage = function AtelierPage(req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref6) {
    var route = _ref6.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Atelier',
      data: payload,
      content: content
    });
  });
};

router.get('/atelier', AtelierPage);
router.get('/atelier/about', AtelierPage);
router.get('/atelier/:id', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref7) {
    var route = _ref7.route,
        match = _ref7.match;
    var fetchData = route.component.fetchData;
    var val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
    return val;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    var obj = payload.atelier.ById["".concat(req.params.id)];
    var imageUrl = typeof obj.socialMediaImage === 'undefined' ? obj.previewMainThumbnail.fields.file.url : obj.socialMediaImage.fields.file.url;
    var description = obj.description;
    res.render('index', {
      title: "Work | ".concat(obj.title),
      desc: '<meta property="description" content="' + description + '" />',
      ogTitle: "<meta property=\"og:title\" content=\"Work | ".concat(obj.title, "\" />"),
      ogURL: "<meta property=\"og:url\" content=\"".concat(req.url, "\" />"),
      ogImg: "<meta property=\"og:image\" content=\"".concat(imageUrl, "\" />"),
      ogDesc: "<meta property=\"og:description\" content=\"".concat(description, "\" />"),
      data: payload,
      content: content
    });
  });
});
router.get('/contact', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref8) {
    var route = _ref8.route;
    var fetchData = route.component.fetchData;
    var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
    return data;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    res.render('index', {
      title: 'Contact',
      data: payload,
      content: content
    });
  });
});
router.get('/journal/:id', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref9) {
    var route = _ref9.route,
        match = _ref9.match;
    var fetchData = route.component.fetchData;
    var val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
    return val;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    var obj = payload.posts.ById["".concat(req.params.id)];
    var imageUrl = typeof obj.socialMediaImage === 'undefined' ? '' : obj.socialMediaImage.fields.file.url;
    var description = typeof obj.socialMediaDescription === 'undefined' ? obj.previewText : obj.socialMediaDescription;
    res.render('index', {
      title: "Post | ".concat(obj.title),
      ogTitle: "<meta property=\"og:title\" content=\"Work | ".concat(obj.title, "\" />"),
      desc: '<meta property="description" content="' + description + '" />',
      ogURL: "<meta property=\"og:url\" content=\"".concat(req.url, "\" />"),
      ogImg: "<meta property=\"og:image\" content=\"".concat(imageUrl, "\" />"),
      ogDesc: "<meta property=\"og:description\" content=\"".concat(description, "\" />"),
      data: payload,
      content: content
    });
  });
});
router.get('/team/:id', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref10) {
    var route = _ref10.route,
        match = _ref10.match;
    var fetchData = route.component.fetchData;
    var val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
    return val;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    var obj = payload.practice.TeamByID["".concat(req.params.id)];
    var image = obj.profileImagevideo.fields.file.url;
    res.render('index', {
      title: "Team Member | ".concat(obj.name),
      desc: '<meta property="description" content="' + obj.about + '" />',
      ogURL: "<meta property=\"og:url\" content=\"".concat(req.url, "\" />"),
      ogTitle: "<meta property=\"og:title\" content=\"Team | ".concat(obj.name, "\" />"),
      ogImg: "<meta property=\"og:image\" content=\"".concat(image, "\" />"),
      ogDesc: "<meta property=\"og:description\" content=\"".concat(obj.about, "\" />"),
      data: payload,
      content: content
    });
  });
});
router.get('/careers/:id', function (req, res) {
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.default, req.url);
  var promises = branch.map(function (_ref11) {
    var route = _ref11.route,
        match = _ref11.match;
    var fetchData = route.component.fetchData;
    var val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
    return val;
  });
  return Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_StaticRouter.default, {
      location: req.url,
      context: context
    }, (0, _reactRouterConfig.renderRoutes)(_routes.default))));

    if (context.status === 404) {
      res.status(404);
    }

    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    var payload = store.getState();
    var obj = payload.posts.ById["".concat(req.params.id)]; // ogURL: `<meta property="og:url" content="${req.url}" />`,
    // ogTitle:`<meta property="og:title" content="Post | ${obj.title}" />`,
    // ogDesc: `<meta property="og:description" content="${obj.keyFeatures[0]}" />`,
    // ogImg: `<meta property="og:image" content="${obj.module[0].fields.images[0].fields.file.url}" />`,

    res.render('index', {
      title: "Career | ",
      data: payload,
      content: content
    });
  });
});
module.exports = router;