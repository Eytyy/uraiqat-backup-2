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
		const { fetchRelated, id } = this.props;
		fetchRelated(id);
	}
	componentDidUpdate(nextProps) {
		const { fetchRelated } = this.props;
		
		if (nextProps.id !== this.props.id) {
			fetchRelated(this.props.id);
		}
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