import App from './containers/App';
import Home from './containers/Home';
import Post from './containers/Post';
import Work from './containers/Work';
import Atelier from './containers/Atelier';
import Practice from './containers/Practice';
import Contact from './containers/Contact';


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
			}
		]
	}
];

export default routes;