'use strict';
var mongoose =  require('mongoose');
var CartSchema = new mongoose.Schema({
	 
      user_id: {
		  type : String,
		  trim : true,
		  default: ""
	  },
	  product_id: {
		  type : String,
		  trim : true,
		  default: ""
	  },
	  quantity : {
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
	status : {
		type : String,
		trim : true,
		default: "active"
	}
});

var Cart = mongoose.model('cart',CartSchema);
module.exports = Cart;