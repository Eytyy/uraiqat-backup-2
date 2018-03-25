import React from 'react';

const SlideImageComponent = ({ content, imagesQuery, id, onClick }) => {
	const { file, description } = content;
	const url = typeof imagesQuery !== 'undefined' ? `${file.url}${imagesQuery}` : file.url;
	const style = {
		backgroundImage: `url('${url}')`,
	};
	const onSlideClick = () => {
		onClick(id);
	};
	return (
		<div className="slide slide--image">
			<div className="slider__inner-controls" onClick={onSlideClick}>+ open</div>
			<div className="preview-image slide__image" style={style}></div>
			{ description && <div className="caption">{description}</div>}
		</div>
	);
};

export default SlideImageComponent;