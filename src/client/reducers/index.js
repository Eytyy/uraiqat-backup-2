import { combineReducers } from 'redux';
import posts, * as fromHome from './home';
import projects, * as fromWork from './work';


const RootReducer = combineReducers({
	posts,
	projects
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

export default RootReducer;