'use strict';
var mongoose =  require('mongoose');
var ImagesTableSchema = new mongoose.Schema({
	 
      image: {
		  type : String,
		  trim : true,
		  default: ""
	  },
      name: {
		type : String,
		trim : true,
		default: ""
	
	},
	  type: {
		type : String,
		trim : true,
		default: ""
	
	},
	
	  ref_id : {
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

var ImagesTable = mongoose.model('ImagesTable',ImagesTableSchema);
module.exports = ImagesTable;