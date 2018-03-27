import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class ImageComponent extends Component {
	constructor() {
		super();
		this.state = {
			imageIsLoaded: false,
		};
	}
	checkImage() {
		const { src, imagesQuery } = this.props;
		const url = typeof imagesQuery !== 'undefined' ? `${src}${imagesQuery}` : src;
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
	componentDidMount() {
		this.loadImage();
	}
	render() {
		const { src, classList, imagesQuery, patternId } = this.props;
		const url = typeof imagesQuery !== 'undefined' ? `${src}${imagesQuery}` : src;
		const style = {
			backgroundImage: `url('${url}')`,
		};
		const classes = typeof classList !== 'undefined' ? classList : '';
		return this.state.imageIsLoaded ?
			<div className={`preview-image ${classes}`} style={style}></div> :
			<div className={`preview-pattern ${classes}`}>
				<Pattern sliderName={patternId} />
			</div>;
	}
}

export default ImageComponent;