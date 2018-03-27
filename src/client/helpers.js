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

	if (windowDimensions.w >= 1920 && windowDimensions.h >= 1080) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else if(windowDimensions.w > 380 && windowDimensions.h > 900) {
		font.characterWidth = 14;
		font.characterHeight = 32;
	} else {
		font.characterWidth = 14;
		font.characterHeight = 32;
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
};

export const getNoOfChars = (sliderName) => {
	const containerSize = getContainerSize(config[sliderName]);
	const font = getFontValues();

	const x = Math.floor(containerSize.w/font.characterWidth);
	const y = Math.floor(containerSize.h/font.characterHeight);

	return {
		x,
		y
	};
};
