const fs = require("fs");
const axios = require("axios");
require('dotenv').config();
var validator = require('validator');

const { error } = require("console");

const token = process.env.ACCESS_TOKEN;


function nameValidation (name) {

    
    return name;
    
};


function mailValidation(mail){
 return isEmail(mail)
 
};

   


module.exports = {
  nameValidation,
  mailValidation
};
