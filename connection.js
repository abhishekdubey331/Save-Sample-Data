const mongoose = require('mongoose');
var count =require('./models/count_model');

//Connect to the Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/life_hacks');

mongoose.connection.once('open',function () {

   console.log('Connection has been made ');





   var count_ = new count();

     count_.count= 1;

         
            count_.save(function(err, saved) {
                if(err) {
                    res.send('error saving hack');
                } else {
                    console.log('count_created');
                }
            });

}).on('error',function (error) {

    console.log('Connection has Error',error);


     

    });

