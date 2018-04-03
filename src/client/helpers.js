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
export const getRandomGlyph = (defaultGlyphs) => {
	const glyphs = typeof defaultGlyphs !=='undefined' ?
		defaultGlyphs :
		['-', '-','/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/',  '-', '-', '-', '/', '-', '\\', '-'];
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
		font.extra = 0;
	} else if (windowDimensions.w >= 768 ) {
		font.size = 16;
		font.characterHeight = 26;
		font.characterWidth = 12;
		font.extra = 0;
	} else {
		font.size = 14;
		font.characterWidth = 10;
		font.characterHeight = 24;
		font.extra = 0;
	}
	return font;
};

export const getContainerSize = (container) => {
	const containerSize = {
		w: container.w,
		h: container.h
	};

	containerSize.w = containerSize.w;
	containerSize.h = containerSize.h;

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
		w: 266,
		h: 384,
	},
	'default-post--landscape': {
		w: 392,
		h: 256,
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
		w: 868,
		h: 544,
	},
	'default-post--video': {
		w: 630,
		h: 352,
	},
	'related-project--landscape': {
		w: 644,
		h: 448
	},
	'project-main-thumb': {
		w: 700,
		h: 416,
	},
	'project-drawing-thumb--landscape': {
		w: 644,
		h: 208,
	},
	'project-drawing-thumb--portrait': {
		w: 322,
		h: 416,
	}
	,
	'project-other-thumb': {
		w: 322,
		h: 208,
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

	const x = Math.floor(containerSize.w/font.characterWidth) + font.extra;
	const y = Math.floor(containerSize.h/font.characterHeight);

	return {
		x,
		y
	};
};

export const getMaxWidth = () => {
	const windowSize = getWindowDimensions();
	let maxWidth;	
	if (windowSize.w >= 1600) {
		maxWidth = 1512;
	} else if (windowSize.w >= 1440 ) {
		maxWidth = 1344;
	} else if (windowSize.w >= 1280 ) {
		maxWidth = 1162;
	} else if (windowSize.w >= 1024 ) {
		maxWidth = 952;
	} else if (windowSize.w >= 768) {
		maxWidth = 720;
	}else if (windowSize.w >= 320) {
		maxWidth = 320;
	} else {
		maxWidth = 280;
	}
	return maxWidth;
};