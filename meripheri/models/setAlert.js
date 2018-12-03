'use strict';
var mongoose =  require('mongoose');
var SetAlertSchema = new mongoose.Schema({
	distance : {
		type : String,
		trim : true,
		default: ""
	},
	from : {
		type : Number,
		trim : true,
		default: 0
	},
	to : {
		type : Number,
		trim : true,
		default: 0
	},
	comments : {
		type : String,
		trim : true,
		default: ""
	},
	evalerts : {
		type : Boolean,
		trim : true,
		default: false
	},
	cart_id : {
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
	}
	
});

var SetAlert = mongoose.model('SetAlert',SetAlertSchema);
module.exports = SetAlert;
	
	