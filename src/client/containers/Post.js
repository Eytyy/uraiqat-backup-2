import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchPost } from '../actions';
import { getPost, isPostFetching } from '../reducers';

import PostTags from '../components/posts/PostTags';
import PostAuthors from '../components/posts/PostAuthors';
import PostContent from '../components/posts/PostContent';

import RelatedProject from '../components/related/RelatedProject';
import RelatedPosts from '../components/related/RelatedPosts';

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
	componentWillReceiveProps(nextProps) {
		const { content, isFetching } = nextProps;
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
		const { content, isFetching, match } = this.props;
		const { tags, date, author, mainContent, externalPostUrl, externalPostSource, relatedProject } = content;
		const id = match.params.id;
		if (isFetching || typeof content.id === 'undefined') {
			return <div>Loading post this will be repalced with the pattern transition</div>;
		}
		return (
			<article className="post">
				<header className="post__header">
					<h1 className="post__title main-title">{content.title}</h1>
					{ tags && <PostTags content={tags} />} {' '}
					{date && <div className="post__meta post__date">
						<span className="label">On </span>
						<span className="post__meta__item">{date}</span>
					</div>}{' '}
					{ author && <PostAuthors content={author} />}{' '}
				</header>
				{mainContent && <PostContent content={mainContent} />}
				{ externalPostUrl && <div className="post__external-link">Read full article on <a href={externalPostUrl} target="_blank">{' ->'}{externalPostSource}</a></div>}
				{
					!relatedProject ? null:
						<aside className="related-content post__related">
							{relatedProject && <RelatedProject id={relatedProject[0].sys.id} content={relatedProject[0].fields} />}
							<RelatedPosts id={relatedProject[0].sys.id} postID={id} />
						</aside>
				}
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