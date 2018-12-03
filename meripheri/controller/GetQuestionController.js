'use strict';
const GetQuestion =  require('../models/getQuestion');

       // save function---
  exports.saveQuestion = function(req, res) {
	 
       let data_to_save = {
		   
		   'question':req.body.question
	   }	 
	        let getquestion = new GetQuestion(data_to_save)
	  
	         getquestion.save(function (err, result){
				 
				 if (err) throw err;
				 
				 return res.status(200).send({
					 status: true,
					 message: "select question",
					 statusCode: 200,
					 data: result
				 });
			 });
  };
  
  // list all ---
  
  exports.listAll = function(req, res){
	  GetQuestion.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all question list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  
  
