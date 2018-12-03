'use strict';
var mongoose =  require('mongoose');
var UserCatSchema = new mongoose.Schema({
	
	
	  user_id: {
		type : String,
		trim : true,
		default: ""
	  },
	   cat_id: {
		type : String,
		trim : true,
		default: ""
	  },
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	
	

	
});


var UserCat = mongoose.model('UserCat',UserCatSchema);
module.exports =UserCat;