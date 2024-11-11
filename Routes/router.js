const express = require('express');
const router = new express.Router();

const productController = require('../Controllers/productController')
const jwtMiddleware = require('../middleware/jwtMiddleware');
const cartController  = require('../Controllers/cartController');


//defining paths
router.get('/all-products',productController.getAllProductsController);
router.get('/get-product/:id',productController.getProductDetailsById)
router.post('/add-wishlist',jwtMiddleware, productController.addToWishlistController)
router.get('/allWishListItems',jwtMiddleware,productController.getAllWishlistItemsController)
router.delete('/wishlist/removeItem/:id',jwtMiddleware,productController.deleteItemWishlistController)
router.post('/add-cart',jwtMiddleware,cartController.addToCartController)
router.get('/allCartItems',jwtMiddleware,cartController.getAllCartItemsContollerApi)
router.get('/cart/increment/:id',jwtMiddleware,cartController.incrementItem)
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementItem)
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)
router.delete('/cart/deleteOne/:id',jwtMiddleware,cartController.removeItem)


module.exports=router;
