'use strict';
module.exports = function(app,connection){

var SetAlert = require('../controller/SetAlertController');
 const validate = require('express-validation')
 const setAlertValidations  = require('../validations/setAlert');


      app.route('/SetAlert')
	      .post(setAlertValidations.setAlert, SetAlert.save);
		  
	  app.route('/SetAlert/:id')
	      .put(setAlertValidations.setAlert, SetAlert.update);	 

      app.route('/SetAlert/:id')
	      .delete(SetAlert.remove);

      app.route('/SetAlert/:id')
	      .get(SetAlert.listAll);


}