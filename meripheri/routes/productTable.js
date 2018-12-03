'use strict';
module.exports = function(app,connection){
	
	var ProductTable = require('../controller/ProductTableController');
 const validate = require('express-validation')
 const productTableValidations  = require('../validations/productTable');
 
 
       app.route('/productTable')
	      .post(productTableValidations.productTable, ProductTable.save);
		  
	  app.route('/productTable/:id')
	      .put(productTableValidations.productTable, ProductTable.update);	 

      app.route('/productTable/:id')
	      .delete(ProductTable.remove);

      app.route('/productTable')
	      .get(ProductTable.listAll); 		  
		  
}