'use strict';
var mongoose =  require('mongoose');
var LanguageSchema = new mongoose.Schema({
	language : {
		type : String,
		trim : true,
		default: ""
	},
	
	status : {
		type : String,
		trim : true,
		default: "active"
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

var Language = mongoose.model('Language',LanguageSchema);
module.exports = Language;
	
	