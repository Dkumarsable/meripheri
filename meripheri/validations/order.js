'use strict';
const validate = require('express-validation');
let Joi = require('joi');

    let  OderSchema = Joi.object().keys({
         
		 product_id: Joi.string().required(),
		 
		 user_id: Joi.string().required(),
		 
		 status: Joi.string().required()
		 
     });
    
	exports.Oder = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, OderSchema );
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

