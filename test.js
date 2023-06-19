
const Joi = require('joi');
const dataname="puneet singh";
console.log(dataname.length)




const validate_data = Joi.object({
  name:Joi.string().required(),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  rollno:Joi.string().required()




})



    const value = validate_data({ name: 'abc', email: 1994, rollno:"344" });
    console.log(value)




