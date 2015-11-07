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
		return reply('ok');
	}
};

exports.getAll = {
	handler: function(request, reply){
		post.find({}, function(err, posts){
			if(!err){
				reply(posts);
			}else{
				console.log('aww yiss, dis is an error: ' + error);
			};
		});
	}
};

exports.getById = {
	handler: function(request, reply){
		var postId = request.params.id;
		post.find({_id: postId}, function(err, post){
			if(!err){
				reply(post);
			}else{
				console.log('aww yiss, dis is an error: ' + err);
			};
		});
	}
};

exports.editPost = {
	handler: function(request, reply){
		post.update({_id: request.params.id}, {
			title: request.payload.title,
			subtitle: request.payload.subtitle,
			body: request.payload.body,
			date: request.payload.date,
			author: request.payload.author
		}, {upsert: true}, function(err){
			if(err)
				console.log("error: " + err)
		});
		return reply('ok');
	}
};
