'use strict';
module.exports = function(app,connection){
	
	var Cart = require('../controller/CartController');
 const validate = require('express-validation')
 const cartValidations  = require('../validations/cart');
 
 
       app.route('/cart')
	      .post(cartValidations.cart, Cart.save);
		  
	  app.route('/cart/:id')
	      .put(cartValidations.cart, Cart.update);	 

      app.route('/cart/:id')
	      .delete(Cart.remove);

      app.route('/cart/:id')
	      .get(Cart.listAll); 		  
		  
}
