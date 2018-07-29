import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';
import { getAppConfigs } from '../reducers';

import ScrollToTop from './ScrollToTop';
import Gallery from './Gallery';
import Header from './navigation/Header';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.status = {
			blendMode: true,
		};
	}
	componentDidMount() {
		const { updateApp } = this.props;
		if (window.getComputedStyle(document.body).mixBlendMode !== undefined && this.status.blendMode) {
			this.setState({
				blendMode: false,
			});
		}
		if (document.querySelector('.uLink').offsetWidth === 12) {
			updateApp({
				adjustForMobile: true,
			});
		}
	}
	render() {
		const { route, location, configs } = this.props;
		const pageName = location.pathname.split('/')[1] || 'front';
		return (
			<div className={`container__inner ${pageName} ${this.status.blendMode ? 'blendMode' : 'no-blendMode'}`}>
				<span className="fake">U</span>
				<Gallery />
				<ScrollToTop>
					<Header />
					<main role="main" className="main-content">
						{ renderRoutes(route.routes) }
					</main>
					<Footer adjust={configs.adjustForMobile} />
				</ScrollToTop>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		configs: getAppConfigs(state)
	};
};


export default withRouter(connect(
	mapStateToProps,
	actions
)(App));