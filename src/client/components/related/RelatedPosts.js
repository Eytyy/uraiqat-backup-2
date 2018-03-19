import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import PostDefault from '../../components/home/default/PostDefault';

import { fetchRelated } from '../../actions';
import { getRelatedPosts, isRelatedFetching } from '../../reducers';

class RelatedPosts extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchRelated(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}
	fetchData() {
		const { fetchRelated, id } = this.props;
		fetchRelated(id);
	}
	render() {
		const { content, isFetching } = this.props;
		if (isFetching || content.length === 0) {
			return <div>Loading RelatedPosts this will be repalced with the pattern transition</div>;
		}
		return content.map(({fields, sys})=>  <PostDefault content={fields} key={sys.id} />);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { id, postID } = ownProps;
	return {
		content: getRelatedPosts(state, id, postID),
		isFetching: isRelatedFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchRelated }, dispatch);

RelatedPosts.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	fetchRelated: PropTypes.func.isRequired,
};

RelatedPosts.defaultProps = {
	content: [],
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(RelatedPosts));