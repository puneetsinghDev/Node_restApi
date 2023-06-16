const fs = require("fs");
const axios = require("axios");
require('dotenv').config();
const studentSchema = require('../models/workoutModel')

const token = process.env.ACCESS_TOKEN;
//get all workouts

const getProduct = async (req, res) => {
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
const createProducts = async (req, res) => {
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
};

const deleteProduct = async (req,res) => {
  console.log('delete')
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      //return res.json(error)
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
}

const updateProduct = async (req,res) => {
  console.log('update call')

}

module.exports = {
  getProduct,
  createProducts,
  deleteProduct,
  updateProduct
};
