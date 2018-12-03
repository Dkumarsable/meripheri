'use strict';
module.exports = function(app,connection) {

var UserCat = require('../controller/UserCatController');
 const validate = require('express-validation')
 const userCatValidations  = require('../validations/userCat');
 
 
       app.route('/userCat')
	      .post(userCatValidations.userCat, UserCat.save);
		  
	   app.route('/userCat')
	      .put(userCatValidations.userCat, UserCat.update);

       app.route('/userCat/:id')
	      .get( UserCat.listAll);		  
		  
		 
		  
		  
}