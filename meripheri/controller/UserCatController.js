'use strict';
//var DB = require('/');

const UserCat =  require('../models/userCat');

  // save function ---
exports.save = function(req, res){
	
	let data_to_save = {
                'user_id':req.body.user_id,
		        'cat_id' :req.body.cat_id
		       
		        
		}
		 UserCat.find({'_id':req.body.user_id},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "user category already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let userCat = new UserCat(data_to_save)
			
			                userCat.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "User category save successfull",
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
		       
		        'cat_id' :req.body.cat_id
		
		}
		
		
		UserCat.find({'_id':req.params.id}, function(err, result){
		
		UserCat.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "User category update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}		 


// get all by Seller function ----
  
  exports.listAll = function(req, res){
	  UserCat.find({'user_id':req.user_id}, function(err, results){
		  
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all  list by User category",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	
		  

		  
		  