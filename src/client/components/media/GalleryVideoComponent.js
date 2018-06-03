import React, { Component } from 'react';

class VideoComponent extends Component {
	constructor() {
		super();
		this.state = {
			playing: false,
		};
		this.playVideo = this.playVideo.bind(this);
		this.stopVideo = this.stopVideo.bind(this);
		this.toggleVideo = this.toggleVideo.bind(this);
		this.videoLoaded = this.videoLoaded.bind(this);
		this.resetVideo = this.resetVideo.bind(this);
	}
	componentDidMount() {
		this.video.addEventListener('loadeddata', this.videoLoaded, false);
		this.video.addEventListener('ended', this.resetVideo, false);
	}
	componentWillUnmount() {
		this.stopVideo();
		this.video.removeEventListener('loadeddata', this.videoLoaded);
		this.video.removeEventListener('ended', this.resetVideo);
	}
	componentWillReceiveProps(nextProps) {
		if ((nextProps.activeSlide !== nextProps.index) && this.state.playing) {
			this.stopVideo();
		}
	}
	videoLoaded() {
		this.playVideo();
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
			playing: true
		});
	}
	stopVideo() {
		this.video.pause();
		this.setState({
			playing: false
		});
	}
	resetVideo() {
		this.video.currentTime = 0;
		this.stopVideo();
	}
	render() {
		const { content, classList } = this.props;
		const url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
		const allClasses = `slide slide--video video gallery__slide ${classList} ${this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused'}`;
		return (
			<div onClick={this.toggleVideo} className={allClasses}>
				<div className="gallery__slide__content">
					<div className="video__wrapper">
						<div className="video-controls">
							<span className="video-controls__item video-state"></span>
						</div>
						<video ref={(el) => { this.video = el; }}  src={url} />
					</div>
					{ content.description &&
						<div className="slide-details">
							<div className="slide-details__content">
								<div className="slide-details__description">{ content.description }</div>
							</div>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default VideoComponent;