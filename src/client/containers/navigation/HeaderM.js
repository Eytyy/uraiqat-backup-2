import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import HeaderMMain from './HeaderMMain';
import HeaderMSearch from './HeaderMSearch';
import HeaderMFilter from './HeaderMFilter';
import HeaderPatternChunk from './HeaderPatternChunk';


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
		this.setState({
			isVisible: !this.state.isVisible
		});
	}
	render() {
		return (
			<div className="website-header__inner website-header__inner--mobile wrapper">
				<div>
					<NavLink className="link" to="/">U</NavLink>
					<HeaderPatternChunk reserved={2} />
					<span className="mobile-menu-toggle link" to="/" onClick={this.toggle}>:</span>
				</div>
				<div><HeaderPatternChunk reserved={0} /></div>
				<div><HeaderPatternChunk reserved={0} /></div>
				{
					this.state.isVisible ? 
						<div className="menu">
							<HeaderMMain />
							<HeaderMSearch />
							<HeaderMFilter />
						</div>: null
				}
				
			</div>
		);
	}
}

export default withRouter(HeaderM);