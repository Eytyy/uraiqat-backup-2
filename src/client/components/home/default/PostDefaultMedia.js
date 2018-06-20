import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';
import PostMediaImage from '../PostMediaImage';
import PostMediaVideo from '../PostMediaVideo';

import { formatDate } from '../../../helpers';

class PostDefaultMedia extends Component {
	render() {
		const { content } = this.props;
		const { previewThumbnail, id, category, date, title, previewText} = content;
		// determine whether the media content is a video or an image
		const isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);

		if (!isMediaOfTypeImage) {
			return (
				<Preview classList="post-preview post-preview--video post-preview--default post-preview--landscape">
					<Link className="post-preview__link" to={`/journal/${id}`}>
						{ (category || date) &&
							<div className="post-preview__meta">
								{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
							</div>
						}
					</Link>
					<PostMediaVideo content={previewThumbnail} patternId="default-post--video"  />
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<div className="post-preview__content">
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</Link>
				</Preview>
			);
		}
		else {
			const imgSize = previewThumbnail.fields.file.details.image;
			const orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
			if (orientation === 'portrait') {
				return (
					<Preview classList="post-preview post-preview--default post-preview--portrait">
						<Link className="post-preview__link" to={`/journal/${id}`}>
							{ (category || date) &&
								<div className="post-preview__meta post-preview__meta--top">
									{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
								</div>
							}
							<PostMediaImage orientation={orientation} patternId="default-post" content={previewThumbnail} />
							<div className="post-preview__content">
								{ (category || date) &&
									<div className="post-preview__meta post-preview__meta--bottom">
										{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
									</div>
								}
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
							{ (category || date) &&
								<div className="post-preview__meta">
									{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
								</div>
							}
							<PostMediaImage orientation={orientation} patternId="default-post" content={previewThumbnail} />
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</Link>
					</Preview>
				);
			}
		}
	}
}

export default PostDefaultMedia;