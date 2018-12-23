const app = (state = {
	configs: {
		adjustForMobile: false
	},
	activePageSection: {
		atelier: 'about',
	}
}, action) => {
	switch (action.type) {
	case 'UPDATE_ATELIER_ACTIVE_SECTION': //eslint-disable-line
		return {
			...state,
			activePageSection: {
				...state.activePageSection,
				atelier: action.response,
			}
		}
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

export const getActiveAtelier = state => state.activePageSection.atelier;