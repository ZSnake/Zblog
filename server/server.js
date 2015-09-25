var Hapi = require('hapi');
var mongoose = require('mongoose');
var Post = require('./schemas/post');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(require('inert'), function(err){
	// Add the route

	mongoose.connect('mongodb://localhost/Zblog');
	server.route([{
		    method: 'POST',
			path: '/api/post',
			handler: function(request, reply){
				console.log(request.payload.post)
				var newPost = new Post({
					title: request.payload.title,
					subtitle: request.payload.subtitle,
					body: request.payload.body,
					date: request.payload.date,
					author: request.payload.author
				})
			}
		},
		{
		    method: 'GET',
			path: '/{param*}',
			handler: {
				directory: {
					path: ['../client/app', '../client/bower_components']
	
				}
			},
			config: {
				auth: false
			}
		}
		]);


	// Start the server
	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
