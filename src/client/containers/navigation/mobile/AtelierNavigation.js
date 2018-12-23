import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import { getActiveAtelier } from '../../../reducers';

import NavItem from './NavItem';
import PatternChunk from '../../../components/patterns/PatternChunk';

class AtelierNavigation extends Component {
	
	config = {
		spacesBefore: 1,
		spacesAfter: 3,
		separator: '/',
		items : [
			{ name: 'About', id: 'about', link: '/atelier#about', glyph: { className: 'ind', content: '->' }, size: 'About'.length },
			{ name: 'Portfolio', id: 'portfolio', link: '/atelier#portfolio', glyph: { className: 'ind', content: '->' }, size: 'Portfolio'.length },
		]
	}
	
	getHeaderSize = () => {
		return window.innerWidth >= 1280 ? 32 * 5 : 24 * 4;
	}

	onClick = target => {
		const { updateAtelierNav } = this.props;
		const targetPosition = document.getElementById(`${target}`).offsetTop;
		const headerSize = this.getHeaderSize();

		window.scrollTo(0, targetPosition - headerSize);
		updateAtelierNav(target);
	}

	render () {
		const { adjust, activeSection, link, glyph, name, id  } = this.props;
		const reservedNavSpaces = this.config.items.reduce((current, next) => current + next.size + next.glyph.content.length, 0);
		const reservedNavEmptySpaces = this.config.items.length * (this.config.spacesBefore + this.config.spacesAfter);
		const numberofNavSeparators = this.config.items.length - 1;
		const totalReservedSpaces = (name.length + glyph.content.length + 2) + reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators;
		return (
			<div className="header-mobile__main__item">
				<NavItem adjust={adjust} name={name} link={link} glyph={glyph} />
				{
					this.config.items.map(({ name, glyph, id }, index) => (
						<Fragment key={id}>
							<span key={`header__link-chunk--${index + 1}`} className="header__link-chunk">
								<span className="ws">-</span>
								<span  onClick={() => { this.onClick(id)}} className={`link menu-link ${activeSection === id ? 'active' : ''}`} >
									<span className={glyph.className}>{glyph.content}</span>
									{ name }
								</span>
								<span className="ws">-</span>
								<span className="ws">-</span>
								<span className="ws">-</span>
								{ index < this.config.items.length - 1 && <span className="separator">{'/'}</span>} 
							</span>
						</Fragment>
					))
				}
				<PatternChunk adjust={adjust} reserved={totalReservedSpaces} />
			</div>
		);
	}
}


AtelierNavigation.propTypes = {
	activeSection: PropTypes.string,
};

const mapStateToProps = state => ({
	activeSection: getActiveAtelier(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(AtelierNavigation));
