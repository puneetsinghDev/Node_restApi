const express = require('express');
const { getProduct, createProducts,deleteProduct, updateProduct} = require('../controllers/productsController');
const router = express.Router();

// Tausif comment 
// get all products
router.get('/', getProduct)
router.post('/', createProducts)
router.delete('/:id',deleteProduct)
router.put('/:id',updateProduct)  //put 

module.exports = router