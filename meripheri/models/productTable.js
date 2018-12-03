'use strict';
var mongoose =  require('mongoose');
var ProductTableSchema = new mongoose.Schema({
	 
      user_id: {
		  type : String,
		  trim : true,
		  default: ""
	  },
      name: {
		type : String,
		trim : true,
		default: ""
	
	},
	  skq: {
		type : String,
		trim : true,
		default: ""
	
	},
	
	  category_id : {
		type : String,
		trim : true,
		default: ""
	},
	  description: {
		type : String,
		trim : true,
		default: ""
	
	},
	image: {
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

var ProductTable = mongoose.model('ProductTable',ProductTableSchema);
module.exports = ProductTable;