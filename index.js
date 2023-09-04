const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port=8000;
const pageLayout=require('express-ejs-layouts');
const db=require('./cofig/mangoose');

//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./cofig/passport_local_stratgy');

//telling express to use static files
app.use(express.static('./assets'));


//Using middle ware
app.use(express.urlencoded({ extended: true }));
//Using cookies
app.use(cookieParser());

// Use a layout for views
app.use(pageLayout);
// extract styles and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




// Setting up our view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
   name:'techbook',
   secret:'blahsomthing',
   saveUninitialized:false,
   resave:false,
   cookie:{
      maxAge:(1000*60*100)
   }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


// use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
   if(err){
    console.log(`Error on running in server ${err}`);
   } 
   console.log(`Server is running on port ${port}`);
});