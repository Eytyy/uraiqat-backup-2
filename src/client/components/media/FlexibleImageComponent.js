import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class FlexibleImageComponent extends Component {
	constructor() {
		super();
		this.getContainerHeight = this.getContainerHeight.bind(this);
		this.state = {
			imageIsLoaded: false,
		};
	}
	getContainerHeight(forPattern) {
		const { content } = this.props;
		const { width, height } = content.fields.file.details.image;
		return !forPattern ?
			`${Math.floor((this.wrapper.offsetWidth / (width/height)) / 32) * 32}px`: 
			Math.floor((882 / (width/height)) / 32) * 32;
	}
	componentDidMount() {
		this.wrapper.style.height = this.getContainerHeight(false);
		this.loadImage();
	}
	checkImage() {
		const { content, imagesQuery } = this.props;
		const url = typeof imagesQuery !== 'undefined' ? `${content.fields.file.url}${imagesQuery}` : content.fields.file.url;
		return new Promise(resolve => {
			const img = new Image();
			const imgSrc = url;
			img.onload = () => {
				return resolve({imgSrc, status: 'ok'});
			};
			img.onerror = () => resolve({imgSrc, status: 'error'});
			img.src = imgSrc;
		});
	}
	loadImage() {
		this.checkImage().then(() => {
			this.setState({
				imageIsLoaded: true,
			});
		});
	}
	render() {
		const { content } = this.props;
		const { description, file } = content.fields;
		return (
			<div ref={(el) => this.wrapper = el}className="post__media post__media--image">
				<div className="post__media__image">
					<img src={file.url} />
				</div>
				<div className={`post__image__pattern ${this.state.imageIsLoaded ? 'post__image__pattern--hidden' : ''}`}>
					<Pattern sliderName={'post-media--image'} patternconfig={{w: 900, h: this.getContainerHeight(true) + 32 }}/>
				</div>
				{ description && <div className="post__media__caption">{description}</div>}
			</div>
		);
	}
}

export default FlexibleImageComponent; 