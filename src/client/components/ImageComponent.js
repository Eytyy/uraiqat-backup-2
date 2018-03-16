import React from 'react';

const ImageComponent = ({ src, title}) => {
	const style = {
		backgroundImage: `url('${src}')`,
	};
	return (
		<div className="post-preview__image" style={style}></div>
	);
};

export default ImageComponent;