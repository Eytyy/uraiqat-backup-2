import React, { Component } from 'react';
import RelatedProject from '../../components/related/RelatedProject';
import RelatedPost from '../../components/related/RelatedPost';

class PostRelated extends Component {
	render() {
		const { relatedProject, relatedPosts } = this.props;
		
		return (
			<aside className="related-content post__related">
				<RelatedProject id={relatedProject[0].sys.id} content={relatedProject[0].fields} />
				<RelatedPost content={relatedPosts} />
			</aside>
		);
	}
}

export default PostRelated;