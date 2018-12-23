import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import { getActiveAtelier } from '../../../reducers';

import PatternChunk from '../../../components/patterns/PatternChunk';

class Second extends Component {

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

	render() {
		const { location, activeSection } = this.props;
		const numberOfStaticItems = 'Architects'.length;
		// if not atelier, we don't have secondary navigation
		// just return the pattern with the reserved "Architects" work
		if (location.pathname !== '/atelier') {
			return (
				<div className="header--desktop__main__second">
					<PatternChunk reserved={numberOfStaticItems} />
					<NavLink className="link" to="/">Architects</NavLink>
				</div>
			);
		}
	
		// otherwise, render the atelier sub-navigation
		const atelierConfig = {
			spacesBefore: 1,
			spacesAfter: 3,
			separator: '/',
			items : [
				{ name: 'About', id: 'about', link: '/atelier#about', glyph: { className: 'ind', content: '->' }, size: 'About'.length },
				{ name: 'Portfolio', id: 'portfolio', link: '/atelier#portfolio', glyph: { className: 'ind', content: '->' }, size: 'Portfolio'.length },
			]
		};
	
		const fixedStart = window.innerWidth >= 1280 ? 11 : 8;
		const reservedNavSpaces = atelierConfig.items.reduce((current, next) => current + next.size + next.glyph.content.length, 0);
		const reservedNavEmptySpaces = atelierConfig.items.length * (atelierConfig.spacesBefore + atelierConfig.spacesAfter);
		const numberofNavSeparators = atelierConfig.items.length - 1;
		const totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;
	
		return (
			<div className="header--desktop__main__second">
				<PatternChunk fixed={fixedStart} />
				{
					atelierConfig.items.map(({ name, glyph, id, link }, index) =>(
						<span key={`header__link-chunk--${index + 1}`}className="header__link-chunk">
							<span className="ws">-</span>
							<span 
								onClick={() => {
									this.onClick(id)
								}}
								className={`link menu-link ${activeSection === id ? 'active' : ''}`}
							>
								<span className={glyph.className}>{glyph.content}</span>
								{ name }
							</span>
							<span className="ws">-</span>
							<span className="ws">-</span>
							<span className="ws">-</span>
							{ index < atelierConfig.items.length - 1 && <span className="separator">{'/'}</span>} 
						</span>)
					)
				}
				<PatternChunk reserved={totalReservedSpaces} />
				<NavLink className="link" to="/">Architects</NavLink>
			</div>
		);
		
	}
}

Second.propTypes = {
	activeSection: PropTypes.string,
};

const mapStateToProps = state => ({
	activeSection: getActiveAtelier(state),
});

export default withRouter(connect(
	mapStateToProps,
	actions
)(Second));
