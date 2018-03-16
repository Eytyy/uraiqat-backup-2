import React from 'react';

const ImageComponent = ({ src, classList, imagesQuery }) => {
	const url = typeof imagesQuery !== 'undefined' ? `${src}${imagesQuery}` : src;
	const style = {
		backgroundImage: `url('${url}')`,
	};
	const classes = typeof classList !== 'undefined' ? classList : '';
	return (
		<div className={`preview-image ${classes}`} style={style}></div>
	);
};

export default ImageComponent;