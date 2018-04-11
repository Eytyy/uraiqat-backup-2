import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import PostDefault from '../../components/home/default/PostDefault';

import { fetchAuthorRelated } from '../../actions';
import { getRelatedAuthorPosts, isRelatedAuthorPostsFetching } from '../../reducers';

class RelatedAuthorPosts extends Component { //eslint-disable-line
	static fetchData(store, name) {
		return store.dispatch(fetchAuthorRelated(name));
	}
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
	const { id, postID } = ownProps;
	return {
		content: getRelatedAuthorPosts(state, id, postID),
		isFetching: isRelatedAuthorPostsFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAuthorRelated }, dispatch);

RelatedAuthorPosts.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	fetchAuthorRelated: PropTypes.func.isRequired,
};

RelatedAuthorPosts.defaultProps = {
	content: [],
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(RelatedAuthorPosts));