// const fs = require("fs");
// const axios = require("axios");
// require('dotenv').config();
// var validator = require('validator');

// const { error } = require("console");

// const token = process.env.ACCESS_TOKEN;


// function nameValidation (name) {

    
//     return name.length;
    
// };


// function mailValidation(mail){
//  return isEmail(mail)
 
// };

   


// module.exports = {
//   nameValidation,
//   mailValidation
// };


const Joi = require('joi');

const validate_data =(data)=> Joi.object({
  name:Joi.string().required(),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  rollno:Joi.string().required()




})

function validateUser(user)
{
    const JoiSchema = Joi.object({
      
        name: Joi.string().min(5).max(30).required(),
                    
        email: Joi.string().email() .min(5).max(50).optional(), 
        rollno:Joi.string().required()
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(user)
}



module.exports = {
  validate_data,
  validateUser
};
