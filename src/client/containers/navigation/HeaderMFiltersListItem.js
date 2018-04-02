import React, { Component } from 'react';
import HeaderPatternChunk from './HeaderPatternChunk';

class HeaderMFiltersListItem extends Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
		this.onFilterClick = this.onFilterClick.bind(this);
	}
	onFilterClick() {
		this.setState({
			active: !this.state.active,
		});
	}
	render() {
		const { name } = this.props;
		return (
			<div>
				<span onClick={this.onFilterClick} className="filter link">
					{ this.state.active ? 
						<span className="filterBox">[<span className="filterBox__state">x</span>]</span> :
						<span className="filterBox">[<span className="filterBox__state"> </span>]</span>
					} 
					<span className="ws">-</span>								
					<span>{name}</span>
					<span className="ws">-</span>
				</span>
				<HeaderPatternChunk reserved={name.length + 5} />
			</div>
		);
	}
}

export default HeaderMFiltersListItem;