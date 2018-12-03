'use strict';
//var DB = require('/');

const SetAlert =  require('../models/setAlert');

  // save function--
exports.save = function(req, res){
	
	let data_to_save = {
                'distance':req.body.distance,
				'from'    :req.body.from,
		        'to'      :req.body.to,
				'comments':req.body.comments,
				'cart_id' :req.body.cart_id,
				'evalerts':req.body.evalerts
		        
		}
	/*	SetAlert.find({},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: " Alert already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} */
			//else {
		             let setAlert = new SetAlert(data_to_save)
			
			                setAlert.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "Alert  save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });
			//}
		         
		        
		}
			// )};
		  
	
	
	// update function ----
	
	exports.update = function(req, res) {
		
		let data_to_update = {
		        
		     'distance':req.body.distance,
				'from'    :req.body.from,
		        'to'      :req.body.to,
				'comments':req.body.comments,
				'evalerts':req.body.evalerts
		
		}
		
		
				SetAlert.find({'_id':req.params.id}, function(err, result){
		
		SetAlert.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "Alert update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}
	
	
	
	
	
	//allList function ---
	
	exports.listAll = function(req, res){
	  SetAlert.findOne({'_id':req.params.id}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "Set Alert list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  //remove function ----
	
	 exports.remove = function(req, res){
		   
	   SetAlert.deleteMany({'_id':req.params.id}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove Alert",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
	
	
	