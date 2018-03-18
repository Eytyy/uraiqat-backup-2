import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';
import PostMediaImage from '../PostMediaImage';
import PostMediaVideo from '../PostMediaVideo';

import { formatDate } from '../../../helpers';

class PostFeaturedMedia extends Component {
	constructor() {
		super();
		this.state = {
			orientation: 'landscape'
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
		const { previewThumbnail, id, category, date, title, previewText } = content;
		// determine whether the media content is a video or an image
		const isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);
		if (isMediaOfTypeImage) {
			return (
				<Preview classList={`post-preview post-preview--featured post-preview--${this.state.orientation}`}>
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<PostMediaImage updateOrientation={this.updateOrientation} content={previewThumbnail} />
						<div className="post-preview__content">
							<div className="post-preview__content__inner">
								{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
								{ title && <h2 className="post-preview__title title">{title}</h2> }
								{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
							</div>
						</div>
					</Link>
				</Preview>
			);
		}
		return (
			<Preview classList="post-preview post-preview--video post-preview--featured post-preview--landscape">
				<PostMediaVideo content={previewThumbnail} />
				<Link className="post-preview__link" to={`/journal/${id}`}>
					<div className="post-preview__content">
						<div className="post-preview__content__inner">
							{ (category || date) && <div className="post-preview__meta">{formatDate(date)}{' -> '}{category.fields.title}</div> }
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</div>
				</Link>
			</Preview>
		);
	}
}

export default PostFeaturedMedia;