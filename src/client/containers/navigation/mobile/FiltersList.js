import React from 'react';
import FiltersListItem from './FiltersListItem';

const FiltersList = ({ content, onFilterClick, adjust }) => {
	return (
		<div className="header-mobile__filters__list">
			{
				content.map(({ title, id, active }) => 
					<FiltersListItem
						adjust={adjust}
						key={id}
						onFilterClick={onFilterClick}
						content={title}
						id={id} active={active} />)
			}
		</div>
	);
};

export default FiltersList;