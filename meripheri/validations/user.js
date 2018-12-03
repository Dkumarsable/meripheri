'use strict';
const validate = require('express-validation');
let Joi = require('joi');

let signInSchema = Joi.object().keys({
    email: Joi.string().email(),
	mobile_no: Joi.string()
        .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .error(
            new Error('Please enter valid mobile no.')
        ),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
	
	logintype : Joi.string().required()
	
	

});

let signupSchema = Joi.object().keys({
    name: Joi.string().min(4).required().error(
            new Error('Please enter valid name.')
        ),
    mobile_no: Joi.string()
        .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .required().error(
            new Error('Please enter valid mobile no.')
        ),
	email: Joi.string().email().required().error(
            new Error('Please enter valid email.')
        ),
	
	   security_question: Joi.string().required(),
	
	   answer :  Joi.string().required(),
	   lat :  Joi.number().required(),
	   long :  Joi.number().required(),
	   password :Joi.string().min(6).alphanum().required().error(
	            new Error('Please enter minimun 6 digit password.')
              ),
	
	    confirm_possword :Joi.string().valid(Joi.ref('password')).required().strict(),
	
	    gcm_id:Joi.string().required().error(
            new Error('GCM id is required.')
        ),
       device_id:Joi.string().required().error(
            new Error('Device id is required.')
        )
  
});


let otpSchema = Joi.object().keys({
    otp:   Joi.string().min(4).max(4).required().error(
            new Error('Please enter valid 4 digit OTP.')
        ),
    user_id:   Joi.string().required().error(
            new Error('User id is required.')
        ),
    email: Joi.string().email().required().error(
            new Error('Please enter valid email.')
        ),
    password: Joi.string().required().error(
                new Error('Password is required.')
        )
});

let mobileSchema = Joi.object().keys({

    mobile_no: Joi.string()
        .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .required().error(
            new Error('Please enter valid 10 digit mobile no.')
        )

});

let ProfileSchema = Joi.object().keys({
        name: Joi.string().min(4).required().error(
            new Error('Please enter valid name.')
        ),
         mobile_no: Joi.string()
        .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .required().error(
            new Error('Please enter valid mobile no.')
        )     
	  
});

let forgotPasswordSchema = Joi.object().keys({
	email: Joi.string().email().required(),
    
    new_password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
	
	confirm_possword :Joi.string().valid(Joi.ref('new_password')).required().strict()
	
	

});

let ResetPasswordSchema = Joi.object().keys({
	email: Joi.string().email().required(),
    
    new_password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
	
	confirm_possword :Joi.string().valid(Joi.ref('new_password')).required().strict()
	
	

});

let UpdatePasswordSchema = Joi.object().keys({
	
    new_password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
	
	confirm_possword :Joi.string().valid(Joi.ref('new_password')).required().strict()
	
	

});


let otppSchema = Joi.object().keys({
    otp:   Joi.string().min(4).max(4).required().error(
            new Error('Please enter valid 4 digit OTP.')
        ),
    user_id:   Joi.string().required().error(
            new Error('User id is required.')
        ),
    email: Joi.string().email().required().error(
            new Error('Please enter valid email.')
        ),
    password: Joi.string().required().error(
                new Error('Password is required.')
        )
});

exports.update = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, ProfileSchema);
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

exports.signIn = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, signInSchema);
	let error_message="";
    if (err.error) {
	        if (err.error.details) {
                error_message = err.error.details[0].message;
            } else {
                error_message = err.error.message;
            }
		
        if (err.error) {
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

exports.verifyOTP = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, otpSchema);

    if (err) {
        if (err.error) {
            return res.status(422).send({
                status: false,
                message: err.error.message,
                statusCode: 422,
                data: {}
            });


            return false;
        }

    }
    next();
}


exports.validateMobile = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, mobileSchema);

    if (err) {
        if (err.error) {
            return res.status(422).send({
                status: false,
                message: err.error.message,
                statusCode: 422,
                data: {}
            });


            return false;
        }

    }
    next();
}

exports.signUp = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, signupSchema);
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


exports.forgot = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, forgotPasswordSchema);
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

exports.resetp = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, ResetPasswordSchema);
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

exports.updatep = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, UpdatePasswordSchema);
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

exports.verifyOTP = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, otppSchema);

    if (err) {
        if (err.error) {
            return res.status(422).send({
                status: false,
                message: err.error.message,
                statusCode: 422,
                data: {}
            });


            return false;
        }

    }
    next();
}

//module.exports = validateLogin ;