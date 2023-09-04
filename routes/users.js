const express=require('express');
const router=express.Router();
const usersController=require('../contollers/users_controller');
const passport=require('passport');

router.get('/profile',passport.checkAuthentication,usersController.user);
router.get('/sigh-up',usersController.sighUp);
router.get('/sigh-in',usersController.sighIn);


router.post('/create',usersController.create);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/user/sigh-in'}
),usersController.createSession);


module.exports=router;