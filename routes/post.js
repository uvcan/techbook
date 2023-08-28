const express=require('express');
const router=express.Router();

const postController=require('../contollers/post_controller');


router.get('/post',postController.post);

module.exports=router;