import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import * as actions from '../actions';
import { getAppConfigs } from '../reducers';

import Gallery from './Gallery';
import Header from './navigation/Header';
import Footer from '../components/Footer';

class App extends Component {
	status = {
		blendMode: true,
	}
	uLink = React.createRef()

	componentDidMount() {
		const { updateApp } = this.props;

		if (window.getComputedStyle(document.body).mixBlendMode !== undefined && this.status.blendMode) {
			this.setState({
				blendMode: false,
			});
		}
		if (this.uLink.current.offsetWidth === 12) {
			updateApp({
				adjustForMobile: true,
			});
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
		// scroll to hash position - header height
		if (this.props.location.hash && this.uLink.current) {
			const target = document.getElementById(this.props.location.hash);
			console.log(this.uLink.current.offsetHeight);
			window.scrollTo(0, this.uLink.current.offsetWidth === 14 ? target.offsetTop - (this.uLink.current.offsetHeight * 5) : target.offsetTop - (this.uLink.current.offsetHeight * 4));
		}
	}
	
	render() {
		const { route, location, configs } = this.props;
		const pageName = location.pathname.split('/')[1] || 'front';
		return (
			<div className={`container__inner ${pageName} ${this.status.blendMode ? 'blendMode' : 'no-blendMode'}`}>
				<span ref={this.uLink} className="fake">U</span>
				<Gallery />
				<Header />
				<main role="main" className="main-content">
					{ renderRoutes(route.routes) }
				</main>
				<Footer adjust={configs.adjustForMobile} />
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