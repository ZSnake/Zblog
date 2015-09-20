var Hapi = require('hapi');
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(require('inert'), function(err){
	// Add the route
	server.route({
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
	});

	// Start the server
	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
