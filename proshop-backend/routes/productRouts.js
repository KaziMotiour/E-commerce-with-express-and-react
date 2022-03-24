import express from 'express'
const router = express.Router() 
import Porduct from '../models/productModel.js' 
import {getProducts, getProductById} from '../controllers/productControllers.js'

//@dec Fetch all the product
//@route GET /api/products
//@access Public
// router.get('/',getProducts)
router.route('/',).get(getProducts)

//@dec Fetch single the product
//@route GET /api/products/id
//@access Public
// router.get('/:id',getProductById)
router.route('/:id',).get(getProductById)

export default router