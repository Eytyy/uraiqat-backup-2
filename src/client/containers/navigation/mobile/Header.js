import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAppConfigs } from '../../../reducers';
 
import Main from './Main';
import Search from './Search';
import Filter from './Filter';
import PatternChunk from '../../../components/patterns/PatternChunk';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
		this.toggle = this.toggle.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.location.pathname !== this.props.location.pathname && this.state.isVisible) {
			this.toggle();
		}
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

	render() {
		const navigation = [
			{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length },
			{ name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length },
			{ name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length },
			{ name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length },
		];
		const { adjustForMobile } = this.props.configs;
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
							<Search adjust={adjustForMobile} />
							<Filter adjust={adjustForMobile} />
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
		configs: getAppConfigs(state)
	};
};

export default withRouter(connect(
	mapStateToProps
)(Header));