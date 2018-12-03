'use strict';
const validate = require('express-validation');
let Joi = require('joi');

    let  LanguageSchema = Joi.object().keys({
         
		 language: Joi.string().required()
		 
     });
    
	exports.language = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, LanguageSchema );
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

