'use strict';
const GetVenderByer =  require('../models/getVenderByer');

  // save function--
exports.save = function(req, res){
	
	let data_to_save = {
		     
                'lat' : req.body.lat,
		        'long' : req.body.long,
				'type' :  req.body.type,
			
               			
				
		        
		}
		GetVenderByer.find({'_id':req.body.user_id},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "user not allow.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let getVenderByer = new GetVenderByer(data_to_save)
			
			                getVenderByer.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "getVender save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });
			}
		         
		        
		}
			 )};
		  
  // list all ---
 
  exports.listAll = function(req, res){
	  GetVenderByer.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  
  