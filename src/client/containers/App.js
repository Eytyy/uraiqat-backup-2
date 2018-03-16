import React, { Component } from 'react';
import { connect } from 'react-redux';

import { renderRoutes } from 'react-router-config';

import Menu from './navigation/menu';

class App extends Component {
	render() {
		const { route } = this.props;
		return (
			<div className="container__inner">
				<header className="website-header">
					<div className="website-header__inner wrapper">
						<Menu />
					</div>
				</header>
				<main role="main" className="main-content">
					{ renderRoutes(route.routes) }
				</main>
			</div>
		);
	}
}

export default connect()(App);