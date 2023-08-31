const User=require('../models/user');

module.exports.user=function(req,res){
    return res.render('user_profile',{
        title:'Techbook  |User-profile'
    });
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
    // TO DO LATER
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
}