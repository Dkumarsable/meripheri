'use strict';
module.exports = function(app,connection) {

var User = require('../controller/UserController');
 const validate = require('express-validation')
 const userValidations  = require('../validations/user');

	
	 
	   app.route('/signUp')
	      .post(userValidations.signUp, User.saveUser);
	
	
	   app.route('/login')
	      .post(userValidations.signIn, User.LoginUser);
	
	
	   app.route('/validate-mobile')
          .post(userValidations.validateMobile, User.checkMobileAvailability);
		  
	   app.route('/user/:id')  
		   .get(User.remove);
		   
	  app.route('/profile/:id')
	      .put(userValidations.update, User.profile);  

      app.route('/user')
	      .get( User.listAll);	

      app.route('/forgot')
	     .put(userValidations.forgot, User.forgotPassword);
     
      app.route('/reset')
	     .put(userValidations.resetp, User.resetPassword);	

      app.route('/update/:id')
	     .put(userValidations.updatep, User.updatePassword);
		 
	  app.route('/verify-otp')
         .post(userValidations.verifyOTP, User.verifyOTP);

      app.route('/resend-otp')
         .post(User.resendOTP);		
		
	  app.route('/location')
	     .post(User.setLocation); 
		 
	  app.route('/user')  
		 .delete(User.remove);	
		 
      app.route('/nearlocation')
	     .post(User.getNearBy);		 
		 
	 
	 
	  
}