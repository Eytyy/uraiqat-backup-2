import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPractice } from '../actions';
import { isPracticeFetching, getPracticeContent } from '../reducers';


import Basic from '../components/practice/Basic';
import Careers from '../components/practice/Careers';
import Team from '../components/practice/Team';

import YoutubeComponent from '../components/media/YoutubeComponent';
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
		if (isFetching && content.length === 0 || typeof content.fields === 'undefined' ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const previousTeam = content.fields.team.filter(({ fields }) => fields.previousMember);
		const currentTeam = content.fields.team.filter(({ fields }) => !fields.previousMember);
		return (
			<section className="landing-page landing-page--practice main-section" >
				{ content.fields.youtubeID && 
					<YoutubeComponent
						videoId={content.fields.youtubeID}
						autoplay={1} 
						classes="practice-video-wrapper"
					/>
				}
				{ content.fields.about && <Basic sectionTitle="about" content={content.fields.about} />}
				{ content.fields.philosophy && <Basic sectionTitle="philosophy" content={content.fields.philosophy} /> }
				{ currentTeam && <Team content={currentTeam} type="current"/> }
				{ previousTeam && <Team content={previousTeam} type="previous" /> }
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