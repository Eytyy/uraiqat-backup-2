import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchCareer } from '../actions';
import { getCareer, isCareerFetching } from '../reducers';

import BodyText from '../components/BodyText';

import LoadingPattern from '../components/patterns/LoadingPattern';

class Career extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchCareer(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}
	fetchData() {
		const { fetchCareer, match } = this.props;
		const id = match.params.id;
		fetchCareer(id);
	}
	render() {
		const { content, isFetching } = this.props;
		const { title, description } = content;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return (
			<article className="career">
				<header className="career__header">
					<h1 className="main-title career__title">{title}</h1>
				</header>
				<div className="career__content">
					<BodyText content={description} />
				</div>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getCareer(state, id),
		isFetching: isCareerFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchCareer }, dispatch);

Career.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchCareer: PropTypes.func.isRequired,
};

Career.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Career));