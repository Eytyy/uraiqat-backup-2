'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var app = function app() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		configs: {
			adjustForMobile: false
		}
	};
	var action = arguments[1];

	switch (action.type) {
		case 'UPDATE_APP_CONFIGS':
			//eslint-disable-line
			return _extends({}, state, {
				configs: _extends({}, state.configs, action.response)
			});
		default:
			return state;
	}
};

exports.default = app;
var getConfigs = exports.getConfigs = function getConfigs(state) {
	return state.configs;
};