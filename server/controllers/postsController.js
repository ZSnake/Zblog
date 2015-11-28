var post = require('../schemas/post');

exports.newPost = {
	auth: {
		mode:'required',
		strategy:'session',
		scope: 'admin'
	},
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
	auth: {
		mode:'required',
		strategy:'session',
		scope: 'admin'
	},
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
	auth: {
		mode:'required',
		strategy:'session',
		scope: 'admin'
	},
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
	auth: {
		mode:'required',
		strategy:'session',
		scope: 'admin'
	},
	handler: function(request, reply){
		post.update({_id: request.params.id}, {
			title: request.payload.title,
			subtitle: request.payload.subtitle,
			body: request.payload.body,
			date: request.payload.date,
			author: request.payload.author
		}, function(err){
			if(err)
				console.log("error: " + err)
		});
		return reply('ok');
	}
};

exports.removePost = {
	auth: {
		mode:'required',
		strategy:'session',
		scope: 'admin'
	},
	handler: function(request, reply){
		post.remove({_id: request.params.id}, function(err){
			if(err)
				console.log("error: " + err);
		});
	}
};
