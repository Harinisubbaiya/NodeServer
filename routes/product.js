const express = require('express');
const { getProducts, newProduct, getOneProduct, updateProduct, deleteproduct } = require('../controllers/productControllers');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);
router.route('/product/:id')
                            .get(getOneProduct)
                            .put(updateProduct)
                            .delete(deleteproduct)

module.exports = router;