import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAtelierProjects } from '../actions';
import { isAtelierProjectsFetching, getAtelierProjects } from '../reducers';

import Landing from '../components/landing/Landing';
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
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || content.length === 0 ) {
			return <LoadingPattern />;
		}
		return <Landing content={content} page="atelier"></Landing>;
	}
}

Atelier.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchAtelierProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isAtelierProjectsFetching(state),
	content: getAtelierProjects(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchAtelierProjects }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Atelier);