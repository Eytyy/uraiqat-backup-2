import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';
import { isPostsFetching, getFilteredContent } from '../reducers';

import Landing from '../components/landing/Landing';
import LoadingPattern from '../components/patterns/LoadingPattern';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			intro: false,
		};
		this.to = null;
	}
	static fetchData(store) {
		return store.dispatch(fetchPosts());
	}
	hideLoader() {
		this.setState({
			intro: true
		});
	}
	fetchData() {
		return fetchPosts().then(() => {
			setTimeout(() => {
				this.hideLoader();
			}, 300);
		});
	}

	componentDidMount() {
		const { fetchPosts } = this.props;
		return fetchPosts().then(() => {
			setTimeout(() => {
				this.hideLoader();
			}, 500);
		});
	}
	render() {
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || content.length === 0 || !this.state.intro ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return <Landing content={content} page='journal'></Landing>;
	}
}

Home.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isPostsFetching(state),
	content: getFilteredContent(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPosts }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);