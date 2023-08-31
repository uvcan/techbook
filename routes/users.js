const express=require('express');
const router=express.Router();
const usersController=require('../contollers/users_controller');

router.get('/profile',usersController.profile);
router.get('/sigh-up',usersController.sighUp);
router.get('/sigh-in',usersController.sighIn);
router.post('/create',usersController.create);
router.get('create-session',usersController.createSession);

module.exports=router;