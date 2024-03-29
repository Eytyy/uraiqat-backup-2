import express from 'express';
import request from 'request';

import React, { Component } from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from '../client/routes';
import reducers from '../client/reducers';

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

const store = createStore(reducers, applyMiddleware(thunk));


router.get('/', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();
		res.render('index', {
			title: 'Uraiqat Architects',
			data: payload,
			content
		});
	});
});

router.get('/search', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();
		res.render('index', {
			title: 'Uraiqat Architects',
			data: payload,
			content
		});
	});
});

router.get('/practice', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();
		res.render('index', {
			title: 'Practice',
			data: payload,
			content
		});
	});
});

router.get('/work', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();
		res.render('index', {
			title: 'Work',
			data: payload,
			content
		});
	});
});

router.get('/work/:id', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		const payload = store.getState();
		const obj = payload.projects.ById[`${req.params.id}`];
		const imageUrl = typeof obj.socialMediaImage === 'undefined' ?
			obj.previewMainThumbnail.fields.file.url :
			obj.socialMediaImage.fields.file.url;
		const description = obj.aboutTheProject;
		res.render('index', {
			title: `Work | ${obj.title}`,
			desc: `<meta property="description" content="${description}" />`,
			ogTitle:`<meta property="og:title" content="Work | ${obj.title}" />`,
			ogURL: `<meta property="og:url" content="${req.url}" />`,
			ogImg: `<meta property="og:image" content="${imageUrl}" />`,
			ogDesc: `<meta property="og:description" content="${description}" />`,
			data: payload,
			content
		});
	});
});

const AtelierPage = (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();

		res.render('index', {
			title: 'Atelier',
			data: payload,
			content
		});
	});
}
router.get('/atelier', AtelierPage);
router.get('/atelier/portfolio', AtelierPage);


router.get('/atelier/:id', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route, match}) => {
		let fetchData = route.component.fetchData;
		const val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
		return val;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		const payload = store.getState();
		const obj = payload.atelier.ById[`${req.params.id}`];
		const imageUrl = typeof obj.socialMediaImage === 'undefined' ?
			obj.previewMainThumbnail.fields.file.url :
			obj.socialMediaImage.fields.file.url;
		const description = obj.description;

		res.render('index', {
			title: `Work | ${obj.title}`,
			desc: '<meta property="description" content="' + description + '" />',
			ogTitle:`<meta property="og:title" content="Work | ${obj.title}" />`,
			ogURL: `<meta property="og:url" content="${req.url}" />`,
			ogImg: `<meta property="og:image" content="${imageUrl}" />`,
			ogDesc: `<meta property="og:description" content="${description}" />`,
			data: payload,
			content
		});
	});
});

router.get('/contact', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route}) => {
		let fetchData = route.component.fetchData;
		let data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		let payload = store.getState();
		res.render('index', {
			title: 'Contact',
			data: payload,
			content
		});
	});
});

router.get('/journal/:id', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route, match}) => {
		let fetchData = route.component.fetchData;
		const val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
		return val;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		const payload = store.getState();
		const obj = payload.posts.ById[`${req.params.id}`];
		const imageUrl = typeof obj.socialMediaImage === 'undefined' ?
			'' :
			obj.socialMediaImage.fields.file.url;
		const description = typeof obj.socialMediaDescription === 'undefined' ?
			obj.previewText :
			obj.socialMediaDescription;

		res.render('index', {
			title: `Post | ${obj.title}`,
			ogTitle:`<meta property="og:title" content="Work | ${obj.title}" />`,
			desc: '<meta property="description" content="' + description + '" />',
			ogURL: `<meta property="og:url" content="${req.url}" />`,
			ogImg: `<meta property="og:image" content="${imageUrl}" />`,
			ogDesc: `<meta property="og:description" content="${description}" />`,
			data: payload,
			content
		});
	});
});

router.get('/team/:id', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route, match}) => {
		let fetchData = route.component.fetchData;
		const val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
		return val;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		const payload = store.getState();
		const obj = payload.practice.TeamByID[`${req.params.id}`];
		const image = obj.profileImagevideo.fields.file.url;
		res.render('index', {
			title: `Team Member | ${obj.name}`,
			desc: '<meta property="description" content="' + obj.about + '" />',
			ogURL: `<meta property="og:url" content="${req.url}" />`,
			ogTitle:`<meta property="og:title" content="Team | ${obj.name}" />`,
			ogImg: `<meta property="og:image" content="${image}" />`,
			ogDesc: `<meta property="og:description" content="${obj.about}" />`,
			data: payload,
			content
		});
	});
});

router.get('/careers/:id', (req, res) => {
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({route, match}) => {
		let fetchData = route.component.fetchData;
		const val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
		return val;
	});
	return Promise.all(promises).then(() => {
		let context = {};
		const content = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		const payload = store.getState();
		const obj = payload.posts.ById[`${req.params.id}`];
		// ogURL: `<meta property="og:url" content="${req.url}" />`,
		// ogTitle:`<meta property="og:title" content="Post | ${obj.title}" />`,
		// ogDesc: `<meta property="og:description" content="${obj.keyFeatures[0]}" />`,
		// ogImg: `<meta property="og:image" content="${obj.module[0].fields.images[0].fields.file.url}" />`,
		res.render('index', {
			title: `Career | `,
			data: payload,
			content
		});
	});
});

module.exports = router;
