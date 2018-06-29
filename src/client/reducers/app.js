const app = (state = {
	configs: {
		adjustForMobile: false
	},
}, action) => {
	switch (action.type) {
	case 'UPDATE_APP_CONFIGS': //eslint-disable-line
		return {
			...state,
			configs: {
				...state.configs,
				...action.response
			},
		};
	default:
		return state;
	}	
};

export default app;

export const getConfigs = state => state.configs;
