import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class ImageComponent extends Component {
	state = {
		imageIsLoaded: false,
		tick: 0,
	};
	to = null;
	max = null;
	isStillMounted = true;

	reloadPattern = () => {
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

	setMax() {
		this.max = window.setTimeout(() => {
			window.clearInterval(this.to);
			this.setState({
				imageIsLoaded: true,
				tick: 0,
			});
		}, 5000);
	}

	loadImage() {
		this.to = window.setInterval(this.reloadPattern, 1000);
		this.checkImage().then(() => {
			if (this.isStillMounted) {
				window.clearInterval(this.to);
				this.setState({
					imageIsLoaded: true,
					tick: 0,
				});
			}			
		}).catch(() => {
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
		this.setMax();
	}
	componentWillUnmount() {
		this.isStillMounted = false;
		window.clearInterval(this.to);
		window.clearTimeout(this.max);
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
				<div className="preview-image" style={style}></div>
				<div className={`preview-pattern ${classes} ${this.state.imageIsLoaded ? 'preview-pattern--hidden' : ''}`}>
					<Pattern sliderName={patternId} />
				</div>
			</div>
		);
	}
}

export default ImageComponent;