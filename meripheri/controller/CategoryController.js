'use strict';
//var DB = require('/');

const Category =  require('../models/category');

  // save function--
exports.save = function(req, res){
	
	let data_to_save = {
                'name':req.body.name,
		        'description' :req.body.description,
		        'p_id' :req.body.p_id,
		        'images'  :  req.body.images
		}
		Category.find({'name':req.body.name},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "name category already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let category = new Category(data_to_save)
			
			                category.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "category save successfull",
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
		      'name'       : req.body.name,   
		     'description' : req.body.description, 
		     'p_id'        : req.body.p_id,
			 'images'  :  req.body.images
		
		}
		
		
		Category.find({'_id':req.params.id}, function(err, result){
		
		Category.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "Category update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}
	
	
	//remove function ----
	
	 exports.remove = function(req, res){
		   
	   Category.deleteMany({'_id':req.body.category_id}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove Category",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
	
	
	//allList function ---
	
	exports.listAll = function(req, res){
	  Category.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all Category list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
	

	
	
	// view function ---
	
	exports.view = function(req, res){
		
	  Category.findOne({'_id':req.params.id}, function(err, result){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "view Category",
			                 statusCode: 200,
			                 data: result
	  });
	  
	  
  });
  };
		//list child categories
	
	exports.viewsub = function(req, res){
		
	  Category.findOne({'p_id':req.body.p_id}, function(err, result){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "view subCategory",
			                 statusCode: 200,
			                 data: result
	  });
	  
	  
  });
  };
  
 // all remove --
exports.removeall = function(req, res){
		   
	   Category.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove all Category",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   }; 
	
	
	