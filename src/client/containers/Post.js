import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchPost } from '../actions';
import { getPost, isPostFetching } from '../reducers';

class Post extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchPost(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}

	fetchData() {
		const { fetchPost, match } = this.props;
		const id = match.params.id;
		fetchPost(id);
	}
	render() {
		const { content, isFetching } = this.props;
		if (isFetching || typeof content.id === 'undefined') {
			return <div>Loading post...</div>;
		}
		return (
			<article className="post">
				<h1 className="press-entry__title main-title">{content.title}</h1>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getPost(state, id),
		isFetching: isPostFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPost }, dispatch);

Post.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchPost: PropTypes.func.isRequired,
};

Post.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Post));