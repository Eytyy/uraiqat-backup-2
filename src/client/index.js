import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import RootReducer from './reducers';
import routes from './routes';

import Styles from '../styles/main.scss'; //eslint-disable-line

const configureStore = (initialState) => {
	const middlewares = [thunk];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	return createStore(RootReducer, initialState, applyMiddleware(...middlewares));
};
const store = configureStore(window.__INITIAL_STATE__);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			{ renderRoutes(routes) }
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);