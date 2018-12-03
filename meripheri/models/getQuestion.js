'use strict';
var mongoose =  require('mongoose');
var GetQuestionSchema = new mongoose.Schema({

      question : {
        type: String
	        },
	   status : {
		type : String,
		trim : true,
		default: "active"
	}
	
});

var GetQuestion = mongoose.model('GetQuestion',GetQuestionSchema);
module.exports = GetQuestion;
	
	