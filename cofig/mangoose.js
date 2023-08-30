const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/techbook_development');
//   .then(() => console.log('Connected!'));

const db=mongoose.connection;


db.on('err',console.log.bind(console,'Erroe in connecting to the data base'));

db.once('open',function(){
    console.log('Connected to data Base :: MongoDB');
});
