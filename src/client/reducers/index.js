import { combineReducers } from 'redux';
import posts, * as fromHome from './home';
import projects, * as fromWork from './work';
import related, * as fromRelated from './related';
import gallery, * as fromGallery from './gallery';
import search, * as fromSearch from './search';

const RootReducer = combineReducers({
	posts,
	projects,
	related,
	gallery,
	search
});

// Home Selectors
export const isPostsFetching = state => fromHome.getIsFetching(state.posts);

export const getPosts = state => {
	const featuredContent = fromHome.getAll(state.posts).featuredContent
		.map(id => fromHome.getPost(state.posts, id));
	const mainContent = fromHome.getAll(state.posts).mainContent
		.map(id => fromHome.getPost(state.posts, id));
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

export const getProjects = state => {
	const featuredContent = fromWork.getAll(state.projects).featuredContent
		.map(id => fromWork.getProject(state.projects, id));
	const mainContent = fromWork.getAll(state.projects).mainContent
		.map(id => fromWork.getProject(state.projects, id));
	return {
		featuredContent,
		mainContent
	};
};

export const isProjectFetching = state => fromWork.getIsFetching(state.projects);

export const getProject = (state, id) => {
	return fromWork.getProject(state.projects, id);
};

// Related Selectors
export const isRelatedFetching = state => fromRelated.getIsFetching(state.related);

export const getRelatedPosts = (state, id, postID) => {
	const content = fromRelated.getPost(state.related, id);
	return typeof content === 'undefined' ? [] : content.filter(({sys}) => sys.id !== postID);
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

export default RootReducer;