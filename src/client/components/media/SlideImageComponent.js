import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class SlideImageComponent extends Component {
	constructor() {
		super();
		this.state = {
			imageIsLoaded: false,
		};
		this.onSlideClick = this.onSlideClick.bind(this);
		this.isStillMounted = true;
	}
	onSlideClick() {
		const { onClick, id } = this.props;
		if (this.state.imageIsLoaded) {
			onClick(id);
		}
	}
	checkImage() {
		const { content, imagesQuery } = this.props;
		return new Promise(resolve => {
			const img = new Image();
			const imgSrc = typeof imagesQuery !== 'undefined' ? 
				`${content.file.url}${imagesQuery}` : content.file.url;
			img.onload = () => {
				return resolve({imgSrc, status: 'ok'});
			};
			img.onerror = () => resolve({imgSrc, status: 'error'});
			img.src = imgSrc;
		});
	}
	loadImage() {
		this.checkImage().then(() => {
			if (this.isStillMounted) {
				this.setState({
					imageIsLoaded: true,
				});
			}			
		});
	}
	componentDidMount() {
		this.loadImage();
	}
	componentWillUnmount() {
		this.isStillMounted = false;
	}
	render() {
		const { content, imagesQuery, active, sliderName } = this.props;
		const { file, description } = content;
		const url = typeof imagesQuery !== 'undefined' ? `${file.url}${imagesQuery}` : file.url;
		const style = {
			backgroundImage: `url('${url}')`,
		};
		return (
			<div className="slide slide--image" onClick={this.onSlideClick}>
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