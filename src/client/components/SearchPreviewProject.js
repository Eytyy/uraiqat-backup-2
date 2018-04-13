import React from 'react';
import { Link } from 'react-router-dom';

import Preview from './Preview';
import PostMediaImage from './home/PostMediaImage';
import PostMediaVideo from './home/PostMediaVideo';

const SearchPreviewProject = ({ content, type }) => {
	const { previewMainThumbnail, id, year, title } = content;
	// determine whether the media content is a video or an image
	const isMediaOfTypeImage = RegExp('image').test(previewMainThumbnail.fields.file.contentType);
	if (!isMediaOfTypeImage) {
		return (
			<Preview classList="post-preview post-preview--video post-preview--default post-preview--landscape">
				<Link className="post-preview__link" to={`/${type === 'work' ? 'work' : 'atelier'}/${id}`}>
					{ year && type === 'work' && <div className="post-preview__meta">{year}{' -> '}{'Work'}</div> }
					{ type !== 'work' && <div className="post-preview__meta">{'Atelier'}</div> }
				</Link>
				<PostMediaVideo content={previewMainThumbnail} patternId="default-post--video"  />
				<Link className="post-preview__link" to={`/${type === 'work' ? 'work' : 'atelier'}/${id}`}>
					<div className="post-preview__content">
						{ title && <h2 className="post-preview__title title">{title}</h2> }
					</div>
				</Link>
			</Preview>
		);
	}
	else {
		return (
			<Preview classList="post-preview post-preview--default post-preview--landscape">
				<Link className="post-preview__link" to={`/${type === 'work' ? 'work' : 'atelier'}/${id}`}>
					{ year && type === 'work' && <div className="post-preview__meta">{year}{' -> '}{'Work'}</div> }
					{ type !== 'work' && <div className="post-preview__meta">{'Atelier'}</div> }
					<PostMediaImage orientation="landscape" patternId="default-post" content={previewMainThumbnail} />
					{ title && <h2 className="post-preview__title title">{title}</h2> }
				</Link>
			</Preview>
		);
	}
};

export default SearchPreviewProject;