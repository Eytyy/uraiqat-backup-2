import React from 'react';
import HeaderMFiltersListItem from './FiltersListItem';

const HeaderMFiltersList = ({ content, onFilterClick, adjust }) => {
	return (
		<div className="header-mobile__filters__list">
			{
				content.map(({ title, id, active }) => 
					<HeaderMFiltersListItem
						adjust={adjust}
						key={id}
						onFilterClick={onFilterClick}
						content={title}
						id={id} active={active} />)
			}
		</div>
	);
};

export default HeaderMFiltersList;