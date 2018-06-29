import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAppConfigs, getFilters } from '../../../reducers';
 
import Main from './Main';
import Search from './Search';
import FilterToggle from './Filter';
import PatternChunk from '../../../components/patterns/PatternChunk';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			filtersAreVisible: false,
			searchIsVisible: false,
		};
		this.toggle = this.toggle.bind(this);
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


	toggle() {
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
				this.toggle();
			}
			this.setState({
				searchIsVisible: searchState,
				filtersAreVisible: filterState,
			});
		}
	}

	render() {
		const navigation = [
			{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length },
			{ name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length },
			{ name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length },
			{ name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length },
		];
		const { adjustForMobile, content } = this.props.configs;
		return (
			<div className="website-header__inner website-header__inner--mobile wrapper">
				<div>
					<NavLink className="link uLink" to="/">U</NavLink>
					<PatternChunk adjust={adjustForMobile} reserved={2} />
					<span className="mobile-menu-toggle-overlay" onClick={this.toggle}></span>
					{
						this.state.isVisible ?
							<span className="mobile-menu-toggle link" onClick={this.toggle}>x</span> :
							<span className="mobile-menu-toggle link" onClick={this.toggle}>:</span>
					}
				</div>
				<div><PatternChunk reserved={0} adjust={adjustForMobile} /></div>
				{
					this.state.isVisible && 
					<div className="menu">
						<div className="menu__inner">
							<Main adjust={adjustForMobile} navigation={navigation} />
							<Search
								adjust={adjustForMobile}
								searchIsVisible={this.state.searchIsVisible}
								onSearchClick={this.onSearchClick}
								onSearchSubmit={this.onSearchSubmit}
							/>
							<FilterToggle
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
	mapStateToProps
)(Header));