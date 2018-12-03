'use strict';
//var DB = require('/');

const Language =  require('../models/language');

  // save function--
exports.save = function(req, res){
	
	let data_to_save = {
                'language':req.body.language
		        
		        
		}
		Language.find({},function (err,result){
			
			 if(!result[0]){
                      return res.status(422).send({
                                status: false,
                                message: " Language already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let language = new Language(data_to_save)
			
			                language.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "Language save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });
			}
		         
		        
		}
			 )};
		  
	
	
	// update function ----
	
	exports.update = function(req, res) {
		
		let data_to_update = {
		      'language'       : req.body.language   
		     
		
		}
		
		
		Language.find({'_id':req.params.id}, function(err, result){
		
		Language.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "Language update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}
	
	
	
	
	
	//allList function ---
	
	exports.listAll = function(req, res){
	  Language.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all Language list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  //remove function ----
	
	 exports.remove = function(req, res){
		   
	   Language.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove Language",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
	
	
	