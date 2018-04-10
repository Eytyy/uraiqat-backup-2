import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPractice } from '../actions';
import { isPracticeFetching, getPracticeContent } from '../reducers';

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
		if (isFetching && content.length === 0 || typeof content.fields === 'undefined' ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return (
			<section className="landing-page landing-page--practice main-section" >
				<Basic sectionTitle="about" content={content.fields.about} />
				<Basic sectionTitle="philosophy" content={content.fields.philosophy} />
				<Team content={content.fields.team} />
				<Careers content={content.fields.careers} />
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