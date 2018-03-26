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
	render() {
		const { content, classList, index } = this.props;
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
					{ content.description && <div className="caption">{index + 1}: {content.description}</div>}
				</div>
			</div>
		);
	}
}

export default VideoComponent;