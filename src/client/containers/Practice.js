import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPractice } from '../actions';
import { isPracticeFetching, getPracticeContent } from '../reducers';

import PracticeDefault from '../components/practice/PracticeDefault';
import PracticeCareers from '../components/practice/PracticeCareers';
import PracticeTeam from '../components/practice/PracticeTeam';

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
		return (
			<section className="landing-page landing-page--practice main-section" >
				<PracticeDefault sectionTitle="about" content={content.fields.about} />
				<PracticeDefault sectionTitle="philosophy" content={content.fields.philosophy} />
				<PracticeTeam content={content.fields.team} />
				<PracticeCareers content={content.fields.careers} />
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