const express = require('express') 

const upload = require('../middlewares/upload.js')
const router = express.Router() ;
const authController = require('./../controllers/authController.js')
router.post('/register', upload.single('avatar'),authController.register)
router.post('/login' , authController.login)
module.exports = router