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
// module.exports.create = function(req, res){
//     if (req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }

//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if (!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }



module.exports.create = async function(req, res) {
  try {
    if (req.body.password !== req.body.confirm_password) {
      return res.redirect('back');
    }

    const existingUser = await User.findOne({ email: req.body.email });

    if (!existingUser) {
      const newUser = await User.create(req.body);
      return res.redirect('/users/sign-in');
    } else {
      return res.redirect('back');
    }
  } catch (error) {
    console.error('Error during user signup:', error);
    return res.status(500).send('Internal Server Error'); // Handle the error appropriately
  }
};



//sighIn and creating a session for the user
module.exports.createSession=function(req,res){
    // TO DO LATER
}