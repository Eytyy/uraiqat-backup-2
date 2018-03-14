import React from 'react';

const PostFeatured = (content) => {
	const { title, category, date, previewImagevideo, previewText } = content;
	return (
		<article className="post-preview post-preview--featured">
			<img src={previewImagevideo.fields.file.url} alt={previewImagevideo.fields.title} />
			<div className="post-preview__meta">{category.fields.title}{'->'}{date}</div>
			<h2 className="post-preview__title">{title}</h2>
			{previewText && <p>{previewText}</p>}
		</article>
	);
};

export default PostFeatured;