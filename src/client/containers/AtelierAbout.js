import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAtelierProjects } from '../actions';
import { isAtelierProjectsFetching, getAtelierProjects, getAtelierIntro } from '../reducers';

import LandingAtelier from '../components/landing/LandingAtelier';
import LoadingPattern from '../components/patterns/LoadingPattern';

class AtelierAbout extends Component {
	static fetchData(store) {
		return store.dispatch(fetchAtelierProjects());
	}
	componentDidMount() {
		const { fetchAtelierProjects } = this.props;
		return fetchAtelierProjects();
	}
	render() {
		const { isFetching, intro } = this.props;
		if (isFetching && typeof intro === 'undefined'  || typeof intro === 'undefined' ) {
			return <LoadingPattern />;
		}
		return <LandingAtelier intro={intro}/>;
	}
}

AtelierAbout.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchAtelierProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isAtelierProjectsFetching(state),
	intro: getAtelierIntro(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAtelierProjects }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AtelierAbout);