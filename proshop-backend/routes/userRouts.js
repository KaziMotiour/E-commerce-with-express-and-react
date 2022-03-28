import express from 'express'
const router = express.Router() 
import User from '../models/userModel.js'
import {authUser, registerUser, getUserProfile, updateUserProfile} from '../controllers/useControllers.js'
import {protect} from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
export default router
