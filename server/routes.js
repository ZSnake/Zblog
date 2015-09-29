var homeController = require('./controllers/homeController');
var postsController = require('./controllers/postsController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					 {method: 'POST', path: '/api/post', config: postsController.newPost}];