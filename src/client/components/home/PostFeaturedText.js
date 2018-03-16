import React from 'react';

import { formatDate } from '../../helpers';

const PostFeaturedText = (content) => {
	const { category, date, title, previewText } = content;
	return (
		<div className="post-preview__content">
			<div className="post-preview__content__inner">
				{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
				{ title && <h2 className="post-preview__title title">{title}</h2> }
				{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
			</div>
		</div>
	);
};

export default PostFeaturedText;