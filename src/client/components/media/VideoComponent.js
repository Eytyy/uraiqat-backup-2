import React, { Component } from 'react';
import Pattern from '../patterns/Pattern';

class VideoComponent extends Component {
	constructor() {
		super();
		this.state = {
			playing: false,
			videoIsLoaded: false,
		};
		this.playVideo = this.playVideo.bind(this);
		this.stopVideo = this.stopVideo.bind(this);
		this.toggleVideo = this.toggleVideo.bind(this);
		this.loadVideo = this.loadVideo.bind(this);
		this.checkVideo = this.checkVideo.bind(this);
		this.renderFirstFrame = this.renderFirstFrame.bind(this);
		this.isStillMounted = true;
	}
	toggleVideo() {
		if (this.state.playing) {
			this.stopVideo();
		} else {
			this.playVideo();
		}
		this.setState({
			playing: !this.state.playing
		});
	}
	playVideo() {
		this.video.play();
	}
	stopVideo() {
		this.video.pause();
	}
	renderFirstFrame() {
		this.video.currentTime = 1;
		this.stopVideo();
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
		}).then(() => {
			// this.renderFirstFrame();
		});
	}
	componentDidMount() {
		this.loadVideo();
	}
	componentWillUnmount() {
		this.isStillMounted = false;
	}
	render() {
		const { content, classList, patternId } = this.props;
		const url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
		const allClasses = `video ${classList} ${this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused'}`;
		return (
			<div onClick={this.toggleVideo} className={allClasses}>
				<div className="video-controls">
					<span className="video-controls__item video-state"></span>
				</div>
				<video ref={(el) => { this.video = el; }}  src={url} />
				<div className={`preview-pattern ${this.state.videoIsLoaded ? 'preview-pattern--hidden' : ''}`}>
					<Pattern sliderName={patternId} />
				</div>
			</div>
		);
	}
}

export default VideoComponent;