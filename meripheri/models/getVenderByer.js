'use strict';
var mongoose =  require('mongoose');
var GetVenderByerSchema = new mongoose.Schema({
	
	
          
	  lat: {
         type: Number,
		  
		  },
     long: {
         type: Number,
		       
        },
	  type: {
         type: String,
		 
           },
 
   user_id : {
        type: String,
		
          },
		  
		
	
	

  

	
});
var GetVenderByer = mongoose.model('GetVenderByer',GetVenderByerSchema);
module.exports =GetVenderByer;