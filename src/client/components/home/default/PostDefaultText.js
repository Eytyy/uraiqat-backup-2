import React from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';

import { formatDate } from '../../../helpers';

const PostDefaultText = ({ content }) => {
	const { id, category, date, title, previewText } = content;
	return (
		<Preview classList="post-preview post-preview--default">
			<Link className="post-preview__link" to={`/journal/${id}`}>
				{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
				{ title && <h2 className="post-preview__title title">{title}</h2> }
				{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
			</Link>
		</Preview>
	);
};

export default PostDefaultText;