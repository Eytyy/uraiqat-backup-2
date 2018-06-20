import React from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';

import { formatDate } from '../../../helpers';

const PostFeaturedText = ({ content }) => {
	const { id, category, date, title, previewText, externalPostUrl, externalPostSource } = content;
	return (
		<Preview classList="post-preview post-preview--featured post-preview--text">
			<Link className="post-preview__link" to={`/journal/${id}`}>
				<div className="post-preview__content">
					<div className="post-preview__content__inner">
						{ (category || date) &&
							<div className="post-preview__meta">
								{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
							</div>
						}
						{ title && <h2 className="post-preview__title title">{title}</h2> }
						{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
					</div>
				</div>
			</Link>
			{ externalPostUrl && <div className="post-preview__external-link"><a href={externalPostUrl} rel="noopener noreferrer" target="_blank">{'->'}{externalPostSource}</a></div>}
		</Preview>
	);
};

export default PostFeaturedText;