const express = require('express');
const { getProduct, createProducts,deleteProduct, updateProduct} = require('../controllers/productsController');
const router = express.Router();

// Tausif comment 
// get all products
router.get('/', getProduct,next)
router.post('/', createProducts,next)
router.delete('/:id',deleteProduct,next)
router.put('/:id',updateProduct,next)

module.exports = router