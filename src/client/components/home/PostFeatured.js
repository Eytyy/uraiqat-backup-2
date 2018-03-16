import React from 'react';
import { Link } from 'react-router-dom';

import ImageComponent from '../ImageComponent';
import PostFeaturedText from './PostFeaturedText';
import Preview from '../Preview';


const PostFeatured = (content) => {
	const { previewImagevideo, id } = content;
	if (previewImagevideo) {
		const imgSize = previewImagevideo.fields.file.details.image;
		const orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
		return (
			<Preview classList={`post-preview post-preview--featured post-preview--${orientation}`}>
				<Link className="post-preview__link" to={`/journal/${id}`}>
					<ImageComponent src={previewImagevideo.fields.file.url} title={previewImagevideo.fields.title} />
					<PostFeaturedText {...content} />
				</Link>
			</Preview>
		);
	} else {
		return (
			<Preview classList="post-preview post-preview--featured">
				<Link className="post-preview__link" to={`/journal/${id}`}>
					<PostFeaturedText {...content} />
				</Link>
			</Preview>
		);
	}
};

export default PostFeatured;