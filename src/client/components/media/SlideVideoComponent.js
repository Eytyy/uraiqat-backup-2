import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class SlideVideoComponent extends Component {
	constructor() {
		super();
		this.state = {
			playing: false,
			videoIsLoaded: false,
		};
		this.isStillMounted = true;
		this.playVideo = this.playVideo.bind(this);
		this.stopVideo = this.stopVideo.bind(this);
		this.toggleVideo = this.toggleVideo.bind(this);
		this.onSlideClick = this.onSlideClick.bind(this);
		this.loadVideo = this.loadVideo.bind(this);
		this.checkVideo = this.checkVideo.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if ((nextProps.activeSlide !== nextProps.index) && this.state.playing) {
			this.stopVideo();
		}
	}
	toggleVideo() {
		if (this.state.playing) {
			this.stopVideo();
		} else {
			this.playVideo();
		}
	}
	playVideo() {
		this.video.play();
		this.setState({
			playing: true,
		});
	}
	stopVideo() {
		this.video.pause();
		this.setState({
			playing: false
		});
	}
	onSlideClick() {
		const { onClick, id } = this.props;
		if (this.state.videoIsLoaded) {
			onClick(id);
		}
	}
	checkVideo() {
		const { content } = this.props;
		const url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
		return new Promise(resolve => {
			this.video.addEventListener('loadeddata', () => resolve({url, status: 'ok'}), false);
			this.video.addEventListener('error', () => resolve({url, status: 'error'}), false);
		});
	}
	loadVideo() {
		this.checkVideo().then(() => {
			if (this.isStillMounted) {
				this.setState({
					videoIsLoaded: true,
				});
			}
		});
	}
	componentDidMount() {
		this.loadVideo();
	}
	componentWillUnmount() {
		this.isStillMounted = false;
	}
	render() {
		const { content, active, sliderName } = this.props;
		const url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
		const allClasses = `slide slide--video ${this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused'}`;
		return (
			<div className={allClasses}>
				<div onClick={this.onSlideClick} className={`video video__wrapper ${this.state.videoIsLoaded ? 'video--loaded' : 'video--loading'}`}>
					<video ref={(el) => { this.video = el; }}  src={url} />
					<div className={`preview-pattern ${this.state.videoIsLoaded ? 'preview-pattern--hidden' : ''}`}>
						<Pattern sliderName={sliderName} />
					</div>
				</div>
				{ content.description && <div className="caption">{active + 1}: {content.description}</div>}
			</div>
		);
	}
}

export default SlideVideoComponent;