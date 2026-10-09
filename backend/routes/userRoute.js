import express from 'express'
import { Login, Register, SignOut } from '../controllers/authController.js'

const router = express.Router()


router.get("/signup", Register)

router.get("/login", Login)


router.get("/signout", SignOut)


export default router