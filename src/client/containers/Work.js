import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProjects } from '../actions';
import { isProjectsFetching, getProjects } from '../reducers';

import LandingWork from '../components/landing/LandingWork';
import LoadingPattern from '../components/patterns/LoadingPattern';

class Work extends Component {
	static fetchData(store) {
		return store.dispatch(fetchProjects());
	}
	componentDidMount() {
		const { fetchProjects } = this.props;
		fetchProjects();
	}
	render() {
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || content.length === 0 ) {
			return <LoadingPattern />;
		}
		return <LandingWork content={content} />;
	}
}

Work.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isProjectsFetching(state),
	content: getProjects(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchProjects }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Work);