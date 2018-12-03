'use strict';
const validate = require('express-validation');
let Joi = require('joi');

    let GetvenderByerSchema = Joi.object().keys({
         
		 user_id  : Joi.string().required(),
		 type     :Joi.string().required(),
		 lat      :Joi.number().required(),
		 long     :Joi.number().required()
     });
    
	exports.getVenderByer = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, GetvenderByerSchema );
    if (err) {
        if (err.error) {
            return res.status(422).send({
                status: false,
                message: err.error.details[0].message,
                statusCode: 422,
                data: {}
            });


            return false;
        }
    }

    next();
}

