import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { getAppConfigs, getFilters } from '../../../reducers';
 
import Main from './Main';
import Search from './Search';
import Filters from './Filters';
import PatternChunk from '../../../components/patterns/PatternChunk';

class Header extends Component {
	state = {
		isVisible: false,
		filtersAreVisible: false,
		searchIsVisible: false,
	};

	toggleFilter = () => {
		this.setState({
			filtersAreVisible: !this.state.filtersAreVisible,
			searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
		});
	}

	onToggleFilters = () => {
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

	onFilterClick = id => {
		const { updateFilter } = this.props;
		updateFilter(id);
	}

	onClearFilters = () => {
		const { clearAllFilters } = this.props;
		clearAllFilters();
		this.onToggleFilters();
	}

	clearSearch = () => {
		if (this.search) {
			this.search.value = '';
		}
	}

	onSearchClick = () => {
		this.setState({
			searchIsVisible: !this.state.searchIsVisible,
			filtersAreVisible: this.state.filtersAreVisible ? !this.state.filtersAreVisible : this.state.filtersAreVisible
		});
	}

	onSearchSubmit = event => {
		const { fetchSearchResults } = this.props;
		const keyword = new FormData(event.target).get('keyword');
		fetchSearchResults(keyword);
		event.preventDefault();
		this.props.history.push(`/search?keyword=${keyword}`);
		this.clearSearch();
		this.onSearchClick();
		return false;
	}

	onMenuToggle = () => {
		let isMenuvisible = this.state.isVisible;
		if (!isMenuvisible) {
			isMenuvisible = true;
			document.body.classList.add('mobileMenu-isActive');
		} else {
			isMenuvisible = false;
			document.body.classList.remove('mobileMenu-isActive');
		}
		this.setState({
			isVisible: isMenuvisible
		});
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
			if (this.state.isVisible) {
				this.onMenuToggle();
			}
			this.setState({
				searchIsVisible: searchState,
				filtersAreVisible: filterState,
			});
		}
	}

	render() {
		const { configs, content, location } = this.props;
		const { adjustForMobile } = configs;
		
		const navigation = [
			{ name: 'Practice', id: 'practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length },
			{ name: 'Work', id: 'work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length },
			{ name: 'The Atelier', id: location.pathname, link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'The Atelier'.length },
			{ name: 'Contact', id: 'contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length },
		];
		return (
			<div className="website-header__inner website-header__inner--mobile wrapper">
				<div className="header__inner__wrapper">
					<NavLink className="link uLink" to="/">U</NavLink>
					<PatternChunk adjust={adjustForMobile} reserved={2} />
					<span className="mobile-menu-toggle-overlay" onClick={this.onMenuToggle}></span>
					{
						this.state.isVisible ?
							<span className="mobile-menu-toggle link" onClick={this.onMenuToggle}>x</span> :
							<span className="mobile-menu-toggle link" onClick={this.onMenuToggle}>:</span>
					}
				</div>
				<div className="header__inner__wrapper"><PatternChunk reserved={0} adjust={adjustForMobile} /></div>
				{
					this.state.isVisible && 
					<div className="menu">
						<div className="menu__inner">
							<Main path={location.pathname} adjust={adjustForMobile} navigation={navigation} />
							<Search
								adjust={adjustForMobile}
								searchIsVisible={this.state.searchIsVisible}
								onSearchClick={this.onSearchClick}
								onSearchSubmit={this.onSearchSubmit}
							/>
							<Filters
								onFilterClick={this.onFilterClick}
								onToggle={this.onToggleFilters}
								onClearFilters={this.onClearFilters}
								adjust={ adjustForMobile }
								filtersAreVisible={ this.state.filtersAreVisible }
								content={ content }
							/>
							<div><PatternChunk adjust={adjustForMobile} reserved={0} /></div>
							<div><PatternChunk adjust={adjustForMobile} reserved={0} /></div>
						</div>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		configs: getAppConfigs(state),
		content: getFilters(state),
	};
};

export default withRouter(connect(
	mapStateToProps,
	actions
)(Header));