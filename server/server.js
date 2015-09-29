var hapi = require('hapi');
var mongoose = require('mongoose');
var inert = require('inert');
var routes = require('./routes');
// Create a server with a host and port
var server = new hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000,
});

mongoose.connect('mongodb://localhost/Zblog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register(inert, function(err){
	
	server.route(routes.endpoints);
	// Start the server

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
