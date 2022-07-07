const Product = require('../models/Product');
const httpStatus = require('../utils/httpStatus');
const router = require('express').Router();
// CREATE 
router.post("/create", async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        quantity: req.body.quantity,
        price: req.body.price,
        discountPercent: req.body.discountPercent,
        storeQuantity: req.body.storeQuantity,
        noComment: req.body.noComment,
        starCount: req.body.starCount
    })
    try {
        const savedProduct = await newProduct.save()
        return res.status(httpStatus.CREATED).json(savedProduct);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
})

module.exports = router;