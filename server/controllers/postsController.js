var post = require('../schemas/post');

exports.newPost = {
	handler: function(request, reply){
		var newPost = new post({
			title: request.payload.title,
			subtitle: request.payload.subtitle,
			body: request.payload.body,
			date: request.payload.date,
			author: request.payload.author
		});
		newPost.save();					
		console.log('post saved');
		return reply('It worked, mofo!');
	}
};