import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProjects } from '../actions';
import { isProjectsFetching, getProjects } from '../reducers';

import Landing from '../components/landing/Landing';

class Work extends Component {
	static fetchData(store) {
		return store.dispatch(fetchProjects());
	}
	componentDidMount() {
		const { fetchProjects } = this.props;
		return fetchProjects();
	}
	render() {
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || content.length === 0 ) {
			return <div>Loading Projects.. this will be replaced with the patterns transition</div>;
		}
		return <Landing content={content} page='work'></Landing>;
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