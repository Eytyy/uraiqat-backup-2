import React, { Component } from 'react';
import RelatedProject from '../../components/related/RelatedProject';
import RelatedPosts from '../../components/related/RelatedPosts';

class PostRelated extends Component {
	render() {
		const { relatedProject, postID } = this.props;
		return (
			<aside className="related-content post__related">
				{relatedProject && <RelatedProject id={relatedProject[0].sys.id} content={relatedProject[0].fields} />}
				<RelatedPosts id={relatedProject[0].sys.id} postID={postID} />
			</aside>
		);
	}
}

export default PostRelated;