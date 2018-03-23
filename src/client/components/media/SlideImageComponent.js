import React from 'react';

const SlideImageComponent = ({ content, classList, imagesQuery, id, onClick }) => {
	const { file, description } = content;
	const url = typeof imagesQuery !== 'undefined' ? `${file.url}${imagesQuery}` : file.url;
	const style = {
		backgroundImage: `url('${url}')`,
	};
	const onSlideClick = () => {
		onClick(id);
	};
	return (
		<div className="slide">
			<div onClick={onSlideClick} className="preview-image slide__image" style={style}></div>
			<div className="caption">{description}</div>
		</div>
	);
};

export default SlideImageComponent;