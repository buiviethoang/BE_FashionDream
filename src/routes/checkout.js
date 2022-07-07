const CheckOut = require('../models/CheckOut')
const httpStatus = require('../utils/httpStatus');
const router = require('express').Router();
// CREATE 
router.post("/create", async (req, res) => {
    const newProduct = new CheckOut({
        
    })
    try {
        const savedProduct = await newProduct.save()
        return res.status(httpStatus.CREATED).json(savedProduct);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
})

module.exports = router;