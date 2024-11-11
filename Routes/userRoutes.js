const express = require('express');
const router = new express.Router();

const userController = require('../Controllers/userController')



//defining paths
router.post('/user-register',userController.registerController);
router.post('/user-login',userController.loginController)

module.exports=router;