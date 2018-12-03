'use strict';
const validate = require('express-validation');
let Joi = require('joi');

    let SetAlertSchema = Joi.object().keys({
         
		 distance: Joi.string().required(),
		 from    : Joi.number().required(),
		 to      : Joi.number().required(),
		 comments: Joi.string().required(),
		 cart_id : Joi.string().required(),
	//	 evalerts: Joi.boolean().required()
     });
    
	exports.setAlert = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, SetAlertSchema );
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

