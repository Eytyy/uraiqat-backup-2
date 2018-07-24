import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class ImageComponent extends Component {
	constructor() {
		super();
		this.to = null;
		this.state = {
			imageIsLoaded: false,
			tick: 0,
		};
		this.isStillMounted = true;
		this.reloadPattern = this.reloadPattern.bind(this);
	}
	reloadPattern() {
		this.setState({
			tick: this.state.tick + 1
		});
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
		this.to = window.setInterval(this.reloadPattern, 500);
		this.checkImage().then(() => {
			if (this.isStillMounted) {
				window.clearInterval(this.to);
				this.setState({
					imageIsLoaded: true,
					tick: 0,
				});
			}			
		});
	}
	componentDidMount() {
		this.loadImage();
	}
	componentWillUnmount() {
		this.isStillMounted = false;
		window.clearInterval(this.to);
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