import React from 'react';
import HeaderPatternChunk from './HeaderPatternChunk';


const HeaderMFiltersListItem = ({ content, active, onFilterClick, id }) => {
	const onClick = () => {
		onFilterClick(id);
	};
	return (
		<div>
			<span onClick={onClick} className="filter link">
				{ active ? 
					<span className="filterBox">[<span className="filterBox__state">x</span>]</span> :
					<span className="filterBox">[<span className="filterBox__state"> </span>]</span>
				} 
				<span className="ws">-</span>								
				<span>{content}</span>
				<span className="ws">-</span>
			</span>
			<HeaderPatternChunk reserved={content.length + 5} />
		</div>
	);
};

export default HeaderMFiltersListItem;