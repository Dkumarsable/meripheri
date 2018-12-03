'use strict';
var mongoose =  require('mongoose');
var UserSchema = new mongoose.Schema({
	 
	 name: {
		type : String,
		trim : true,
		default: ""
	
	},
	mobile_no: {
		type : Number,
		trim : true,
		default: ""
	
	},
	email: {
		type : String,
		trim : true,
	    unique: true,
		default: ""
	
	},
	security_question: {
		type : String,
		trim : true,
		default: ""
	
	},
	answer :{
		type : String,
		trim : true,
		default: ""
		
		},
	password: {
		type : String,
		trim : true,
		default: ""
	},
    confirm_possword: {
		type : String,
		trim : true,
		default: ""
	
	},
	status : {
		type : String,
		trim : true,
		default: "active"
	},
	laguage: {
		type : String,
		trim : true,
		default: ""
	},
	new_password: {
		type : String,
		trim : true,
		default: ""
	},
	loc: {
        type: { type: String },
        coordinates: [ ]
    }
	
	
});
UserSchema.index({ "loc": "2dsphere" });
var User = mongoose.model('User',UserSchema);
module.exports = User;