var mongoose = require('mongoose');
 
var PostSchema = new mongoose.Schema({
   	title : String,
	subtitle : String,
  	body : String,
    date : Date,
    author : String
});

module.exports = mongoose.model('Post', PostSchema);