const express=require('express');
const router=express.Router();
const usersController=require('../contollers/users_controller');

router.get('/profile',usersController.user);

module.exports=router;