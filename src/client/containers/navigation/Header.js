import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import HeaderDT from './desktop/Header';
import HeaderM from './mobile/Header';

class Header extends Component {
	state = {
		width: 0,
		height: 0
	}

	updateDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
	}

	render() {
		return typeof window === 'undefined' ? 
			<header className="website-header"><div></div></header> :
			<header className="website-header">
				{ this.state.width >= 1280 && <HeaderDT /> || <HeaderM /> }
			</header>;
	}
}

export default withRouter(Header);