import React from 'react';

const FiltersToggle = ({ config, filtersAreVisible, onToggle }) => {
	return (
		<span className="filters">
			<span className="ws">-</span>
			<span className="ws">-</span>
			<span className="link" onClick={ onToggle }>
				{ filtersAreVisible ? '-' : config.glyph.content }
				{ config.name }
			</span>
			<span className={ filtersAreVisible ? 'ind ind--list' : 'ind ind--list is-hidden'}>:</span>
			<span className="ws">-</span>
			<span className="separator">{ '/' }</span>
		</span>
	);
};

export default FiltersToggle;
