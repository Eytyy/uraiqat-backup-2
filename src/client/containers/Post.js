import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchPosts } from '../actions';
import { getPost, isPostFetching, getNextPrev} from '../reducers';

import PostTags from '../components/posts/PostTags';
import PostAuthors from '../components/posts/PostAuthors';
import PostContent from '../components/posts/PostContent';

import RelatedProject from '../components/related/RelatedProject';
import RelatedPosts from '../components/related/RelatedPosts';

import LoadingPattern from '../components/patterns/LoadingPattern';
import InnerNav from '../components/InnerNav';

class Post extends Component { //eslint-disable-line
	static fetchData(store) {
		return store.dispatch(fetchPosts());
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
		const { fetchPosts, match } = this.props;
		const id = match.params.id;
		fetchPosts(id);
	}
	
	render() {
		const { content, innerNavContent, isFetching, match } = this.props;
		const { tags, date, author, mainContent, externalPostUrl, externalPostSource, relatedProject } = content;
		const id = match.params.id;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
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
				{ externalPostUrl && <div className="post__external-link">
					<span>Read full article on </span>
					<a href={externalPostUrl} target="_blank">
						<span>{' ->'}</span>
						<span>{externalPostSource}</span>
					</a></div>}
				{
					!relatedProject ? null:
						<aside className="related-content post__related">
							{	relatedProject && 
								<RelatedProject
									id={relatedProject[0].sys.id}
									content={relatedProject[0].fields}
									type={relatedProject[0].sys.contentType.sys.id}
								/>
							}
							<RelatedPosts id={relatedProject[0].sys.id} postID={id} />
						</aside>
				}
				<InnerNav {...innerNavContent} type="journal" />
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getPost(state, id),
		innerNavContent: getNextPrev(state, id, 'journal'),
		isFetching: isPostFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPosts }, dispatch);

Post.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchPosts: PropTypes.func.isRequired,
};

Post.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Post));