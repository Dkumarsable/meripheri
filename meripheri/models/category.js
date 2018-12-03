'use strict';
var mongoose =  require('mongoose');
var CategorySchema = new mongoose.Schema({
	 
     name: {
		type : String,
		trim : true,
		default: ""
	
	},
	description: {
		type : String,
		trim : true,
		default: ""
	
	},
	status: {
		type : String,
		trim : true,
		default: ""
	
	},
	images :{
		type : String,
		trim : true,
		default: ""
		
		},
	p_id : {
		type : String,
		trim : true,
		default: "0"
	},
	
    created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
  status : {
		type : String,
		trim : true,
		default: "active"
	}
});

var Category = mongoose.model('Category',CategorySchema);
module.exports = Category;