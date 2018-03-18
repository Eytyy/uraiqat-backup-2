import React from 'react';

const PostTags = ({ content }) => {
	return (
		<div className="post__meta post__categories">
			<span className="label">In </span>
			<div className="post__categories__list post__meta__item">
				{
					content.map((tag, index) =>
						<span key={`tag-${index}`} className="post__categories__list__item">{tag}{index === content.length - 1 ? '.' : ', '}</span>
					)
				}
			</div>
		</div>
	);
};

export default PostTags;