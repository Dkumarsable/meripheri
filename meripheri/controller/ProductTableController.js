'use strict';
//var DB = require('/');

const ProductTable =  require('../models/productTable');
   
   //save function ---
exports.save = function(req, res){
	let data_to_save = {
		        'user_id'  :  req.body.user_id,
                'name'     :  req.body.name,
				'skq'      :  req.body.skq,
				'category_id':req.body.category_id,
				'images'  :  req.body.images,
		        'description' :req.body.description	        
		        
		}
		
		let productTable = new ProductTable(data_to_save)
			
			 productTable.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "productTable item save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });	
	}
	
	// product table update function---
exports.update = function(req, res) {
		
		let data_to_update = {
		      'name'       : req.body.name,   
		     'description' : req.body.description, 
		     'skq'      :  req.body.skq,
			 'images'  :  req.body.images
		}
		
		
		ProductTable.find({'_id':req.params.id}, function(err, result){
		
		ProductTable.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "ProductTable item update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}

//remove function ----
	
	 exports.remove = function(req, res){
		   
	   ProductTable.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: " remove  ProductTable items ",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };	
	
//allList function ---
	
	exports.listAll = function(req, res){
	  ProductTable.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all ProductTable list items.",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	
	