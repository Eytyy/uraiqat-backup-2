import React from 'react';

const PostDefault = (content) => {
	const { title, category, date, previewImagevideo, previewText } = content;
	return (
		<article className="post-preview post-preview--default">
			{ (category || date) && <div className="post-preview__meta">{category.fields.title}{'->'}{date}</div> }
			{ previewImagevideo && <img src={previewImagevideo.fields.file.url} alt={previewImagevideo.fields.title} />}
			{ title && <h2 className="post-preview__title">{title}</h2> }
			{previewText && <p>{previewText}</p>}
		</article>
	);
};

export default PostDefault;