'use strict';
module.exports = function(app,connection) {
	
var GetQuestion = require('../controller/GetQuestionController');
 const validate = require('express-validation')
 const getquestionValidations  = require('../validations/getQuestion');	
	
	
	    app.route('/question')
	      .post(getquestionValidations.getquestion, GetQuestion.saveQuestion);
		  

		app.route('/question')
	      .get(GetQuestion.listAll);  
		  
	     
	
}
