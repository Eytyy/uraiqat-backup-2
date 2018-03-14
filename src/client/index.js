import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers';
import routes from './routes';

import Styles from '../styles/main.scss'; //eslint-disable-line

const store = createStore(RootReducer, window.__INITIAL_STATE__, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<BrowserRouter>
			{ renderRoutes(routes) }
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);