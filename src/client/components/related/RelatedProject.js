import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Preview from '../../components/Preview';
import PostMediaImage from '../home/PostMediaImage';

import { formatDate } from '../../helpers';

class RelatedProject extends Component {
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
		const { content, id } = this.props;
		const { previewMainThumbnail, year, projectName} = content;
		// determine whether the media content is a video or an image
		return (
			<Preview classList="post-preview post-preview--default post-preview--landscape related-item related-item--project">
				<Link className="post-preview__link" to={`/work/${id}`}>
					{ year && <div className="post-preview__meta">{formatDate(year)}{' -> '}Project</div> }
					<PostMediaImage updateOrientation={this.updateOrientation} content={previewMainThumbnail} />
					{ projectName && <h3 className="post-preview__title title">{projectName}{' -> '}</h3> }
				</Link>
			</Preview>
		);
	}
}

export default RelatedProject;