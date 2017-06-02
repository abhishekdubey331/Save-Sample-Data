const mongoose = require('mongoose');

//Connect to the Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/inspired');

mongoose.connection.once('open',function () {

   console.log('Connection has been made ');

}).on('error',function (error) {

    console.log('Connection has Error',error);
});

