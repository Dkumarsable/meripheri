'use strict';
module.exports = function(app,connection){
	
	var Language = require('../controller/LanguageController');
 const validate = require('express-validation')
 const languageValidations  = require('../validations/language');
 
 
       app.route('/language')
	      .post(languageValidations.language, Language.save);
		  
		  
	   app.route('/language/:id')
	      .put(languageValidations.language, Language.update);
 
       app.route('/language/:id')
	      .delete(Language.remove);
		  
		  
	   app.route('/language')
	      .get(Language.listAll); 
		  
		  
	   
 
 
 
 
}