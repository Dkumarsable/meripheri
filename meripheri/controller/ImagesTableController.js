'use strict';
//var DB = require('/');

const ImagesTable =  require('../models/imagesTable');
   
   //save function ---
exports.save = function(req, res){
	let data_to_save = {
		        'image'    :  req.body.image,
                'name'     :  req.body.name,
				'type'     :  req.body.type,
				'ref_id'   :  req.body.ref_id
		                
	}
		
		let imagesTable = new ImagesTable(data_to_save)
			
			 imagesTable.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "imagesTable item save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });	
	}
	
	// product table update function---
exports.update = function(req, res) {
		
		let data_to_update = {
		       'image'     :  req.body.image,
                'name'     :  req.body.name,
				'type'     :  req.body.type
		}
		
		
		ImagesTable.find({'_id':req.params.id}, function(err, result){
		
		ImagesTable.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "ImagesTable item update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}

//remove function ----
	
	 exports.remove = function(req, res){
		   
	   ImagesTable.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: " remove  ImagesTable items ",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };	
	
//allList function ---
	
	exports.listAll = function(req, res){
	  ImagesTable.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all ImagesTable list items.",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	
	