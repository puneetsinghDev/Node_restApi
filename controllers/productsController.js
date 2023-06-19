const fs = require("fs");
const axios = require("axios");
require('dotenv').config();
const studentSchema = require('../models/workoutModel');
const { error } = require("console");
const {validate_data, validateUser}= require("../helper/validation");



const token = process.env.ACCESS_TOKEN;
//get all workouts

const getProduct = async (req, res) => {
 const dataname="puneet singh";
  console.log(nameValidation(dataname));
    studentSchema.find((error, data) => {
      try {
        if (error) {
          return res.json(error)
          //return next(error)
        } else {
          res.json(data)
        }
      } catch (error) {
         res.json(error)
      }
      
    })
};

// create new metafields for specific product
const createProducts = 
async (req, res) => {
// validate 
 
    const value = validateUser(req.body);
   if(value.error){
    console.log(value.error);
    res.json(value.error);
   }else{
    studentSchema.create(req.body, (error, data) => {
      try {
        if (error) {
          //return res.json(error)
          return next(error)
        } else {
          console.log(data)
          res.json(data)
        } 
      } catch (error) {
        res.json(error)
      }
      
    })
   }



 
 
};

const deleteProduct = async (req,res) => {
  console.log('delete')
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return res.json(error)
      //return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
}

const updateProduct = async (req,res) => {



  studentSchema.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return res.json(error)
      //return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
}
    


module.exports = {
  getProduct,
  createProducts,
  deleteProduct,
  updateProduct
};
