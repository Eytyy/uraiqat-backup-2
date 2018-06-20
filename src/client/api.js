import { createClient } from 'contentful';

const spaceId = 'ibh0p2gj0eak';
const deliveryAccessToken = '2c1245eace1a8944181227c684940f0566c383b61edad0527b174c28d035e602';

const client = createClient({
	space: spaceId,
	accessToken: deliveryAccessToken,
	host: 'cdn.contentful.com',
});


export function fetchPosts() {
	return client.getEntries({
		content_type: 'landingPage',
		'fields.pageTitle': 'Home/Journal',
		include: 3
	}).then(payload => payload.items);
}

export function fetchPost(id) {
	return client.getEntries({ 'sys.id': id }).then((payload) => {
		if (!payload.items.length) {
			throw new Error('Entry not found');
		}
		return payload.items[0];
	});
}

export function fetchProjects() {
	return client.getEntries({
		content_type: 'landingPage',
		'fields.pageTitle': 'Work',
		include: 3
	}).then(payload => payload.items);
}

export function fetchAtelierProjects() {
	return client.getEntries({
		content_type: 'landingPageType2',
		'fields.title': 'Atelier',
		include: 3
	}).then(payload => payload.items);
}

export function fetchRelatedPosts(id) {
	return client.getEntries({
		content_type: 'post',
		'fields.relatedProject.sys.id': id
	}).then(payload => payload.items);
}

export function fetchRelatedAuthorPosts(name) {
	const author = client.getEntries({
		content_type: 'author',
		'fields.title': name
	}).then(payload => {
		return payload.items[0].sys.id;
	}).then(id => {
		return client.getEntries({
			content_type: 'post',
			'fields.author.sys.id': id
		});
	}).then(payload => payload.items);
	
	return author;
}

export function fetchSearchResults(query) {
	return client.getEntries({
		'query': query
	})
		.then((response) => response.items.filter(({ sys }) => sys.contentType.sys.id === 'work' || sys.contentType.sys.id === 'post' || sys.contentType.sys.id === 'atelierProject' ))
		.catch(console.error);
}

export function fetchFilters() {
	return client.getEntries({
		'content_type': 'postCategory',
		include: 3
	}).then(response => response.items).catch(console.error);
}

export function fetchPractice() {
	return client.getEntries({
		content_type: 'practiceLanding',
		'fields.title': 'Practice',
		include: 3
	}).then(payload => payload.items[0]);
}

export function fetchContact() {
	return client.getEntries({
		content_type: 'contactLanding',
		'fields.title': 'Contact',
		include: 3
	}).then(payload => payload.items[0]);
}