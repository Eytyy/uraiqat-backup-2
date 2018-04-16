import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFilters } from '../../reducers';
import * as actions from '../../actions';

import PatternChunk from '../../components/patterns/PatternChunk';
import HeaderDTFilterSearchFilter from './HeaderDTFilterSearchFilter';
import HeaderDTFilterSearchSearch from './HeaderDTFilterSearchSearch';
import HeaderDTFiltersList from './HeaderDTFiltersList';

class HeaderDTFilterSearch extends Component {
	constructor() {
		super();
		this.state = {
			filtersAreVisible: false,
			searchIsVisible: false,
		};
		this.onfiltersClick = this.onfiltersClick.bind(this);
		this.onFilterClick = this.onFilterClick.bind(this);
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}
	toggleFilter() {
		this.setState({
			filtersAreVisible: !this.state.filtersAreVisible,
			searchIsVisible: !this.state.filtersAreVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
		});
	}
	onfiltersClick() {
		const { fetchFilters, content } = this.props;
		if (!this.state.filtersAreVisible) {
			if (content.length === 0) {
				fetchFilters().then(() => {
					this.toggleFilter();
				});
			} else {
				this.toggleFilter();
			}
		} else {
			this.toggleFilter();
		}
	}
	onFilterClick(id) {
		const { updateFilter } = this.props;
		updateFilter(id);
	}
	clearSearch() {
		if (this.search) {
			this.search.value = '';
		}
	}
	onSearchClick() {
		this.setState({
			searchIsVisible: !this.state.searchIsVisible,
			filtersAreVisible: !this.state.searchIsVisible ? !this.state.filtersAreVisible : this.state.filtersAreVisible
		});
	}
	onSearchSubmit(event) {
		const { fetchSearchResults } = this.props;
		const keyword = new FormData(event.target).get('keyword');
		fetchSearchResults(keyword);
		event.preventDefault();
		this.props.history.push(`/search?keyword=${keyword}`);
		this.clearSearch();
		this.onSearchClick();
		return false;
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.location.pathname !== this.props.location.pathname) {
			let filterState = this.state.filtersAreVisible;
			let searchState = this.state.searchIsVisible;
			if (this.state.filtersAreVisible) {
				filterState = !this.state.filtersAreVisible;
			}
			if (this.state.searchIsVisible) {
				searchState= !this.state.searchIsVisible;
			}
			this.setState({
				searchIsVisible: searchState,
				filtersAreVisible: filterState,
			});
		}
	}
	render() {
		const { content, location } = this.props;
		const fixedStart = window.innerWidth > 1280 ? 11 : 8;
		const config = {
			separator: '/',
			filter: {
				name: 'Filter',
				glyph: { className: 'ind', content: '+' },
				spacesBefore: 3,
				spacesAfter: 2,
			},
			search: {
				name: 'Search',
				glyph: { className: 'ind', content: ':' },
				searchInputSize: 32,
				spacesBefore: 3,
				spacesAfter: 2,
			}
		};
		const reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize;
		const reservedFilterSize = location.pathname !== '/' ? 0 : config.filter.name.length + config.filter.glyph.content.length;
		const reservedEmptySpaces = location.pathname !== '/' ?
			config.search.spacesAfter + config.search.spacesBefore :
			config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore;
		const numberofNavSeparators = 1;
		const totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + numberofNavSeparators + fixedStart;
		return (
			<div className="header--desktop__main">
				<PatternChunk fixed={fixedStart} />
				{ reservedFilterSize === 0 ? null : <HeaderDTFilterSearchFilter filtersAreVisible={this.state.filtersAreVisible} onfiltersClick={this.onfiltersClick} config={config.filter} />}
				<HeaderDTFilterSearchSearch searchIsVisible={this.state.searchIsVisible} onSearchClick={this.onSearchClick} onSearchSubmit={this.onSearchSubmit} config={config.search} />
				<PatternChunk reserved={totalReservedSpaces} />
				<HeaderDTFiltersList onFilterClick={this.onFilterClick} content={content} isVisible={this.state.filtersAreVisible} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	content: getFilters(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(HeaderDTFilterSearch));