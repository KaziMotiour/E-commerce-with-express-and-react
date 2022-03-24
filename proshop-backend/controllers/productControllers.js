import Porduct from '../models/productModel.js' 
import asyncHandler from 'express-async-handler'


//@dec Fetch all the product
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async(req, res) =>{
    const products = await Porduct.find({ })
    res.json(products) 
})


//@dec Fetch single the product
//@route GET /api/products/id
//@access Public
const getProductById = asyncHandler(async(req, res) =>{
    const product = await Porduct.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error ('product not found')
    }
})

export{
    getProducts,
    getProductById
}