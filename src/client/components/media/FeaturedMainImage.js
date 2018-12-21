import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class FeaturedMainImage extends Component {
	to = null;
	state = {
		imagesLoaded: false,
		tick: 0,
	};
	isStillMounted = true;
	ShouldOthersbeVisible = false;

	reloadPattern = () => {
		this.setState({
			tick: this.state.tick + 1
		});
	}

	checkImage(src, w) {
		const url = `${src}?w=${w}`
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

	loadImages() {
		const { main, drawing, diagram, craft } = this.props;
		this.to = window.setInterval(this.reloadPattern, 1000);
		if (this.ShouldOthersbeVisible) {
			Promise.all([
				this.checkImage(main.fields.file.url, 600).then(),
				this.checkImage(drawing.fields.file.url, 300).then(),
				this.checkImage(diagram.fields.file.url, 200).then(),
				this.checkImage(craft.fields.file.url, 200).then(),
			]).then(() => {
				if (this.isStillMounted) {
					window.clearInterval(this.to);
					this.setState({
						imagesLoaded: true,
						tick: 0,
					});
				}
			}).catch(error => console.log(error));
		} else {
			this.checkImage(main.fields.file.url, 400).then(() => {
				if (this.isStillMounted) {
					window.clearInterval(this.to);
					this.setState({
						imagesLoaded: true,
						tick: 0,
					});
				}
			}).catch(error => console.log(error));
		}

	}
	componentDidMount() {
		this.loadImages();
		this.ShouldOthersbeVisible = window.innerWidth >= 1024;
	}
	componentWillUnmount() {
		this.isStillMounted = false;
		window.clearInterval(this.to);
	}
	render() {
		const { main, drawing, diagram, craft } = this.props;
		return(
			<>
				{ main &&
				<div className="project-preview__image project-preview__image--main">
					<div style={{backgroundImage: `url(${main.fields.file.url}?fl=progressive&w=600)`}} className="preview-image" />
				</div>
				}
				{ this.ShouldOthersbeVisible && drawing &&
				<div className="project-preview__image project-preview__image--drawing">
					<div style={{backgroundImage: `url(${drawing.fields.file.url}?fl=progressive&w=300)`}} className="preview-image project-preview__image project-preview__image--drawing" />
				</div>
				}
				{this.ShouldOthersbeVisible && <div className="project-preview__thumbs__right-col">
					{diagram &&
					<div className="project-preview__image project-preview__image--diagram">
						<div style={{backgroundImage: `url(${diagram.fields.file.url}?fl=progressive&w=200)`}} className="preview-image"/>
					</div>
					}
					{craft &&
					<div className="project-preview__image project-preview__image--craft">
						<div style={{backgroundImage: `url(${craft.fields.file.url}?fl=progressive&w=200)`}} className="preview-image" />
					</div>
					}
				</div>}
				<div className={`preview-pattern ${this.state.imagesLoaded ? 'preview-pattern--hidden' : ''}`}>
					<Pattern sliderName={'project-main-thumb--featured'} />
				</div>
			</>
		);
	}
}

export default FeaturedMainImage;