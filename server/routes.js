var homeController = require('./controllers/homeController');
var postsController = require('./controllers/postsController');
var authController = require('./controllers/authController');

exports.endpoints = [
					{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'POST', path: '/api/post', config: postsController.newPost},
					{method: 'GET', path: '/api/posts', config: postsController.getAll},
					{method: 'GET', path: '/api/posts/{id}', config: postsController.getById},
				 	{method: 'PUT', path: '/api/posts/{id}', config: postsController.editPost},
				 	{method: 'DELETE', path: '/api/posts/{id}', config: postsController.removePost},
				 	{method: 'POST', path: '/api/login', config: authController.login},
				 	{method: 'GET', path: '/api/logout', config: authController.logout}
				];
