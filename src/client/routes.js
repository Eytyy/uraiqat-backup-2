import App from './containers/App';
import Home from './containers/Home';
import Post from './containers/Post';

import Work from './containers/Work';
import Project from './containers/Project';

import Atelier from './containers/Atelier';
import Practice from './containers/Practice';
import Contact from './containers/Contact';
import Search from './containers/Search';
import TeamMember from './containers/TeamMember';
import Career from './containers/Career';

const routes = [
	{ component: App,
		routes: [
			{ path: '/',
				exact: true,
				component: Home,
			},
			{ path: '/work',
				exact: true,
				component: Work,
			},
			{ path: '/work/:id',
				exact: true,
				component: Project,
			},
			{ path: '/atelier',
				exact: true,
				component: Atelier,
			},
			{ path: '/practice',
				exact: true,
				component: Practice,
			},
			{ path: '/contact',
				exact: true,
				component: Contact,
			},
			{ path: '/journal/:id',
				exact: true,
				component: Post
			},
			{ path: '/search',
				exact: true,
				component: Search
			},
			{ path: '/team/:id',
				exact: true,
				component: TeamMember
			},
			{ path: '/careers/:id',
				exact: true,
				component: Career
			}
		]
	}
];

export default routes;