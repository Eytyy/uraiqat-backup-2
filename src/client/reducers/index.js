import { combineReducers } from 'redux';
import app,  * as fromApp from './app';
import posts, * as fromHome from './home';
import projects, * as fromWork from './work';
import atelier, * as fromAtelier from './atelier';
import related, * as fromRelated from './related';
import gallery, * as fromGallery from './gallery';
import search, * as fromSearch from './search';
import practice, * as fromPractice from './practice';
import contact, * as fromContact from './contact';

const RootReducer = combineReducers({
	app,
	posts,
	projects,
	atelier,
	related,
	gallery,
	search,
	practice,
	contact
});

// App Selectors

export const getAppConfigs = state => fromApp.getConfigs(state.app);
// Home Selectors
export const isPostsFetching = state => fromHome.getIsFetching(state.posts);

export const getPosts = state => {
	const featuredContent = fromHome.getAll(state.posts).featuredContent
		.map(id => fromHome.getPost(state.posts, id));
	const mainContent = fromHome.getAll(state.posts).mainContent
		.map(id => {
			const post = fromHome.getPost(state.posts, id);
			return post;
		})
		.sort((a, b) => new Date(b.date) - new Date(a.date));
	return {
		featuredContent,
		mainContent
	};
};

export const isPostFetching = state => fromHome.getIsFetching(state.posts);

export const getPost = (state, id) => {
	return fromHome.getPost(state.posts, id);
};

// Work Selectors
export const isProjectsFetching = state => fromWork.getIsFetching(state.projects);

export const getProject = (state, id) => {
	return fromWork.getProject(state.projects, id);
};

export const getProjects = state => {
	return fromWork.getAll(state.projects)
		.map(id => getProject(state, id));
	// .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
};

export const isProjectFetching = state => fromWork.getIsFetching(state.projects);

// Atelier Selectors
export const isAtelierProjectsFetching = state => fromAtelier.getIsFetching(state.atelier);

export const getAtelierProject = (state, id) => {
	return fromAtelier.getProject(state.atelier, id);
};

export const getAtelierProjects = state => {
	return fromAtelier.getAll(state.atelier)
		.map(id => getAtelierProject(state, id));
};

export const getAtelierIntro = state => fromAtelier.getIntro(state.atelier);

export const isAtelierProjectFetching = state => fromAtelier.getIsFetching(state.atelier);

export const getNextPrev =(state, id, type) => {
	switch(type) {
	case 'journal':
		return fromHome.getNextPrev(state.posts, id);
	case 'atelier':
		return fromAtelier.getNextPrev(state.atelier, id);
	default:
		return fromWork.getNextPrev(state.projects, id);
	}
};


// Related Selectors
export const isRelatedFetching = state => fromRelated.getIsFetching(state.related);
export const getRelatedPosts = (state, id, postID) => {
	const content = fromRelated.getPost(state.related, id);
	if (typeof postID === 'undefined') {
		const rval = typeof content === 'undefined' ? [] : content;
		return rval;
	}
	return typeof content === 'undefined' ? [] : content.filter(({sys}) => sys.id !== postID);
};

export const isRelatedAuthorPostsFetching = state => fromRelated.getIsAuthorFetching(state.related);
export const getRelatedAuthorPosts = (state, name) => {
	const content = fromRelated.getAuthorPost(state.related, name);
	return typeof content === 'undefined' ? [] : content;
};

// Gallery Selectors
export const getGalleryContent = state => {
	return fromGallery.getGalleryContent(state.gallery);
};

export const getActiveSlide = (state, id) => fromGallery.getActiveSlide(state.gallery, id);

// Search Selectors
export const isSearchFetching = state => fromSearch.getIsFetching(state.search);
export const getSearchResults = (state, query) => {
	const content = fromSearch.getAll(state.search, query);
	return typeof content === 'undefined' ? [] : content;
	
};

// Filters Selectors
export const getFilters = (state) => {
	const content = fromSearch.getFilters(state.search);
	return typeof content === 'undefined' ? [] : content;
	
};

export const getActiveFilters = (state) => {
	return fromSearch.getActiveFilters(state.search);
};

export const getFilteredContent = (state) => {
	const posts = getPosts(state);
	const filters = getActiveFilters(state).map(({ title }) => title);
	if (filters.length > 0) {
		const featuredContent = posts.featuredContent.filter(({ category }) =>  filters.indexOf(category.fields.title) > -1);
		const mainContent = posts.mainContent.filter(({ category }) => filters.indexOf(category.fields.title) > -1);
		return {
			featuredContent,
			mainContent
		};
	}
	return posts;
};

export const isPracticeFetching = state => fromPractice.getIsFetching(state.practice);

export const getPracticeContent = state => {
	return fromPractice.getContent(state.practice);
};

export const isTeamMemberFetching = state => fromPractice.getIsTeamMemberFetching(state.practice);

export const getTeamMember = (state, id) => {
	return fromPractice.getTeamMember(state.practice, id);
};

export const isCareerFetching = state => fromPractice.getIsCareerFetching(state.practice);

export const getCareer = (state, id) => {
	return fromPractice.getCareer(state.practice, id);
};

export const isContactFetching = state => fromPractice.getIsFetching(state.contact);

export const getContactContent = state => {
	return fromContact.getContent(state.contact);
};



export default RootReducer;