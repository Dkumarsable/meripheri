'use strict';
var mongoose =  require('mongoose');
var OrderSchema = new mongoose.Schema({
	product_id : {
		type : String,
		trim : true,
		default: ""
	},
	user_id : {
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
	}
	
});

var Order = mongoose.model('Order',OrderSchema);
module.exports = Order;
	
	