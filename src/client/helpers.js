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
		font.characterWidth = 11.25;
		font.extra = 0;
	} else {
		font.size = 14;
		font.characterWidth = 10;
		font.characterHeight = 24;
		font.extra = 0;
	}
	return font;
};

const config = {
	mobile: {
		'default-post--portrait': {
			w: 280,
			h: 360,
		},
		'default-post--landscape': {
			w: 280,
			h: 168,
		},
		'featured-post--portrait': {
			w: 280,
			h: 420,
		},
		'featured-post--landscape': {
			w: 280,
			h: 192,
		},
		'featured-post--video': {
			w: 280,
			h: 192,
		},
		'default-post--video': {
			w: 280,
			h: 168,
		},
		'project-main-thumb': {
			w: 280,
			h: 168,
		},
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-drawing-thumb--portrait': {
			w: 140,
			h: 192,
		},
		'project-drawing-thumb--landscape': {
			w: 280,
			h: 96,
		},
		'project-other-thumb': {
			w: 140,
			h: 96,
		},
		'project-main-slider': {
			w: 280,
			h: 192,
		},
		'project-drawings-slider': {
			w: 280,
			h: 144,
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		},
	},
	mobileX2: {
		'default-post--portrait': {
			w: 320,
			h: 480,
		},
		'default-post--landscape': {
			w: 320,
			h: 192,
		},
		'featured-post--portrait': {
			w: 320,
			h: 456,
		},
		'featured-post--landscape': {
			w: 320,
			h: 192,
		},
		'featured-post--video': {
			w: 320,
			h: 240,
		},
		'default-post--video': {
			w: 320,
			h: 240,
		},
		'project-main-thumb': {
			w: 320,
			h: 168,
		},
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-drawing-thumb--portrait': {
			w: 160,
			h: 192,
		},
		'project-drawing-thumb--landscape': {
			w: 320,
			h: 96,
		},
		'project-other-thumb': {
			w: 160,
			h: 96,
		},
		'project-main-slider': {
			w: 320,
			h: 192,
		},
		'project-drawings-slider': {
			w: 320,
			h: 144,
		},
		'related-project--landscape': {
			w: 320,
			h: 448
		},
	},
	tablet: {
		'default-post--portrait': {
			w: 210,
			h: 286,
		},
		'default-post--landscape': {
			w: 312,
			h: 208,
		},
		'featured-post--portrait': {
			w: 360,
			h: 546,
		},
		'featured-post--landscape': {
			w: 516,
			h: 312,
		},
		'featured-post--video': {
			w: 516,
			h: 312,
		},
		'default-post--video': {
			w: 312,
			h: 208,
		},
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-main-thumb': {
			w: 384,
			h: 260,
		},
		'project-drawing-thumb--portrait': {
			w: 168,
			h: 260,
		},
		'project-drawing-thumb--landscape': {
			w: 336,
			h: 130,
		},
		'project-other-thumb': {
			w: 168,
			h: 130,
		},
		'project-main-slider': {
			w: 590,
			h: 416,
		},
		'project-drawings-slider': {
			w: 252,
			h: 144,
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		},
	},
	desktop: {
		'default-post--portrait': {
			w: 210,
			h: 320,
		},
		'default-post--landscape': {
			w: 350,
			h: 224,
		},
		'featured-post--portrait': {
			w: 360,
			h: 546,
		},
		'featured-post--landscape': {
			w: 868,
			h: 512,
		},
		'featured-post--video': {
			w: 868,
			h: 512,
		},
		'default-post--video': {
			w: 532,
			h: 320,
		},
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-main-thumb': {
			w: 532,
			h: 320,
		},
		'project-drawing-thumb--portrait': {
			w: 210,
			h: 320,
		},
		'project-drawing-thumb--landscape': {
			w: 420,
			h: 160,
		},
		'project-other-thumb': {
			w: 210,
			h: 160,
		},
		'project-main-slider': {
			w: 833,
			h: 512,
		},
		'project-drawings-slider': {
			w: 252,
			h: 160,
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		},
	},
	desktop1280: {
		'default-post--portrait': {
			w: 210,
			h: 320,
		},
		'default-post--landscape': {
			w: 350,
			h: 224,
		},
		'featured-post--portrait': {
			w: 360,
			h: 546,
		},
		'featured-post--landscape': {
			w: 868,
			h: 512,
		},
		'featured-post--video': {
			w: 868,
			h: 512,
		},
		'default-post--video': {
			w: 532,
			h: 328,
		},
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-main-thumb': {
			w: 574,
			h: 384,
		},
		'project-drawing-thumb--portrait': {
			w: 294,
			h: 384,
		},
		'project-drawing-thumb--landscape': {
			w: 588,
			h: 192,
		},
		'project-other-thumb': {
			w: 294,
			h: 192,
		},
		'project-main-slider': {
			w: 833,
			h: 512,
		},
		'project-drawings-slider': {
			w: 336,
			h: 254,
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		},
	},
	desktop1440: {
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
		'post-slider': {
			w: 882,
			h: 576,
		},
		'project-main-thumb': {
			w: 700,
			h: 416,
		},
		'project-drawing-thumb--portrait': {
			w: 322,
			h: 416,
		},
		'project-drawing-thumb--landscape': {
			w: 644,
			h: 208,
		},
		'project-other-thumb': {
			w: 322,
			h: 208,
		},
		'project-main-slider': {
			w: 833,
			h: 512,
		},
		'project-drawings-slider': {
			w: 336,
			h: 254,
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		},
	},
	desktop1600: {

	}
};
export const getContainerSize = (container, preConfig) => {
	let containerSize = {};

	if (container === 'custom') {
		containerSize.w = preConfig.w;
		containerSize.h = preConfig.h;

		return containerSize;
	}

	const windowDimensions = getWindowDimensions();
	let configTarget;
	
	if (windowDimensions.w >= 1600) {
		configTarget = config['desktop1600'];
	} else if (windowDimensions.w >= 1440) {
		configTarget = config['desktop1440'];
	} else if (windowDimensions.w >= 1280) {
		configTarget = config['desktop1280'];
	} else if (windowDimensions.w >= 1024) {
		configTarget = config['desktop'];
	} else if (windowDimensions.w >= 768 ) {
		configTarget = config['tablet'];
	} else if (windowDimensions.w >= 414 ) {
		configTarget = config['mobileX2'];
	} else {
		configTarget = config['mobile'];
	}
	containerSize.w = configTarget[container].w;
	containerSize.h = configTarget[container].h;
	return containerSize;
};


export const getNoOfChars = (container, preconfig) => {
	const containerSize = typeof preconfig === 'undefined' ? getContainerSize(container) : getContainerSize('custom', preconfig);
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
	} else if (windowSize.w > 375) {
		maxWidth = 320;
	} else {
		maxWidth = 280;
	}
	return maxWidth;
};