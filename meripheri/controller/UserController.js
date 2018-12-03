'use strict';
var DB = require('../database');
let jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User =  require('../models/user');

    // CREATES A NEW USER
    exports.saveUser = function(req, res) {
	  let password = generatePassword(req.body.password);
	  
	  let Lat=parseFloat(req.body.lat);
	  let Long=parseFloat(req.body.long);
	
		
	  let data_to_save={  
		  'name'            : req.body.name,
          'mobile_no'       : req.body.mobile_no,
          'email'          : req.body.email,
          'security_question': req.body.security_question,
          'answer'          :  req.body.answer,
          'password'        : password,
          'confirm_possword': req.body.confirm_possword,
		  "loc": { 
					 "type": "Point",
					 "coordinates": [Lat,Long]
				 }
		
	     }
			let user = new User(data_to_save)
			
			User.find({'email':req.body.email},function (err,result){
		     
			  if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "Email already is use.",
                                statusCode: 422,
                                data: {}
			             });
			  } 
			  else (
     		       user.save(function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: "registration successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    })
                 )
			});		
  
};
    //   comparePassword --
	
	  let comparePassword = function(pwd, password) {
		  
      let hash = password;
    //  let new_hash = hash.replace("$6$", "$2b$");
         return bcrypt.compareSync(pwd,hash);
};


       // remove function
	   
	   exports.remove = function(req, res){
		   
	   User.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove all user",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };

	
      //   LOGIN USERS -- 
	  
    exports.LoginUser = function(req, res){
	  let cond = {}; 
	    let logintype = req.body.logintype;
	  
	  if(logintype == 'mobile_no')
	  {
		  cond = {'mobile_no': req.body.mobile_no}
	  }
	  else
	  {
		  cond = {'email': req.body.email}
	  }
	User.find(cond,function (err,result){
		
		  if (err) {
		return res.status(401).send({
			status:false,
			message : "Error in query",
			statusCode:401,
			data: {}
			 
					
		   });
		  
		
		} 
		else if  (!result[0]) {
            return res.status(401).send({
                status: false,
                message: "Authentication failed. Email not found.",
                statusCode: 401,
                data: {}
            });
			
		} else if (result[0]){
			

          if(!comparePassword(req.body.password, result[0].password)) {
			  
                return res.status(401).send({
                    status: false,
                    message: "Authentication failed. Wrong password.",
                    statusCode: 401,
                    data: {}
                });
		
		} else {
			  let token = jwt.sign({
                    email: result[0].email,
                    name: result[0].name,
                    _id: result[0].id
                }, 'dsrthe686689678~#$TYUH/365885;;;;;;;;/');
                let responseData = new Object();
                responseData.user_id = result[0].id;
                responseData.name = result[0].name;
                responseData.email = result[0].email;
                responseData.status = result[0].status;
                responseData.token = token;
			    
				
				 return res.status(200).send({
                    status: true,
                    message: "Logged In Successfully.",
                    statusCode: 200,
                    data: responseData
                });
	    	}
		}		
	});
};
     //  generatePassword ---- 
 
  function generatePassword(pwd) {

    let hash = bcrypt.hashSync(pwd, 10);
    return hash;
};


  // updateProfile ----
 exports.profile = function(req, res) {
	  
	  let data_to_save={  
		  'name'            : req.body.name,
          'mobile_no'       : req.body.mobile_no
           }
			
			User.find({'_id':req.params.id},function (err,result){
		     
			  if(!result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "account not found.", 
                                statusCode: 422,
                                data: {}
			             });
			  } 
			  else {
     		       User.update({'_id':req.params.id},data_to_save, function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: "profileupdate successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    })
			}
			});		
  
};
 
      // checkMobileAvailability ---
	  exports.checkMobileAvailability = function(req, res) {
    
   User.find ({'mobile_no':req.body.mobile_no}, function(err, result){
	       
        if (err) {
            return res.status(401).send({
                status: false,
                message: "Error in query.",
                statusCode: 401,
                data: {}
            });
        }

        if (!result[0]) {
            return res.status(200).send({
                status: true,
                message: "Mobile no. is available",
                statusCode: 200,
                data: {}
            });

        } else if (result[0]) {

           return res.status(401).send({
                status: false,
                message: "Mobile no. is already registered.",
                statusCode: 401,
                data: {}
            });
        }

    });

};

     

// get all user list function ----
  
  exports.listAll = function(req, res){
	  User.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all  user list ",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	

// forgot password function ---

exports.forgotPassword = function(req, res) {
	  let new_password = generatePassword(req.body.new_password);
	  let data_to_save={  
	       
		  'new_password'            : req.body.new_password,
          'confirm_possword': req.body.confirm_possword
		
	     }
			
			
			User.find({'email':req.body.email},function (err,result){
		
		  if (err) {
		return res.status(401).send({
			status:false,
			message : "Error in query",
			statusCode:401,
			data: {}
			 
					
		   });
		  
		
		} 
		else if  (!result[0]) {
            return res.status(401).send({
                status: false,
                message: "Authentication failed.",
                statusCode: 401,
                data: {}
            });
			
		} else if (result[0]) {
     		       User.update({'email':req.body.email},data_to_save, function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: " password update successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    });
			}
			});		
  
};

  // reset password function ---
  exports.resetPassword = function(req, res) {
	  let new_password = generatePassword(req.body.new_password);
	  let data_to_save={  
	       
		  'new_password'    : req.body.new_password,
          'confirm_possword': req.body.confirm_possword
		
	     }
			
			
			User.find({'email':req.body.email},function (err,result){
		
		  if (err) {
		return res.status(401).send({
			status:false,
			message : "Error in query",
			statusCode:401,
			data: {}
			 
					
		   });
		  
		
		} 
		else if  (!result[0]) {
            return res.status(401).send({
                status: false,
                message: "Authentication failed. Email not found.",
                statusCode: 401,
                data: {}
            });
			
		} else if (result[0]) {
     		       User.update({'email':req.body.email},data_to_save, function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: " password reset successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    });
			}
			});		
  
};
  
  // update password function
  
  exports.updatePassword = function(req, res) {
	  let new_password = generatePassword(req.body.new_password);
	  let data_to_save={  
		  'new_password'    : req.body.new_password,
          'confirm_possword': req.body.confirm_possword
           }
			
			User.find({'_id':req.params.id},function (err,result){
		     
			  if(!result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "account not found.", 
                                statusCode: 422,
                                data: {}
			             });
			  } 
			  else {
     		       User.update({'_id':req.params.id},data_to_save, function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: "password update successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    })
			}
			});		
  
};

 // remove function
	   
	   exports.remove = function(req, res){
		   
	   User.deleteMany({}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove all user",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };

// verifyOTP function ----

exports.verifyOTP = function(req, res) {
    let  OTP = req.body.otp;
    DB.find({'user_id':req.body.user_id}, function(err, user) {
        if (err) {
            return res.status(401).send({
                status: false,
                message: "Error in query.",
                statusCode: 401,
                data: {}
            });

        } else if (user[0]){
                    DB.find({'email_id':req.body.email}, function(err, email) {
                        if (err) {
                            return res.status(401).send({
                                status: false,
                                message: "Error in query.",
                                statusCode: 401,
                                data: {}
                            });
                        }
              if(email[0]){
                      return res.status(422).send({
                                status: false,
                                message: "Email already is use.",
                                statusCode: 422,
                                data: {}
                       });
               }else if (user[0].otp == OTP) {
                let user_id = user[0].id;
                // perform otp update in db
                let password = generatePassword(req.body.password);

                DB.update({'email.id':req.body.email_id},{'password':req.body.password},{'user_id':req.body.user_id}, function(err, result) {
                    if(err){
                        return res.status(401).send({
                            status: false,
                            message: "Error in query.",
                            statusCode: 401,
                            data: err
                        });
                    } else {
                        if (result.affectedRows > 0) {
                            let token = jwt.sign({
                                email: email_id,
                                name: user[0].name,
                                _id: user[0].id
                            }, 'ghtjuj5545786754g*//');
                            let responseData = new Object();
                            responseData.name = user[0].name;
                            responseData.email = email_id;
                            responseData.status = user[0].status;
                            responseData.token = token;

                            return res.status(200).send({
                                status: true,
                                message: "Mobile verified successfully. Logging In user.",
                                statusCode: 200,
                                data: responseData
                            });


                        }
                    }
                });
            } else {
                return res.status(401).send({
                    status: false,
                    message: "Invalid otp.",
                    statusCode: 401,
                    data: {}
                });

            }
           });


        } else {

            return res.status(401).send({
                status: false,
                message: "Invalid user.",
                statusCode: 401,
                data: {}
            });

        }
    });

}

  // resendOTP function ---
exports.resendOTP = function(req, res) {
    let OTP = Math.floor(1000 + Math.random() * 9000);
    
    DB.find({'mobile_no': req.body.mobile_no}, function(err, user) {
        if (err) {
            return res.status(401).send({
                status: false,
                message: "Error in query.",
                statusCode: 401,
                data: {}
            });
        }

        if (user[0]) {
            let user_id = user[0].id;
            // perform otp update in db
          //  sql = "UPDATE `wf_users` SET `otp` =" + OTP + " WHERE `wf_users`.`id` =" + user_id;
            DB.query({'user_id':req.body.user_id},{'OTP' :req.body.otp}, function(err, result) {
                if (err) {
                    return res.status(401).send({
                        status: false,
                        message: "Error in query.",
                        statusCode: 401,
                        data: {}
                    });
                } else {
                    if (result.affectedRows > 0) {
                        msg91.send(req.body.mobile, "Your 4 digit OTP for WFM Supplier registration is " + OTP, function(err, response) {
                            if (err) {
                                return res.status(401).send({
                                    status: false,
                                    message: "Error in sending OTP.",
                                    statusCode: 401,
                                    data: {}
                                });
                            } else {
                                return res.status(200).send({
                                    status: true,
                                    message: "Otp sent Successfully",
                                    statusCode: 200,
                                    data: {}
                                });
                              }

                        });
                    }
                }
            });


        } else {
            return res.status(401).send({
                status: false,
                message: "Mobile no. is not registered with us.",
                statusCode: 401,
                data: {}
            });
        }

    });

}

// set location ---

exports.setLocation = function(req, res) {
	let Lat=parseFloat(req.body.lat);
	let Long=parseFloat(req.body.long);
	let user_id= req.body.user_id;
	 let last_login = new Date();
     last_login = last_login.toISOString();
	
	  let loc = { 
	            "user_id":req.body.user_id,
				 "loc": { 
					 "type": "Point",
					 "coordinates": [Lat,Long]
				 },
				 "updated_at":last_login
			 }
		
	User.findOne({
        user_id: req.body.user_id
    }, function(err, result) {
	
	if(result){
		    
			User.findOneAndUpdate({
			 _id: result._id
			},loc,{upsert: true},function(err, location) {
				//console.log(res);
				if (err) {
					res.status(422).send({
						status: false,
						message: "Error in Updating Location",
						statusCode: 422,
						data: null
					});
				} else {
					res.status(200).send({
						status: true,
						statusCode: 200,
						message: "Location Updated Successfully",
						data: location,
					});
				}
				
			});
	    }else{
		   let new_User = new User(loc);
	       new_User.save(function(err, location) {
			      if (err) {
                        
                            return res.status(422).send({
                                status: false,
                                message: "Error in Saving Location",
                                statusCode: 422,
                                data: null
                            });
                        
                    } else {


                        return res.status(200).send({
                            status: true,
                            statusCode: 200,
                            message: "Location saved successfully",
                            data: location,
                        });
                    }
			   
			   
		   });
			
		}
	});
	

};		

// GET NearBy ----

exports.getNearBy = function(req, res) {

let Lat=parseFloat(req.body.lat);
let Long=parseFloat(req.body.long);
console.log(Lat);
console.log(Long);
let now = new Date();
let query = {
    "loc" : {
        $geoWithin : {
            $centerSphere : [[Lat,Long], milesToRadian(req.body.miles) ]
        }
    },
	status: "active",
	User_id: { $ne: "" },
	updated_at: { // 5 minutes ago (from now)
								$gt: new Date(now.getTime() - 1000 * 60 * 60)
	}
};

User.find(query).limit(5).exec( function(err, result) {
	     if (err) {

					res.status(422).send({
						status: false,
						message: "Something got wrong",
						statusCode: 422,
						data: err
					});
				} else {
					
					let locations = JSON.parse(JSON.stringify(result));
					let lat_longs= [];
					
					Object.keys(locations).map(function(objectKey, index) {
						let value = locations[objectKey];
						let temp=new Object();
						temp.User_id=value.User_id;
						temp.latitude=value.loc.coordinates[0];
						temp.longitude=value.loc.coordinates[1];
						temp.angle=value.angle;
						lat_longs[objectKey]=temp;
					});
					
					res.status(200).send({
						status: true,
						statusCode: 200,
						message: "Success",
						data: lat_longs,
					});
					}
});
	
};  