import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';
import { isPostsFetching, getPosts } from '../reducers';

import Landing from '../components/landing/Landing';

class Home extends Component {
	static fetchData(store) {
		return store.dispatch(fetchPosts());
	}
	componentDidMount() {
		const { fetchPosts } = this.props;
		return fetchPosts();
	}
	render() {
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || content.length === 0 ) {
			return <div>Loading Posts..</div>;
		}
		return <Landing content={content} page='journal'></Landing>;
	}
}

Home.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isPostsFetching(state),
	content: getPosts(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPosts }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);