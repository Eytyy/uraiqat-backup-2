import React from 'react';
import HeaderMFiltersListItem from './HeaderMFiltersListItem';

const HeaderMFiltersList = ({ content }) => {
	return (
		<div className="header-mobile__filters__list">
			{
				content.map(({ title, id }) => 	<HeaderMFiltersListItem key={id} name={title} />)
			}
		</div>
	);
};

export default HeaderMFiltersList;