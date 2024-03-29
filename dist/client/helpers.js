"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxWidth = exports.getNoOfChars = exports.getContainerSize = exports.getFontValues = exports.getRandomGlyph = exports.getWindowDimensions = exports.getWindowSize = exports.getRandomIntInclusive = exports.formatDate = void 0;

// Content Helpers
var formatDate = function formatDate(date) {
  return date.replace(/-/g, '/').split('/').reverse().join('/');
};

exports.formatDate = formatDate;

var getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; // Window Helpers


exports.getRandomIntInclusive = getRandomIntInclusive;

var getWindowSize = function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

exports.getWindowSize = getWindowSize;

var getWindowDimensions = function getWindowDimensions() {
  var windowDimensions = {
    w: getWindowSize().width,
    h: getWindowSize().height
  };
  return windowDimensions;
}; // Patterns Helpers


exports.getWindowDimensions = getWindowDimensions;

var getRandomGlyph = function getRandomGlyph(defaultGlyphs) {
  var glyphs = typeof defaultGlyphs !== 'undefined' ? defaultGlyphs : ['-', '-', '/', '\\', '-', '-', '{', '-', '>', '-', '<', '\\', '-', '}', '-', '-', ']', '-', '[', '-', '/', '-', '-', '-', '/', '-', '\\', '-'];
  var index = getRandomIntInclusive(1, glyphs.length - 2);
  var glyph = glyphs[index];
  return glyph;
};

exports.getRandomGlyph = getRandomGlyph;

var getFontValues = function getFontValues() {
  var font = {};
  var windowDimensions = getWindowDimensions();

  if (windowDimensions.w >= 1024) {
    font.size = 20;
    font.characterHeight = 32;
    font.characterWidth = 14;
  } else if (windowDimensions.w >= 768) {
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

exports.getFontValues = getFontValues;
var config = {
  mobile: {
    'team-member--portrait': {
      w: 120,
      h: 168
    },
    'team-member-inner--portrait': {
      w: 270,
      h: 360
    },
    'default-post--portrait': {
      w: 270,
      h: 360
    },
    'default-post--landscape': {
      w: 270,
      h: 168
    },
    'featured-post--portrait': {
      w: 270,
      h: 420
    },
    'featured-post--landscape': {
      w: 270,
      h: 192
    },
    'featured-post--video': {
      w: 270,
      h: 192
    },
    'default-post--video': {
      w: 270,
      h: 168
    },
    'project-main-thumb': {
      w: 340,
      h: 240
    },
    'project-main-thumb--featured': {
      w: 270,
      h: 240
    },
    'post-slider': {
      w: 270,
      h: 192
    },
    'post-media--video': {
      w: 270,
      h: 192
    },
    'project-drawing-thumb--portrait': {
      w: 140,
      h: 192
    },
    'project-drawing-thumb--landscape': {
      w: 270,
      h: 96
    },
    'project-other-thumb': {
      w: 140,
      h: 96
    },
    'project-main-slider': {
      w: 270,
      h: 192
    },
    'project-drawings-slider': {
      w: 270,
      h: 144
    },
    'related-project--landscape': {
      w: 270,
      h: 192
    },
    'atelier-main-thumb--featured': {
      w: 270,
      h: 192
    },
    'atelier-main-slider': {
      w: 310,
      h: 192
    },
    'atelier-landing-media-image': {
      w: 270,
      h: 192
    },
    'atelier-landing-media-video': {
      w: 270,
      h: 192
    }
  },
  mobileX2: {
    'team-member--portrait': {
      w: 130,
      h: 192
    },
    'team-member-inner--portrait': {
      w: 330,
      h: 456
    },
    'default-post--portrait': {
      w: 330,
      h: 456
    },
    'default-post--landscape': {
      w: 330,
      h: 192
    },
    'featured-post--portrait': {
      w: 330,
      h: 456
    },
    'featured-post--landscape': {
      w: 330,
      h: 192
    },
    'featured-post--video': {
      w: 330,
      h: 192
    },
    'default-post--video': {
      w: 330,
      h: 240
    },
    'project-main-thumb': {
      w: 340,
      h: 240
    },
    'project-main-thumb--featured': {
      w: 340,
      h: 240
    },
    'post-slider': {
      w: 330,
      h: 192
    },
    'post-media--video': {
      w: 330,
      h: 192
    },
    'project-drawing-thumb--portrait': {
      w: 160,
      h: 192
    },
    'project-drawing-thumb--landscape': {
      w: 330,
      h: 96
    },
    'project-other-thumb': {
      w: 160,
      h: 96
    },
    'project-main-slider': {
      w: 330,
      h: 192
    },
    'project-drawings-slider': {
      w: 330,
      h: 144
    },
    'related-project--landscape': {
      w: 330,
      h: 192
    },
    'atelier-main-thumb--featured': {
      w: 340,
      h: 192
    },
    'atelier-main-slider': {
      w: 330,
      h: 192
    },
    'atelier-landing-media-image': {
      w: 330,
      h: 216
    },
    'atelier-landing-media-video': {
      w: 330,
      h: 216
    }
  },
  mobileLS: {
    'team-member--portrait': {
      w: 130,
      h: 192
    },
    'team-member-inner--portrait': {
      w: 310,
      h: 456
    },
    'default-post--portrait': {
      w: 160,
      h: 240
    },
    'default-post--landscape': {
      w: 200,
      h: 120
    },
    'featured-post--portrait': {
      w: 220,
      h: 360
    },
    'featured-post--landscape': {
      w: 380,
      h: 240
    },
    'featured-post--video': {
      w: 380,
      h: 240
    },
    'default-post--video': {
      w: 200,
      h: 120
    },
    'project-main-thumb': {
      w: 340,
      h: 240
    },
    'project-main-thumb--featured': {
      w: 340,
      h: 240
    },
    'post-slider': {
      w: 380,
      h: 240
    },
    'post-media--video': {
      w: 380,
      h: 240
    },
    'project-drawing-thumb--portrait': {
      w: 90,
      h: 144
    },
    'project-drawing-thumb--landscape': {
      w: 180,
      h: 72
    },
    'project-other-thumb': {
      w: 90,
      h: 72
    },
    'project-main-slider': {
      w: 440,
      h: 240
    },
    'project-drawings-slider': {
      w: 380,
      h: 144
    },
    'related-project--landscape': {
      w: 380,
      h: 240
    },
    'atelier-main-thumb': {
      w: 430,
      h: 264
    },
    'atelier-main-thumb--featured': {
      w: 440,
      h: 384
    },
    'atelier-main-slider': {
      w: 380,
      h: 240
    },
    'atelier-landing-media-image': {
      w: 380,
      h: 216
    },
    'atelier-landing-media-video': {
      w: 380,
      h: 216
    }
  },
  tablet: {
    'team-member--portrait': {
      w: 264,
      h: 384
    },
    'team-member-inner--portrait': {
      w: 300,
      h: 416
    },
    'default-post--portrait': {
      w: 228,
      h: 312
    },
    'default-post--landscape': {
      w: 324,
      h: 208
    },
    'featured-post--portrait': {
      w: 288,
      h: 468
    },
    'featured-post--landscape': {
      w: 612,
      h: 390
    },
    'featured-post--video': {
      w: 612,
      h: 390
    },
    'default-post--video': {
      w: 312,
      h: 208
    },
    'post-slider': {
      w: 566,
      h: 416
    },
    'post-media--video': {
      w: 660,
      h: 416
    },
    'project-main-thumb': {
      w: 342,
      h: 208
    },
    'project-main-thumb--featured': {
      w: 342,
      h: 234
    },
    'project-other-thumb': {
      w: 168,
      h: 130
    },
    'project-main-slider': {
      w: 590,
      h: 338
    },
    'project-drawings-slider': {
      w: 348,
      h: 208
    },
    'related-project--landscape': {
      w: 712,
      h: 416
    },
    'atelier-main-thumb--featured': {
      w: 342,
      h: 234
    },
    'atelier-main-slider': {
      w: 590,
      h: 388
    },
    'atelier-landing-media-image': {
      w: 588,
      h: 390
    },
    'atelier-landing-media-video': {
      w: 588,
      h: 390
    }
  },
  desktop: {
    'team-member--portrait': {
      w: 252,
      h: 384
    },
    'team-member-inner--portrait': {
      w: 308,
      h: 480
    },
    'default-post--portrait': {
      w: 228,
      h: 310
    },
    'default-post--landscape': {
      w: 350,
      h: 224
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
      h: 310
    },
    'post-slider': {
      w: 742,
      h: 512
    },
    'post-media--video': {
      w: 812,
      h: 512
    },
    'project-main-thumb': {
      w: 455,
      h: 288
    },
    'project-main-thumb--featured': {
      w: 342,
      h: 320
    },
    'project-drawing-thumb--portrait': {
      w: 210,
      h: 310
    },
    'project-drawing-thumb--landscape': {
      w: 420,
      h: 160
    },
    'project-other-thumb': {
      w: 210,
      h: 160
    },
    'project-main-slider': {
      w: 770,
      h: 480
    },
    'project-drawings-slider': {
      w: 278,
      h: 160
    },
    'related-project--landscape': {
      w: 546,
      h: 384
    },
    'atelier-main-thumb--featured': {
      w: 455,
      h: 320
    },
    'atelier-main-thumb--portrait': {
      w: 378,
      h: 576
    },
    'atelier-main-slider': {
      w: 854,
      h: 480
    },
    'atelier-landing-media-image': {
      w: 882,
      h: 544
    },
    'atelier-landing-media-video': {
      w: 882,
      h: 544
    }
  },
  desktop1280: {
    'team-member--portrait': {
      w: 252,
      h: 384
    },
    'team-member-inner--portrait': {
      w: 308,
      h: 480
    },
    'default-post--portrait': {
      w: 228,
      h: 320
    },
    'default-post--landscape': {
      w: 350,
      h: 224
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
      h: 328
    },
    'post-slider': {
      w: 742,
      h: 512
    },
    'post-media--video': {
      w: 812,
      h: 512
    },
    'project-main-thumb': {
      w: 359,
      h: 256
    },
    'project-main-thumb--featured': {
      w: 760,
      h: 288
    },
    'project-other-thumb': {
      w: 266,
      h: 192
    },
    'project-main-slider': {
      w: 770,
      h: 480
    },
    'project-drawings-slider': {
      w: 336,
      h: 254
    },
    'related-project--landscape': {
      w: 560,
      h: 384
    },
    'atelier-main-thumb--featured': {
      w: 760,
      h: 320
    },
    'atelier-main-slider': {
      w: 854,
      h: 480
    },
    'atelier-landing-media-image': {
      w: 882,
      h: 544
    },
    'atelier-landing-media-video': {
      w: 882,
      h: 544
    }
  },
  desktop1440: {
    'team-member--portrait': {
      w: 266,
      h: 384
    },
    'team-member-inner--portrait': {
      w: 308,
      h: 480
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
      w: 448,
      h: 640
    },
    'featured-post--landscape': {
      w: 868,
      h: 544
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
      w: 742,
      h: 512
    },
    'post-media--video': {
      w: 812,
      h: 512
    },
    'project-main-thumb': {
      w: 410,
      h: 256
    },
    'project-main-thumb--featured': {
      w: 878,
      h: 288
    },
    'project-other-thumb': {
      w: 322,
      h: 208
    },
    'project-main-slider': {
      w: 770,
      h: 512
    },
    'project-drawings-slider': {
      w: 336,
      h: 254
    },
    'related-project--landscape': {
      w: 532,
      h: 384
    },
    'atelier-main-thumb--featured': {
      w: 877,
      h: 416
    },
    'atelier-main-slider': {
      w: 1022,
      h: 576
    },
    'atelier-landing-media-image': {
      w: 882,
      h: 544
    },
    'atelier-landing-media-video': {
      w: 882,
      h: 544
    }
  },
  desktop1600: {
    'team-member--portrait': {
      w: 266,
      h: 384
    },
    'team-member-inner--portrait': {
      w: 308,
      h: 480
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
      w: 448,
      h: 640
    },
    'featured-post--landscape': {
      w: 966,
      h: 544
    },
    'featured-post--video': {
      w: 966,
      h: 544
    },
    'default-post--video': {
      w: 700,
      h: 416
    },
    'post-slider': {
      w: 742,
      h: 512
    },
    'post-media--video': {
      w: 882,
      h: 512
    },
    'project-main-thumb': {
      w: 476,
      h: 288
    },
    'project-main-thumb--featured': {
      w: 994,
      h: 352
    },
    'project-other-thumb': {
      w: 364,
      h: 256
    },
    'project-main-slider': {
      w: 966,
      h: 544
    },
    'project-drawings-slider': {
      w: 336,
      h: 254
    },
    'related-project--landscape': {
      w: 518,
      h: 384
    },
    'atelier-main-thumb--featured': {
      w: 994,
      h: 384
    },
    'atelier-main-slider': {
      w: 1022,
      h: 576
    },
    'atelier-landing-media-image': {
      w: 882,
      h: 544
    },
    'atelier-landing-media-video': {
      w: 882,
      h: 544
    }
  }
};

var getContainerSize = function getContainerSize(container, preConfig) {
  var containerSize = {};

  if (container === 'custom') {
    containerSize.w = preConfig.w;
    containerSize.h = preConfig.h;
    return containerSize;
  }

  var windowDimensions = getWindowDimensions();
  var configTarget;

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
  } else if (windowDimensions.w >= 480) {
    configTarget = config['mobileLS'];
  } else if (windowDimensions.w >= 375) {
    configTarget = config['mobileX2'];
  } else {
    configTarget = config['mobile'];
  }

  containerSize.w = configTarget[container].w;
  containerSize.h = configTarget[container].h;
  return containerSize;
};

exports.getContainerSize = getContainerSize;

var getNoOfChars = function getNoOfChars(container, preconfig, adjust) {
  var containerSize = typeof preconfig === 'undefined' ? getContainerSize(container) : getContainerSize('custom', preconfig);
  var font = adjust ? {
    characterWidth: 12,
    characterHeight: 24
  } : getFontValues();
  var x = adjust ? Math.floor(containerSize.w / font.characterWidth) + 3 : Math.floor(containerSize.w / font.characterWidth);
  var y = Math.floor(containerSize.h / font.characterHeight);
  return {
    x: x,
    y: y
  };
};

exports.getNoOfChars = getNoOfChars;

var getMaxWidth = function getMaxWidth() {
  var windowSize = getWindowDimensions();
  var maxWidth;

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
  } else if (windowSize.w >= 480) {
    maxWidth = 440;
  } else if (windowSize.w >= 375) {
    maxWidth = 340;
  } else {
    maxWidth = 280;
  }

  return maxWidth;
};

exports.getMaxWidth = getMaxWidth;