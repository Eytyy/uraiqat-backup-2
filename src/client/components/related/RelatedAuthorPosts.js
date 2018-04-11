import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import PostDefault from '../../components/home/default/PostDefault';

import * as actions from '../../actions';
import { getRelatedAuthorPosts, isRelatedAuthorPostsFetching } from '../../reducers';

class RelatedAuthorPosts extends Component { //eslint-disable-line
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}
	fetchData() {
		const { fetchAuthorRelated, name } = this.props;
		fetchAuthorRelated(name);
	}
	render() {
		const { content, isFetching } = this.props;
		if (isFetching || content.length === 0) {
			return null;
		}
		return (
			content.map(({fields, sys}) => {
				const withid = {
					...fields,
					id: sys.id,
				};
				return <PostDefault content={withid} key={sys.id} />;
			})
		);	
	}
}

const mapStateToProps = (state, ownProps) => {
	const { name } = ownProps;
	return {
		content: getRelatedAuthorPosts(state, name),
		isFetching: isRelatedAuthorPostsFetching(state),
	};
};


RelatedAuthorPosts.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	fetchAuthorRelated: PropTypes.func.isRequired,
};

RelatedAuthorPosts.defaultProps = {
	content: [],
};

export default withRouter(connect(
	mapStateToProps,
	actions
)(RelatedAuthorPosts));