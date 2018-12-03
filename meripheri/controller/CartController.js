'use strict';
//var DB = require('/');

const Cart =  require('../models/cart');
   
// save function ---
exports.save = function(req, res){
	
	let data_to_save = {
                'user_id':req.body.user_id,
		        'product_id' :req.body.product_id,
		        'quantity':req.body.quantity
		        
		}
		Cart.find({'_id':req.body.user_id},function (err,result){
			
			 
		             let cart = new Cart(data_to_save)
			
			                cart.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: " save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });
			
		         
		        
		}
			 )};
	
	// product table update function---
exports.update = function(req, res) {
		
		let data_to_update = {
		      'product_id' :req.body.product_id,
		        'quantity':req.body.quantity
		}
		
		
		Cart.find({'_id':req.body.user_id}, function(err, result){
		Cart.update(data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "cart item update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}

//remove function ----
	
	 exports.remove = function(req, res){
		  
	   Cart.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: " remove Cart items ",
			                 statusCode: 200,
			                 data: result
			});
		  });
		
	   };	
	
//allList function ---
	
	exports.listAll = function(req, res){
	  Cart.find({'_id':req.params.id}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all Product  items list.",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	
	