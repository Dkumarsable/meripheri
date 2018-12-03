'use strict';
//var DB = require('/');

const Order =  require('../models/order');

  // save function--
exports.save = function(req, res){
	
	let data_to_save = {
                'user_id':req.body.user_id,
				'product_id':req.body.product_id,
		        'status':req.body.status
		        
		}
		Order.find({'user_id':req.body.user_id},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: " Order already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let order = new Order(data_to_save)
			
			                order.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "Order save successfull",
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
		        
		     'product_id':req.body.product_id,
			  'status':req.body.status
		
		}
		
		
				Order.find({'_id':req.params.id}, function(err, result){
		
		Order.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "Order update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}
	
	
	
	
	
	//allList function ---
	
	exports.listAll = function(req, res){
	  Order.findOne({'_id':req.params.id}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show Order list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  //remove function ----
	
	 exports.remove = function(req, res){
		   
	   Order.deleteMany({'_id':req.params.id}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove Order",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
	
	
	