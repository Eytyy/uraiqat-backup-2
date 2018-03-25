import React, { Component } from 'react';

class SlideVideoComponent extends Component {
	constructor() {
		super();
		this.state = {
			playing: false,
		};
		this.playVideo = this.playVideo.bind(this);
		this.stopVideo = this.stopVideo.bind(this);
		this.toggleVideo = this.toggleVideo.bind(this);
		this.onSlideClick = this.onSlideClick.bind(this);
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
		this.stopVideo();
		onClick(id);
	}
	render() {
		const { content } = this.props;
		const url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
		const allClasses = `slide slide--video ${this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused'}`;
		return (
			<div className={allClasses}>
				<div className="video video__wrapper">
					<div className="slider__inner-controls slider__inner-controls--video">
						{ !this.state.playing &&
							<span onClick={this.onSlideClick} className="video-controls__item open-gallery">
								+ open gallery {' / '}
							</span>
						}
						<span onClick={this.toggleVideo} className="video-controls__item video-btn">
							{this.state.playing ? 'pause' : 'play'}
						</span>
					</div>
					<video ref={(el) => { this.video = el; }}  src={url} />
				</div>
				{ content.description && <div className="caption">{content.description}</div>}
			</div>
		);
	}
}

export default SlideVideoComponent;