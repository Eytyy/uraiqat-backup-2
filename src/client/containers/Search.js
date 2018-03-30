import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import { isSearchFetching, getSearchResults } from '../reducers';

import LoadingPattern from '../components/patterns/LoadingPattern';

class Search extends Component {
	render() {
		const { content, isFetching, keyword } = this.props;
		if (isFetching && content.length === 0) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return <section>
			<h1>Search:{keyword}</h1>
			<h2>work in progress</h2>
			<ul>
				{
					content.map(({sys, fields}) => <li key={sys.id}><h3>{fields.title}</h3></li>)
				}
			</ul>
		</section>;
	}
}

Search.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
};

const mapStateToProps = (state, {location}) => {
	const query = new URLSearchParams(location.search);
	const keyword = query.get('keyword');
	return {
		isFetching: isSearchFetching(state),
		content: getSearchResults(state, keyword),
		keyword,
	};
};


export default withRouter(connect(
	mapStateToProps,
	actions
)(Search));