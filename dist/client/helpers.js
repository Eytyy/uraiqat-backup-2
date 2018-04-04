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

var getContainerSize = exports.getContainerSize = function getContainerSize(container) {
	var containerSize = {
		w: container.w,
		h: container.h
	};

	containerSize.w = containerSize.w;
	containerSize.h = containerSize.h;

	return containerSize;
};

var config = {
	'project-main-slider': {
		w: 826,
		h: 512
	},
	'project-drawings-slider': {
		w: 334,
		h: 254
	},
	'post-slider': {
		w: 882,
		h: 576
	},
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
	'related-project--landscape': {
		w: 644,
		h: 448
	},
	'project-main-thumb': {
		w: 700,
		h: 416
	},
	'project-drawing-thumb--landscape': {
		w: 644,
		h: 208
	},
	'project-drawing-thumb--portrait': {
		w: 322,
		h: 416
	},

	'project-other-thumb': {
		w: 322,
		h: 208
	},
	'post-media--video': {
		w: 900,
		h: 512
	},
	'post-media--image': {
		w: 900,
		h: 512
	}
};

var getNoOfChars = exports.getNoOfChars = function getNoOfChars(sliderName, preconfig) {
	var containerSize = typeof preconfig === 'undefined' ? getContainerSize(config[sliderName]) : getContainerSize(preconfig);
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