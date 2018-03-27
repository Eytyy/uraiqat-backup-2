import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class SlideImageComponent extends Component {
	constructor() {
		super();
		this.state = {
			imageIsLoaded: false,
		};
		this.onSlideClick = this.onSlideClick.bind(this);
	}
	onSlideClick() {
		const { onClick, id } = this.props;
		onClick(id);
	}
	checkImage(image) {
		return new Promise(resolve => {
			const img = new Image();
			const imgSrc = image.file.url;
			img.onload = () => {
				return resolve({imgSrc, status: 'ok'});
			};
			img.onerror = () => resolve({imgSrc, status: 'error'});
			img.src = imgSrc;
		});
	}
	loadImage() {
		const { content } = this.props;
		this.checkImage(content).then(() => {
			this.setState({
				imageIsLoaded: true,
			});
		});
	}
	componentDidMount() {
		this.loadImage();
	}
	render() {
		const { content, imagesQuery, active, sliderName } = this.props;
		const { file, description } = content;
		const url = typeof imagesQuery !== 'undefined' ? `${file.url}${imagesQuery}` : file.url;
		const style = {
			backgroundImage: `url('${url}')`,
		};
		return (
			<div className="slide slide--image">
				<div className="slider__inner-controls" onClick={this.onSlideClick}>+ enlarge</div>
				{
					this.state.imageIsLoaded ?
						<div className="preview-image slide__image" style={style}></div> :
						<Pattern sliderName={sliderName} />
				}
				{ description && <div className="caption">{active + 1}: {description}</div>}
			</div>
		);
	}
}

export default SlideImageComponent;