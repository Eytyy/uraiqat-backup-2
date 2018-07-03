import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFilters } from '../../../reducers';
import * as actions from '../../../actions';

import PatternChunk from '../../../components/patterns/PatternChunk';
import FiltersToggle from './FiltersToggle';
import Search from './Search';
import FiltersList from './FiltersList';

class FilterSearchWrapper extends Component {
	constructor() {
		super();
		this.state = {
			filtersAreVisible: false,
			searchIsVisible: false,
		};
		this.onToggleClick = this.onToggleClick.bind(this);
		this.onFilterClick = this.onFilterClick.bind(this);
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}

	toggleFilter() {
		this.setState({
			filtersAreVisible: !this.state.filtersAreVisible,
			searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
		});
	}

	onToggleClick() {
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
			filtersAreVisible: this.state.filtersAreVisible ? !this.state.filtersAreVisible : this.state.filtersAreVisible
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
		const fixedStart = window.innerWidth >= 1280 ? 11 : 8;
		const config = {
			separator: '/',
			filter: {
				name: 'Filter',
				glyph: { className: 'ind', content: '+' },
				spacesBefore: 3,
				spacesAfter: 1,
			},
			search: {
				name: 'Search',
				glyph: { className: 'ind', content: ':' },
				searchInputSize: 32,
				spacesBefore: 3,
				spacesAfter: 1,
			}
		};
		const reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize;
		// filters don't have a reserved space if you're not on the home page
		const isFront = location.pathname === '/';
		const reservedFilterSize = isFront ? config.filter.name.length + config.filter.glyph.content.length + config.separator.length : 0;
		const reservedEmptySpaces = isFront ?
			config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore :
			config.search.spacesAfter + config.search.spacesBefore;


		const totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + fixedStart;

		return (
			<div className="header--desktop__main">
				<PatternChunk fixed={fixedStart} />
				{ reservedFilterSize !== 0 &&
					<FiltersToggle
						filtersAreVisible={this.state.filtersAreVisible}
						onToggle={this.onToggleClick}
						config={config.filter}
					/>
				}
				<Search
					searchIsVisible={this.state.searchIsVisible}
					onSearchClick={this.onSearchClick}
					onSearchSubmit={this.onSearchSubmit}
					config={config.search}
					isFront={isFront}
				/>
				<PatternChunk reserved={totalReservedSpaces} />
				<FiltersList
					onFilterClick={this.onFilterClick}
					content={content}
					isVisible={this.state.filtersAreVisible}
				/>
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
)(FilterSearchWrapper));