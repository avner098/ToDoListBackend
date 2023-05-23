const express = require('express')
const {signupUser,loginUser}=require('../controllers/userController')



const router = express.Router()

//login
router.post('/Login',loginUser)

//signup
router.post('/Register',signupUser)

module.exports=router