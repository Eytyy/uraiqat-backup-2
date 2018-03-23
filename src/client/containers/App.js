import React, { Component } from 'react';
import { connect } from 'react-redux';

import { renderRoutes } from 'react-router-config';

import ScrollToTop from './ScrollToTop';
import Gallery from './Gallery';
import Menu from './navigation/menu';
import Footer from '../components/Footer';

class App extends Component {
	render() {
		const { route } = this.props;
		return (
			<div className="container__inner">
				<Gallery />
				<ScrollToTop>
					<header className="website-header">
						<div className="website-header__inner wrapper">
							<Menu />
						</div>
					</header>
					<main role="main" className="main-content">
						{ renderRoutes(route.routes) }
					</main>
					<Footer />
				</ScrollToTop>
			
			</div>
		);
	}
}

export default connect()(App);