const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// const  user = require('../contollers/users_controller');


// passport.use(new LocalStrategy({
//     usernameField:'email'
//     },
//     function(email,password,done){
//         //finding user and stablishing its identiy
//         User.findOne({email:email},function(err,user){
//             if(err){
//                 console.log('error in finding the user --> Passpost');
//                 return done(err);
//             }
//             if(!user || user.password != password){
//                 console.log('invalid username / password');
//                 return done(null,false);
//             }
//             return done(null,user);
//         });
//     }

// )) ;


passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    async function (email, password, done) {
        try {
            // Finding user and establishing its identity using async/await
            const user = await User.findOne({ email: email });
            if (!user || user.password !== password) {
                console.log('Invalid username/password');
                return done(null, false);
            }
            return done(null, user);
        } catch (err) {
            console.error('Error in finding the user --> Passport:', err);
            return done(err);
        }
}));



//Serializing the user to decide which key to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});


//Deserializes the user form the key in the data
// passport.deserializeUser(function(id ,done){
//     User.findById(function(id,done){
//         if(err){
//         console.group('error in finding the user -->Passport');
//         return done(err);
//         }
//         return done(null,user);
//     })
// });


passport.deserializeUser(async function (id, done) {
    try {
        // Finding user by ID and deserializing it using async/await
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found');
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.error('Error in finding the user --> Passport:', err);
        return done(err);
    }
});


module.exports=passport;