'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Content Helpers
var formatDate = exports.formatDate = function formatDate(date) {
	return date.replace(/-/g, '/').split('/').reverse().join('/');
};

var getRandomIntInclusive = exports.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Window Helpers
var getWindowSize = exports.getWindowSize = function getWindowSize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
};

var getWindowDimensions = exports.getWindowDimensions = function getWindowDimensions() {
	var windowDimensions = {
		w: getWindowSize().width,
		h: getWindowSize().height
	};
	return windowDimensions;
};

// Patterns Helpers
var getRandomGlyph = exports.getRandomGlyph = function getRandomGlyph(defaultGlyphs) {
	var glyphs = typeof defaultGlyphs !== 'undefined' ? defaultGlyphs : ['-', '-', '/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/', '-', '-', '-', '/', '-', '\\', '-'];
	var index = getRandomIntInclusive(1, glyphs.length - 2);
	var glyph = glyphs[index];
	return glyph;
};

var getFontValues = exports.getFontValues = function getFontValues() {
	var font = {};
	var windowDimensions = getWindowDimensions();

	if (windowDimensions.w >= 1024) {
		font.size = 20;
		font.characterHeight = 32;
		font.characterWidth = 14;
		font.extra = 0;
	} else if (windowDimensions.w >= 768) {
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

var config = {
	mobile: {
		'project-main-thumb': {
			w: 280,
			h: 168
		},
		'project-drawing-thumb--portrait': {
			w: 140,
			h: 192
		},
		'project-drawing-thumb--landscape': {
			w: 280,
			h: 96
		},
		'project-other-thumb': {
			w: 140,
			h: 96
		}
	},
	mobileX2: {
		'project-main-thumb': {
			w: 320,
			h: 168
		},
		'project-drawing-thumb--portrait': {
			w: 160,
			h: 192
		},
		'project-drawing-thumb--landscape': {
			w: 320,
			h: 96
		},
		'project-other-thumb': {
			w: 160,
			h: 96
		}
	},
	tablet: {
		'project-main-thumb': {
			w: 384,
			h: 260
		},
		'project-drawing-thumb--portrait': {
			w: 168,
			h: 260
		},
		'project-drawing-thumb--landscape': {
			w: 336,
			h: 130
		},
		'project-other-thumb': {
			w: 168,
			h: 130
		}
	},
	desktop: {
		'project-main-thumb': {
			w: 532,
			h: 320
		},
		'project-drawing-thumb--portrait': {
			w: 210,
			h: 320
		},
		'project-drawing-thumb--landscape': {
			w: 420,
			h: 160
		},
		'project-other-thumb': {
			w: 210,
			h: 160
		}
	},
	desktop1280: {
		'project-main-thumb': {
			w: 574,
			h: 384
		},
		'project-drawing-thumb--portrait': {
			w: 294,
			h: 384
		},
		'project-drawing-thumb--landscape': {
			w: 588,
			h: 192
		},
		'project-other-thumb': {
			w: 294,
			h: 192
		}
	},
	desktop1440: {
		'default-post--portrait': {
			w: 266,
			h: 384
		},
		'default-post--landscape': {
			w: 392,
			h: 256
		},
		'featured-post--portrait': {
			w: 476,
			h: 672
		},
		'featured-post--landscape': {
			w: 882,
			h: 576
		},
		'featured-post--video': {
			w: 868,
			h: 544
		},
		'default-post--video': {
			w: 630,
			h: 352
		},
		'post-slider': {
			w: 882,
			h: 576
		},
		'post-media--video': {
			w: 900,
			h: 512
		},
		'post-media--image': {
			w: 900,
			h: 512
		},
		'project-main-thumb': {
			w: 700,
			h: 416
		},
		'project-drawing-thumb--portrait': {
			w: 322,
			h: 416
		},
		'project-drawing-thumb--landscape': {
			w: 644,
			h: 208
		},
		'project-other-thumb': {
			w: 322,
			h: 208
		},
		'project-main-slider': {
			w: 826,
			h: 512
		},
		'project-drawings-slider': {
			w: 334,
			h: 254
		},
		'related-project--landscape': {
			w: 644,
			h: 448
		}
	},
	desktop1600: {}
};
var getContainerSize = exports.getContainerSize = function getContainerSize(container, preConfig) {
	var containerSize = {};

	if (container === 'custom') {
		containerSize.w = preConfig.w;
		containerSize.h = preConfig.h;

		return containerSize;
	}

	var windowDimensions = getWindowDimensions();
	var configTarget = void 0;

	if (windowDimensions.w >= 1600) {
		configTarget = config['desktop1600'];
	} else if (windowDimensions.w >= 1440) {
		configTarget = config['desktop1440'];
	} else if (windowDimensions.w >= 1280) {
		configTarget = config['desktop1280'];
	} else if (windowDimensions.w >= 1024) {
		configTarget = config['desktop'];
	} else if (windowDimensions.w >= 768) {
		configTarget = config['tablet'];
	} else if (windowDimensions.w >= 414) {
		configTarget = config['mobileX2'];
	} else {
		configTarget = config['mobile'];
	}
	containerSize.w = configTarget[container].w;
	containerSize.h = configTarget[container].h;
	return containerSize;
};

var getNoOfChars = exports.getNoOfChars = function getNoOfChars(container, preconfig) {
	var containerSize = typeof preconfig === 'undefined' ? getContainerSize(container) : getContainerSize('custom', preconfig);
	var font = getFontValues();

	var x = Math.floor(containerSize.w / font.characterWidth) + font.extra;
	var y = Math.floor(containerSize.h / font.characterHeight);

	return {
		x: x,
		y: y
	};
};

var getMaxWidth = exports.getMaxWidth = function getMaxWidth() {
	var windowSize = getWindowDimensions();
	var maxWidth = void 0;
	if (windowSize.w >= 1600) {
		maxWidth = 1512;
	} else if (windowSize.w >= 1440) {
		maxWidth = 1344;
	} else if (windowSize.w >= 1280) {
		maxWidth = 1162;
	} else if (windowSize.w >= 1024) {
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