import { combineReducers } from 'redux';
import posts, * as fromHome from './home';
import projects, * as fromWork from './work';


const RootReducer = combineReducers({
	posts,
	projects
});

// Home Selectors
export const isPostsFetching = state => fromHome.getIsFetching(state.posts);

export const getPosts = state => fromHome.getAll(state.posts)
	.map(id => fromHome.getPost(state.posts, id));

export const isPostFetching = state => fromHome.getIsFetching(state.posts);

export const getPost = (state, id) => {
	return fromHome.getPost(state.posts, id);
};

// Work Selectors
export const isProjectsFetching = state => fromWork.getIsFetching(state.projects);

export const getProjects = state => fromWork.getAll(state.projects)
	.map(id => fromWork.getProject(state.projects, id));

export const isProjectFetching = state => fromWork.getIsFetching(state.projects);

export const getProject = (state, id) => {
	return fromWork.getProject(state.projects, id);
};

export default RootReducer;