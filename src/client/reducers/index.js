import { combineReducers } from 'redux';
import posts, * as fromHome from './home';

const RootReducer = combineReducers({
	posts,
});

export const isPostsFetching = state => fromHome.getIsFetching(state.posts);

export const getPosts = state => fromHome.getAll(state.posts)
	.map(id => fromHome.getPost(state.posts, id));

export const isPostFetching = state => fromHome.getIsFetching(state.posts);

export const getPost = (state, id) => {
	return fromHome.getPost(state.posts, id);
};

export default RootReducer;