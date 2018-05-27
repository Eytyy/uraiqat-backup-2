import React from 'react';
import HeaderMFiltersListItem from './HeaderMFiltersListItem';

const HeaderMFiltersList = ({ content, onFilterClick }) => {
	return (
		<div className="header-mobile__filters__list">
			{
				content.map(({ title, id, active }) => 
					<HeaderMFiltersListItem
						key={id}
						onFilterClick={onFilterClick}
						content={title}
						id={id} active={active} />)
			}
		</div>
	);
};

export default HeaderMFiltersList;