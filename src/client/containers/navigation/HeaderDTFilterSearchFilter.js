import React, { Component } from 'react';

class HeaderDTFilterSearchFilter extends Component {
	render() {
		const { config, filtersAreVisible, onfilterClick } = this.props;
		return (
			<span className="filters">
				<span className="ws">-</span>
				<span className="ws">-</span>
				<span className="link" onClick={onfilterClick}>
					{ filtersAreVisible ? '-' : config.glyph.content}
					{config.name}
				</span>
				<span className="ind-list">:</span>
				<span className="ws">-</span>
				<span className="separator">{'/'}</span>
			</span>
		);
	}
}

export default HeaderDTFilterSearchFilter;
