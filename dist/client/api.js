'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;

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