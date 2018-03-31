// Content Helpers
export const formatDate = (date) => date.replace(/-/g , '/').split('/').reverse().join('/');

export const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
};


// Window Helpers
export const getWindowSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight
});


export const getWindowDimensions = () => {
	const windowDimensions = {
		w: getWindowSize().width,
		h: getWindowSize().height,
	};
	return windowDimensions;
};


// Patterns Helpers
export const getRandomGlyph = () => {
	const glyphs= ['-', '-','/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/',  '-', '-', '-', '/', '-', '\\', '-'];
	let index = getRandomIntInclusive(1, glyphs.length - 2);
	let glyph = glyphs[index];
	return glyph;
};

export const getFontValues = () => {
	let font = {};
	const windowDimensions = getWindowDimensions();

	if (windowDimensions.w >= 1024) {
		font.size = 20;
		font.characterHeight = 32;
		font.characterWidth = 14;
	} else if (windowDimensions.w >= 768 ) {
		font.size = 16;
		font.characterHeight = 26;
		font.characterWidth = 14;
	} else {
		font.size = 14;
		font.characterWidth = 10;
		font.characterHeight = 24;
	}
	return font;
};

export const getContainerSize = (container) => {
	const containerSize = {
		w: container.w,
		h: container.h
	};
	const font = getFontValues();

	containerSize.w = containerSize.w - (font.characterWidth * 2);
	containerSize.h = containerSize.h - (font.characterHeight);

	return containerSize;
	
};


const config = {
	'project-main-slider': {
		w: 826,
		h: 512,
	},
	'project-drawings-slider': {
		w: 334,
		h: 254,
	},
	'post-slider': {
		w: 882,
		h: 576,
	},
	'default-post--portrait': {
		w: 294,
		h: 416,
	},
	'default-post--landscape': {
		w: 420,
		h: 288,
	},
	'featured-post--portrait': {
		w: 476,
		h: 672,
	},
	'featured-post--landscape': {
		w: 882,
		h: 576,
	},
	'featured-post--video': {
		w: 896,
		h: 576,
	},
	'default-post--video': {
		w: 638,
		h: 384,
	},
	'related-project--landscape': {
		w: 644,
		h: 448
	},
	'project-main-thumb': {
		w: 728,
		h: 480,
	},
	'project-drawing-thumb--landscape': {
		w: 662,
		h: 256,
	},
	'project-drawing-thumb--portrait': {
		w: 350,
		h: 480,
	}
	,
	'project-other-thumb': {
		w: 350,
		h: 256,
	},
	'post-media--video': {
		w: 900,
		h: 512,
	},
	'post-media--image': {
		w: 900,
		h: 512
	}
};

export const getNoOfChars = (sliderName, preconfig) => {
	const containerSize = typeof preconfig === 'undefined' ? getContainerSize(config[sliderName]) : getContainerSize(preconfig);
	const font = getFontValues();

	const x = Math.floor(containerSize.w/font.characterWidth);
	const y = Math.floor(containerSize.h/font.characterHeight);

	return {
		x,
		y
	};
};
