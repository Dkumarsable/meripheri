'use strict';
module.exports = function(app,connection){
	
	var Category = require('../controller/CategoryController');
 const validate = require('express-validation')
 const categoryValidations  = require('../validations/category');
 
 
       app.route('/category')
	      .post(categoryValidations.category, Category.save);
		  
		  
	   app.route('/category/:id')
	      .put(categoryValidations.categoryupdate, Category.update);
 
       app.route('/category/:id')
	      .delete(Category.remove);
		  
		  
	   app.route('/category')
	      .get(Category.listAll); 
		  
		  
	   app.route('/category/:id')
	      .get(Category.view); 
		  
		app.route('/subcategory')
	      .post(Category.viewsub);   
       

 
 
 
}