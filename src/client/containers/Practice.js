import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPractice } from '../actions';
import { isPracticeFetching, getPracticeContent } from '../reducers';

import YouTube from 'react-youtube';

import Basic from '../components/practice/Basic';
import Careers from '../components/practice/Careers';
import Team from '../components/practice/Team';

import LoadingPattern from '../components/patterns/LoadingPattern';

class Practice extends Component {
	static fetchData(store) {
		return store.dispatch(fetchPractice());
	}
	componentDidMount() {
		const { fetchPractice } = this.props;
		return fetchPractice();
	}
	render() {
		const { isFetching, content } = this.props;
		const opts = {
			height: '390',
			width: '640',
			playerVars: {
				modestbranding: 1,
				rel: 0,
				showinfo: 0,
				playsinline: 1,
				autoplay: 1
			},
		};
		if (isFetching && content.length === 0 || typeof content.fields === 'undefined' ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return (
			<section className="landing-page landing-page--practice main-section" >
				{ content.fields.youtubeID && 
					<YouTube
						videoId={content.fields.youtubeID}
						id={content.fields.youtubeID}
						className="video"
						containerClassName="practice-video-wrapper"
						opts={opts} />
				}
				{ content.fields.about && <Basic sectionTitle="about" content={content.fields.about} />}
				{ content.fields.philosophy && <Basic sectionTitle="philosophy" content={content.fields.philosophy} /> }
				{ content.fields.team && <Team content={content.fields.team} /> }
				{ content.fields.careersBody && <Careers desc={content.fields.careersBody} content={content.fields.careers} /> }
			</section>
		);
	}
}

Practice.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchPractice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isPracticeFetching(state),
	content: getPracticeContent(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPractice }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Practice);