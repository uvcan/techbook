const User=require('../models/user');

module.exports.profile=function(req,res){
   if(req.cookie.user_id){
        if(user){
            return res.render('user-profile',{
                title:'User Profile',
                user:user
            });
        } else{
                res.redirect('user/sigh-in');
            }
    }else{
        res.redirect('sigh-in');
    }
}

// render the sighUp page
module.exports.sighUp=function(req,res){
    return res.render('user_sigh_up',{
        title:'Techbook  | Sigh-Up'
    });
}

// render the sighIn page
module.exports.sighIn=function(req,res){
    return res.render('user_sigh_in',{
        title:'Techbool  | user-sighIn'
    });
}

// get the singh UP data
module.exports.create=function(req,res){
    // Sigh Up the user
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding the user');return};

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('Error in finding the user');return};
                return res.redirect('user/sigh-in');
            });
        }
        else{
            return res.redirect('back');
        }
    })
    
}

//sighIn and creating a session for the user
module.exports.createSession=function(req,res){
    // TO DO LATER
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('erroe in finding the user');return};
        //Handle the user
        if(user){
            //Handle password mathch
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            //stablishing th eidentity
            res.cookie('user-id',user.id);
            return res.redirect('user/profile');
        }
        else{
            // handle user not found 
            return res.redirect('back');
        }
    });


}