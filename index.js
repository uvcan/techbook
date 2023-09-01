const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port=8000;
const pageLayout=require('express-ejs-layouts');
const db=require('./cofig/mangoose');

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

// use express router
app.use('/',require('./routes'));


// Setting up our view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
   if(err){
    console.log(`Error on running in server ${err}`);
   } 
   console.log(`Server is running on port ${port}`);
});