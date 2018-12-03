'use strict';
module.exports = function(app,connection){

var ImagesTable = require('../controller/ImagesTableController');
 const validate = require('express-validation')
 const imagesTableValidations  = require('../validations/imagesTable');


      app.route('/imagesTable')
	      .post(imagesTableValidations.ImagesTable, ImagesTable.save);
		  
	  app.route('/imagesTable/:id')
	      .put(imagesTableValidations.ImagesTable, ImagesTable.update);	 

      app.route('/imagesTable/:id')
	      .delete(ImagesTable.remove);

      app.route('/imagesTable')
	      .get(ImagesTable.listAll);


}