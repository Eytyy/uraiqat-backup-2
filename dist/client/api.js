'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.fetchProjects = fetchProjects;
exports.fetchProject = fetchProject;
exports.fetchRelatedPosts = fetchRelatedPosts;
exports.fetchRelatedAuthorPosts = fetchRelatedAuthorPosts;
exports.fetchSearchResults = fetchSearchResults;
exports.fetchFilters = fetchFilters;
exports.fetchPractice = fetchPractice;

var _contentful = require('contentful');

var spaceId = 'ibh0p2gj0eak';
var deliveryAccessToken = '2c1245eace1a8944181227c684940f0566c383b61edad0527b174c28d035e602';
var apiToken = 'CFPAT-dcc445f14b6cedebbcb109ebf772bffe087c82c9f5e68a4116e566b1e38a476b';

var client = (0, _contentful.createClient)({
	space: spaceId,
	accessToken: deliveryAccessToken,
	host: 'cdn.contentful.com'
});

function fetchPosts() {
	return client.getEntries({
		content_type: 'landingPage',
		'fields.pageTitle': 'Home/Journal',
		include: 3
	}).then(function (payload) {
		return payload.items;
	});
}

function fetchPost(id) {
	return client.getEntries({ 'sys.id': id }).then(function (payload) {
		if (!payload.items.length) {
			throw new Error('Entry not found');
		}
		return payload.items[0];
	});
}

function fetchProjects() {
	return client.getEntries({
		content_type: 'landingPage',
		'fields.pageTitle': 'Work',
		include: 3
	}).then(function (payload) {
		return payload.items;
	});
}

function fetchProject(id) {
	return client.getEntries({ 'sys.id': id }).then(function (payload) {
		if (!payload.items.length) {
			throw new Error('Entry not found');
		}
		return payload.items[0];
	});
}

function fetchRelatedPosts(id) {
	return client.getEntries({
		content_type: 'post',
		'fields.relatedProject.sys.id': id
	}).then(function (payload) {
		return payload.items;
	});
}

function fetchRelatedAuthorPosts(name) {
	var author = client.getEntries({
		content_type: 'author',
		'fields.title': name
	}).then(function (payload) {
		return payload.items[0].sys.id;
	}).then(function (id) {
		return client.getEntries({
			content_type: 'post',
			'fields.author.sys.id': id
		});
	}).then(function (payload) {
		return payload.items;
	});

	return author;
}

function fetchSearchResults(query) {
	return client.getEntries({
		'query': query
	}).then(function (response) {
		return response.items.filter(function (_ref) {
			var sys = _ref.sys;
			return sys.contentType.sys.id === 'work' || sys.contentType.sys.id === 'post';
		});
	}).catch(console.error);
}

function fetchFilters() {
	return client.getEntries({
		'content_type': 'postCategory',
		include: 3
	}).then(function (response) {
		return response.items;
	}).catch(console.error);
}

function fetchPractice() {
	return client.getEntries({
		content_type: 'practiceLanding',
		'fields.title': 'Practice',
		include: 3
	}).then(function (payload) {
		return payload.items[0];
	});
}