import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

class App extends Component {
	render() {
		const { route } = this.props;
		return (
			<main>
				<header>
					<Link to="/">{'<-'}</Link>
				</header>
				{ renderRoutes(route.routes) }
			</main>
		);
	}
}

export default connect()(App);