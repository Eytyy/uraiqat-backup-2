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
var getRandomGlyph = exports.getRandomGlyph = function getRandomGlyph() {
	var glyphs = ['-', '-', '/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/', '-', '-', '-', '/', '-', '\\', '-'];
	var index = getRandomIntInclusive(1, glyphs.length - 2);
	var glyph = glyphs[index];
	return glyph;
};

var getFontValues = exports.getFontValues = function getFontValues() {
	var font = {};
	var windowDimensions = getWindowDimensions();

	if (windowDimensions.w >= 1920 && windowDimensions.h >= 1080) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else if (windowDimensions.w > 380 && windowDimensions.h > 900) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else {
		font.characterWidth = 14;
		font.characterHeight = 32;
	}

	return font;
};

var getContainerSize = exports.getContainerSize = function getContainerSize(container) {
	var containerSize = {
		w: container.w,
		h: container.h
	};
	var font = getFontValues();

	containerSize.w = containerSize.w - font.characterWidth * 2;
	containerSize.h = containerSize.h - font.characterHeight;

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
		w: 280,
		h: 416
	},
	'default-post--landscape': {
		w: 406,
		h: 288
	},
	'featured-post--portrait': {
		w: 462,
		h: 672
	},
	'featured-post--landscape': {
		w: 882,
		h: 576
	}
};

var getNoOfChars = exports.getNoOfChars = function getNoOfChars(sliderName) {
	var containerSize = getContainerSize(config[sliderName]);
	var font = getFontValues();

	var x = Math.floor(containerSize.w / font.characterWidth);
	var y = Math.floor(containerSize.h / font.characterHeight);

	return {
		x: x,
		y: y
	};
};