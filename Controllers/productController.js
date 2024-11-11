const products = require('../Models/productModel');
const wishlists = require('../Models/wishlistModel');

//get all products
exports.getAllProductsController = async (req, res) => {
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(401).json(err)
    }
}

//get product by ID

exports.getProductDetailsById = async (req, res) => {
    const { id } = req.params;
    console.log('id=', id);

    try {
        const product = await products.findOne({ id })
        res.status(200).json(product)

    } catch (err) {
        res.status(401).json(err)
    }
}

//add to wishlist

exports.addToWishlistController = async (req, res) => {
    console.log('inside addToWishlistController')
    const { id, title, price, description, category, image, rating } = req.body;
    const userId = req.payload;
    console.log(id, title, price, description, category, image, rating, userId)
    try {
        const existingProduct = await wishlists.findOne({ id, userId })
        if (existingProduct) {
            res.status(406).json('product is already in your wishlist')
        }else{
            const newProduct  = new wishlists({
                id, title, price, description, category, image, rating, userId
            });

            await newProduct.save();
            res.status(200).json(newProduct)
        }
    } catch (err) {
        res.status(402).json(err)
    }
}

exports.getAllWishlistItemsController=async(req,res)=>{
    console.log('inside wishlist controller')

    const userId =req.payload;

    try {
       const allProducts = await wishlists.find({userId})
       res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.deleteItemWishlistController = async(req,res)=>{
    console.log('inside delete wishlist item')
    const{id}= req.params
    try {
        const removeItem = await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    } catch (error) {
        res.status(400).json(error)
    }
}