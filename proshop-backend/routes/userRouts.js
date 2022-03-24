import express from 'express'
const router = express.Router() 
import User from '../models/userModel.js'
import {authUser, registerUser, getUserProfile} from '../controllers/useControllers.js'
import {protect} from '../middleware/authMiddleware.js'

//@dec User login
//@route POST /api/users/login
//@access Public
router.post('/login', authUser)

//@dec register new user
//@route POST /api/users
//@access Public
router.post('/', registerUser)

//@dec Get user profile
//@route GET /api/users/profile
//@access private
router.route('/profile').get(protect, getUserProfile)

export default router
