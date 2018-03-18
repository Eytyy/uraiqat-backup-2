import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';
import PostMediaImage from '../PostMediaImage';
import PostMediaVideo from '../PostMediaVideo';

import { formatDate } from '../../../helpers';

class PostDefaultMedia extends Component {
	constructor() {
		super();
		this.state = {
			orientation: 'portrait'
		};
		this.updateOrientation = this.updateOrientation.bind(this);
	}
	updateOrientation(orientation) {
		this.setState({
			orientation,
		});
	}
	render() {
		const { content } = this.props;
		const { previewThumbnail, id, category, date, title, previewText} = content;
		// determine whether the media content is a video or an image
		const isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);

		if (!isMediaOfTypeImage) {
			return (
				<Preview classList="post-preview post-preview--video post-preview--default post-preview--landscape">
					<Link className="post-preview__link" to={`/journal/${id}`}>
						{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
					</Link>
					<PostMediaVideo content={previewThumbnail} />
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<div className="post-preview__content">
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</Link>
				</Preview>
			);
		}
		else if (this.state.orientation === 'portrait') {
			return (
				<Preview classList="post-preview post-preview--default post-preview--portrait">
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<PostMediaImage updateOrientation={this.updateOrientation} content={previewThumbnail} />
						<div className="post-preview__content">
							{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</Link>
				</Preview>
			);
		} else {
			return (
				<Preview classList="post-preview post-preview--default post-preview--landscape">
					<Link className="post-preview__link" to={`/journal/${id}`}>
						{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
						<PostMediaImage updateOrientation={this.updateOrientation} content={previewThumbnail} />
						{ title && <h2 className="post-preview__title title">{title}</h2> }
						{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
					</Link>
				</Preview>
			);
		}
	}
}

export default PostDefaultMedia;