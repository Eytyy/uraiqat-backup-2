import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import HeaderMMain from './HeaderMMain';
import HeaderMSearch from './HeaderMSearch';
import HeaderMFilter from './HeaderMFilter';
import PatternChunk from '../../components/patterns/PatternChunk';

class HeaderM extends Component {
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
	componentWillUpdate() {

	}
	render() {
		const navigation = [
			{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length },
			{ name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length },
			{ name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length },
			{ name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length },
		];
		return (
			<div className="website-header__inner website-header__inner--mobile wrapper">
				<div>
					<NavLink className="link" to="/">U</NavLink>
					<PatternChunk reserved={2} />
					<span className="mobile-menu-toggle-overlay" onClick={this.toggle}></span>
					{
						this.state.isVisible ?
							<span className="mobile-menu-toggle link" onClick={this.toggle}>x</span> :
							<span className="mobile-menu-toggle link" onClick={this.toggle}>:</span>
					}
					
				</div>
				<div><PatternChunk reserved={0} /></div>
				{
					this.state.isVisible ? 
						<div className="menu">
							<div className="menu__inner">
								<HeaderMMain navigation={navigation} />
								<HeaderMSearch />
								<HeaderMFilter />
								<div><PatternChunk reserved={0} /></div>
								<div><PatternChunk reserved={0} /></div>
							</div>
						</div>: null
				}
				
			</div>
		);
	}
}

export default withRouter(HeaderM);