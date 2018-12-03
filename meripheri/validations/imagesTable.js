'use strict';
const validate = require('express-validation');
let Joi = require('joi');


let ImagesTableSchema = Joi.object().keys({
	  image: Joi.string().required(),
	  
	  ref_id : Joi.string().required(),
	  
      name: Joi.string().required().error(
            new Error('Please enter valid  name.')
        ),
	   type: Joi.string().required().error(
            new Error('Please enter valid  type.')
        )	
	});
	
exports.ImagesTable = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, ImagesTableSchema);
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