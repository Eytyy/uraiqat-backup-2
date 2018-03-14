import App from './containers/App';
import Home from './containers/Home';
import Post from './containers/Post';

const routes = [
	{ component: App,
		routes: [
			{ path: '/',
				exact: true,
				component: Home,
			},
			{ path: '/journal/:id',
				exact: true,
				component: Post
			}
		]
	}
];

export default routes;