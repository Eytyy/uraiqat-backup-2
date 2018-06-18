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
	} else if (windowDimensions.w >= 768 ) {
		font.size = 16;
		font.characterHeight = 26;
		font.characterWidth = 11.25;
	} else {
		font.size = 14;
		font.characterWidth = 10;
		font.characterHeight = 24;
	}
	return font;
};

const config = {
	mobile: {
		'team-member--portrait': {
			w: 120,
			h: 168,
		},
		'team-member-inner--portrait': {
			w: 280,
			h: 360,
		},
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
			w: 280,
			h: 192,
		},
		'post-media--video': {
			w: 280,
			h: 192,
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
			w: 280,
			h: 192
		},
		'atelier-main-thumb': {
			w: 310,
			h: 168,
		},
		'atelier-main-thumb--portrait': {
			w: 200,
			h: 288,
		},
		'atelier-main-slider' : {
			w: 310,
			h: 192,
		},
		'atelier-landing-media-image': {
			w: 280,
			h: 192,
		},
		'atelier-landing-media-video': {
			w: 280,
			h: 192,
		},
	},
	mobileX2: {
		'team-member--portrait': {
			w: 130,
			h: 192,
		},
		'team-member-inner--portrait': {
			w: 310,
			h: 456,
		},
		'default-post--portrait': {
			w: 310,
			h: 456,
		},
		'default-post--landscape': {
			w: 310,
			h: 192,
		},
		'featured-post--portrait': {
			w: 310,
			h: 456,
		},
		'featured-post--landscape': {
			w: 310,
			h: 192,
		},
		'featured-post--video': {
			w: 310,
			h: 192,
		},
		'default-post--video': {
			w: 310,
			h: 240,
		},
		'project-main-thumb': {
			w: 310,
			h: 168,
		},
		'post-slider': {
			w: 310,
			h: 192,
		},
		'post-media--video': {
			w: 310,
			h: 192,
		},
		'project-drawing-thumb--portrait': {
			w: 160,
			h: 192,
		},
		'project-drawing-thumb--landscape': {
			w: 310,
			h: 96,
		},
		'project-other-thumb': {
			w: 160,
			h: 96,
		},
		'project-main-slider': {
			w: 310,
			h: 192,
		},
		'project-drawings-slider': {
			w: 310,
			h: 144,
		},
		'related-project--landscape': {
			w: 310,
			h: 192
		},
		'atelier-main-thumb': {
			w: 310,
			h: 168,
		},
		'atelier-main-thumb--portrait': {
			w: 200,
			h: 288,
		},
		'atelier-main-slider' : {
			w: 310,
			h: 192,
		},
		'atelier-landing-media-image': {
			w: 310,
			h: 216,
		},
		'atelier-landing-media-video': {
			w: 310,
			h: 216,
		},
	},
	tablet: {
		'team-member--portrait': {
			w: 264,
			h: 384,
		},
		'team-member-inner--portrait': {
			w: 300,
			h: 416,
		},
		'default-post--portrait': {
			w: 228,
			h: 312,
		},
		'default-post--landscape': {
			w: 324,
			h: 208,
		},
		'featured-post--portrait': {
			w: 288,
			h: 468,
		},
		'featured-post--landscape': {
			w: 612,
			h: 390,
		},
		'featured-post--video': {
			w: 612,
			h: 390,
		},
		'default-post--video': {
			w: 312,
			h: 208,
		},
		'post-slider': {
			w: 566,
			h: 416,
		},
		'post-media--video': {
			w: 660,
			h: 416,
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
			h: 338,
		},
		'project-drawings-slider': {
			w: 348,
			h: 208,
		},
		'related-project--landscape': {
			w: 712,
			h: 416
		},
		'atelier-main-thumb': {
			w: 588,
			h: 310,
		},
		'atelier-main-thumb--portrait': {
			w: 378,
			h: 576,
		},
		'atelier-main-slider' : {
			w: 590,
			h: 388,
		},
		'atelier-landing-media-image': {
			w: 588,
			h: 390,
		},
		'atelier-landing-media-video': {
			w: 588,
			h: 390,
		},
	},
	desktop: {
		'team-member--portrait': {
			w: 252,
			h: 384,
		},
		'team-member-inner--portrait': {
			w: 308,
			h: 480,
		},
		'default-post--portrait': {
			w: 228,
			h: 310,
		},
		'default-post--landscape': {
			w: 350,
			h: 224,
		},
		'featured-post--portrait': {
			w: 322,
			h: 512,
		},
		'featured-post--landscape': {
			w: 714,
			h: 408,
		},
		'featured-post--video': {
			w: 714,
			h: 408,
		},
		'default-post--video': {
			w: 532,
			h: 310,
		},
		'post-slider': {
			w: 742,
			h: 512,
		},
		'post-media--video': {
			w: 812,
			h: 512,
		},
		'project-main-thumb': {
			w: 532,
			h: 320,
		},
		'project-drawing-thumb--portrait': {
			w: 210,
			h: 310,
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
			w: 770,
			h: 480,
		},
		'project-drawings-slider': {
			w: 278,
			h: 160,
		},
		'related-project--landscape': {
			w: 546,
			h: 384
		},
		'atelier-main-thumb': {
			w: 700,
			h: 384,
		},
		'atelier-main-thumb--portrait': {
			w: 378,
			h: 576,
		},
		'atelier-main-slider' : {
			w: 854,
			h: 480,
		},
		'atelier-landing-media-image': {
			w: 882,
			h: 544,
		},
		'atelier-landing-media-video': {
			w: 882,
			h: 544,
		},
	},
	desktop1280: {
		'team-member--portrait': {
			w: 252,
			h: 384,
		},
		'team-member-inner--portrait': {
			w: 308,
			h: 480,
		},
		'default-post--portrait': {
			w: 228,
			h: 320,
		},
		'default-post--landscape': {
			w: 350,
			h: 224,
		},
		'featured-post--portrait': {
			w: 322,
			h: 512
		},
		'featured-post--landscape': {
			w: 714,
			h: 408
		},
		'featured-post--video': {
			w: 714,
			h: 408
		},
		'default-post--video': {
			w: 532,
			h: 328,
		},
		'post-slider': {
			w: 742,
			h: 512,
		},
		'post-media--video': {
			w: 812,
			h: 512,
		},
		'project-main-thumb': {
			w: 630,
			h: 352,
		},
		'project-drawing-thumb--portrait': {
			w: 266,
			h: 352,
		},
		'project-drawing-thumb--landscape': {
			w: 532,
			h: 176,
		},
		'project-other-thumb': {
			w: 266,
			h: 192,
		},
		'project-main-slider': {
			w: 770,
			h: 480,
		},
		'project-drawings-slider': {
			w: 336,
			h: 254,
		},
		'related-project--landscape': {
			w: 560,
			h: 384
		},
		'atelier-main-thumb': {
			w: 812,
			h: 416,
		},
		'atelier-main-thumb--portrait': {
			w: 378,
			h: 576,
		},
		'atelier-main-slider' : {
			w: 854,
			h: 480,
		},
		'atelier-landing-media-image': {
			w: 882,
			h: 544,
		},
		'atelier-landing-media-video': {
			w: 882,
			h: 544,
		},
	},
	desktop1440: {
		'team-member--portrait': {
			w: 266,
			h: 384,
		},
		'team-member-inner--portrait': {
			w: 308,
			h: 480,
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
			w: 448,
			h: 640,
		},
		'featured-post--landscape': {
			w: 868,
			h: 544,
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
			w: 742,
			h: 512,
		},
		'post-media--video': {
			w: 812,
			h: 512,
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
			w: 770,
			h: 512,
		},
		'project-drawings-slider': {
			w: 336,
			h: 254,
		},
		'related-project--landscape': {
			w: 532,
			h: 384
		},
		'atelier-main-thumb': {
			w: 812,
			h: 416,
		},
		'atelier-main-thumb--portrait': {
			w: 378,
			h: 576,
		},
		'atelier-main-slider' : {
			w: 1022,
			h: 576,
		},
		'atelier-landing-media-image': {
			w: 882,
			h: 544,
		},
		'atelier-landing-media-video': {
			w: 882,
			h: 544,
		},
	},
	desktop1600: {
		'team-member--portrait': {
			w: 266,
			h: 384,
		},
		'team-member-inner--portrait': {
			w: 308,
			h: 480,
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
			w: 448,
			h: 640,
		},
		'featured-post--landscape': {
			w: 882,
			h: 576,
		},
		'featured-post--video': {
			w: 966,
			h: 544,
		},
		'default-post--video': {
			w: 700,
			h: 416,
		},
		'post-slider': {
			w: 742,
			h: 512,
		},
		'post-media--video': {
			w: 882,
			h: 512,
		},
		'project-main-thumb': {
			w: 784,
			h: 512,
		},
		'project-drawing-thumb--portrait': {
			w: 364,
			h: 512,
		},
		'project-drawing-thumb--landscape': {
			w: 728,
			h: 256,
		},
		'project-other-thumb': {
			w: 364,
			h: 256,
		},
		'project-main-slider': {
			w: 966,
			h: 544,
		},
		'project-drawings-slider': {
			w: 336,
			h: 254,
		},
		'related-project--landscape': {
			w: 518,
			h: 384
		},
		'atelier-main-thumb': {
			w: 980,
			h: 480,
		},
		'atelier-main-thumb--portrait': {
			w: 462,
			h: 672,
		},
		'atelier-main-slider' : {
			w: 1022,
			h: 576,
		},
		'atelier-landing-media-image': {
			w: 882,
			h: 544,
		},
		'atelier-landing-media-video': {
			w: 882,
			h: 544,
		},
	},
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
	} else if (windowDimensions.w >= 375 ) {
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

	const x = Math.floor(containerSize.w/font.characterWidth);
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
	} else if (windowSize.w >= 375) {
		maxWidth = 320;
	} else {
		maxWidth = 280;
	}
	return maxWidth;
};