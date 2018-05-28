import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class ImageComponent extends Component {
	constructor() {
		super();
		this.state = {
			imageIsLoaded: false,
		};
		this.isStillMounted = true;
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
		const { src, classList, imagesQuery, patternId } = this.props;
		const url = typeof imagesQuery !== 'undefined' ? `${src}${imagesQuery}` : src;
		const style = {
			backgroundImage: `url('${url}')`,
		};
		const classes = typeof classList !== 'undefined' ? classList : '';
		return(
			<div className={`${classes}`}>
				<div className={`${this.state.imageIsLoaded ? 'preview-image' : 'preview-image--loading'}`} style={style}></div>
				<div className={`preview-pattern ${classes} ${this.state.imageIsLoaded ? 'preview-pattern--hidden' : ''}`}>
					<Pattern sliderName={patternId} />
				</div>
			</div>
		);
	}
}

export default ImageComponent;