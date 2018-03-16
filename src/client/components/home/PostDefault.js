import React from 'react';
import { Link } from 'react-router-dom';

import ImageComponent from '../ImageComponent';
import Preview from '../Preview';

import { formatDate } from '../../helpers';

const PostDefault = (content) => {
	const { title, category, date, previewImagevideo, previewText, id } = content;
	if (previewImagevideo) {
		const imgSize = previewImagevideo.fields.file.details.image;
		const orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
		if (orientation === 'portrait') {
			return (
				<Preview classList={`post-preview post-preview--default post-preview--${orientation}`}>
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<ImageComponent src={previewImagevideo.fields.file.url} title={previewImagevideo.fields.title} />
						<div className="post-preview__content">
							{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
							{ title && <h2 className="post-preview__title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</Link>
				</Preview>
			);
		} else {
			return (
				<Preview classList={`post-preview post-preview--default post-preview--${orientation}`}>
					<Link className="post-preview__link" to={`/journal/${id}`}>
						{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
						<ImageComponent src={previewImagevideo.fields.file.url} title={previewImagevideo.fields.title} />
						{ title && <h2 className="post-preview__title">{title}</h2> }
						{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
					</Link>
				</Preview>
			);
		}
	} else {
		return (
			<Preview classList="post-preview post-preview--default">
				<Link className="post-preview__link" to={`/journal/${id}`}>
					{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
					{ title && <h2 className="post-preview__title">{title}</h2> }
					{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
				</Link>
			</Preview>
		);
	}
};

export default PostDefault;