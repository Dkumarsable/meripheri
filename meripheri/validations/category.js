'use strict';
const validate = require('express-validation');
let Joi = require('joi');

let CategorySchema = Joi.object().keys({
	
      name: Joi.string().min(4).required().error(
            new Error('Please enter valid name.')
        ),
    
	  description: Joi.string().required().error(
            new Error('Please enter valid description.')
        ),
		images: Joi.string().required().error(
            new Error('Please enter valid images.')
        ),
		p_id: Joi.string()
		
	});
	
let CategoryUpdateSchema = Joi.object().keys({
	
      name: Joi.string().min(4).required().error(
            new Error('Please enter valid name.')
        ),
    
	  description: Joi.string().required().error(
            new Error('Please enter valid description.')
        )
	  	
		
	});
		



exports.category = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, CategorySchema);
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

exports.categoryupdate = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, CategoryUpdateSchema);
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