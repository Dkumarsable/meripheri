'use strict';
module.exports = function(app,connection) {
	
var GetVenderByer = require('../controller/GetVenderByerController');
 const validate = require('express-validation')
 const getVenderByerValidations  = require('../validations/getVenderByer');	
	
	
	    app.route('/getvenbyer')
	      .post(getVenderByerValidations.getVenderByer,GetVenderByer.save);
		  
		  app.route('/getvenbyer')
	      .get(GetVenderByer.save);

	     
	
}