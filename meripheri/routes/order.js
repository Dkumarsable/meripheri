'use strict';
module.exports = function(app,connection){
	
	var Order = require('../controller/OrderController');
 const validate = require('express-validation')
 const orderValidations  = require('../validations/order');
 
 
       app.route('/order')
	      .post(orderValidations.Oder, Order.save);
		  
		  
	   app.route('/order/:id')
	      .put(orderValidations.Oder, Order.update);
 
       app.route('/order/:id')
	      .delete(Order.remove);
		  
		  
	   app.route('/order/:id')
	      .get(Order.listAll); 
		  
		  
	   
 
 
 
 
}