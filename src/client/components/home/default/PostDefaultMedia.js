import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../Preview';
import PostMediaImage from '../PostMediaImage';
import PostMediaVideo from '../PostMediaVideo';
import YoutubeComponent from '../../media/YoutubeComponent';

import { formatDate } from '../../../helpers';

class PostDefaultMedia extends Component {
	render() {
		const { content } = this.props;
		const { previewThumbnail, previewThumbnailYoutube, id, category, date, title, previewText} = content;
		// determine whether the media content is a video or an image
		const isMediaOfTypeImage = RegExp('image').test(previewThumbnail.fields.file.contentType);
		if (previewThumbnailYoutube) {
			return (
				<Preview classList="post-preview post-preview--video post-preview--default post-preview--landscape">
					<Link className="post-preview__link" to={`/journal/${id}`}>
						{ (category || date) &&
							<div className="post-preview__meta">
								{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
							</div>
						}
					</Link>
					<YoutubeComponent videoId={previewThumbnailYoutube} controls={0} classes="default-post--video" />
					<Link className="post-preview__link" to={`/journal/${id}`}>
						<div className="post-preview__content">
							{ title && <h2 className="post-preview__title title">{title}</h2> }
							{ previewText && <div className="post-preview__desc"><p>{previewText}</p></div> }
						</div>
					</Link>
				</Preview>
			);
		}
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
			const query = window.innerWidth > 1440 ? 'w=800' : 'w=600';
			if (orientation === 'portrait') {
				return (
					<Preview classList="post-preview post-preview--default post-preview--portrait">
						<Link className="post-preview__link" to={`/journal/${id}`}>
							{ (category || date) &&
								<div className="post-preview__meta post-preview__meta--top">
									{formatDate(date)} <span className="post-preview__meta__title">{' -> '}{category.fields.title}</span>
								</div>
							}
							<PostMediaImage query={query} orientation={orientation} patternId="default-post" content={previewThumbnail} />
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
							<PostMediaImage query={query} orientation={orientation} patternId="default-post" content={previewThumbnail} />
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