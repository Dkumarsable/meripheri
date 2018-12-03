'use strict';
const validate = require('express-validation');
let Joi = require('joi');


let ProductTableSchema = Joi.object().keys({
	
      name: Joi.string().required().error(
            new Error('Please enter valid product name.')
        ),
    
	  description: Joi.string().required().error(
            new Error('Please enter valid description.')
        ),
		
	  user_id: Joi.string().required().error(
             new Error('Please enter valid user ID.')
        ),
		
       skq: Joi.string().required(),
	   
	   category_id: Joi.string().required().error(
             new Error('Please enter valid category ID.')
        ),
		images: Joi.string().required().error(
            new Error('Please enter valid images.')
        ),
		
	});
	
exports.productTable = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, ProductTableSchema);
    if (err) {

        if (err.error) {
            let error_message = "";
            if (err.error.details) {
                error_message = err.error.details[0].message;
            } else {
                error_message = err.error.message;
            }
            return res.status(422).send({
                status: false,
                message: error_message,
                statusCode: 422,
                data: {}
            });

            return false;
        }
    }

    next();
}	