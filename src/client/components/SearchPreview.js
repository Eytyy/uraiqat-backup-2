import React from 'react';
import PostDefault from './home/default/PostDefault';
import SearchPreviewProject from './SearchPreviewProject';

const SearchPreview = ({ content, type, id }) => {
	const contentWid = {
		...content,
		id: id
	};
	return type === 'post' ? <PostDefault content={contentWid} /> : <SearchPreviewProject content={contentWid} />;
};

export default SearchPreview;