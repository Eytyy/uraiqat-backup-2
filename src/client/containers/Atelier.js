import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAtelierProjects } from '../actions';
import { isAtelierProjectsFetching, getAtelierProjects, getAtelierIntro } from '../reducers';

import LandingAtelier from '../components/landing/LandingAtelier';
import LoadingPattern from '../components/patterns/LoadingPattern';

class Atelier extends Component {
	static fetchData(store) {
		return store.dispatch(fetchAtelierProjects());
	}
	componentDidMount() {
		const { fetchAtelierProjects } = this.props;
		return fetchAtelierProjects();
	}
	render() {
		const { isFetching, content, intro } = this.props;
		if (isFetching && typeof content === 'undefined'  || typeof content === 'undefined' ) {
			return <LoadingPattern />;
		}
		return <LandingAtelier content={content} intro={intro}/>;
	}
}

Atelier.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchAtelierProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isAtelierProjectsFetching(state),
	content: getAtelierProjects(state),
	intro: getAtelierIntro(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAtelierProjects }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Atelier);