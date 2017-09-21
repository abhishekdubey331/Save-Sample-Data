var new_hack = require('../models/model_hack');
var count_inc=require('../models/count_model');
var connection = require('../connection');


module.exports = {
    configure: function (app) {

        //All Routes for GET Requests Coming In--------------------------------------------------//

        app.post('/save_new',function (req,res) {

            var Hack = new new_hack();

            Hack.category= req.body.category;

            Hack.hack=req.body.hack;


            Hack.save(function(err, saved) {
                if(err) {
                    res.send('error saving hack');
                } else {
                    res.send(saved);
                }
            });

        });


        app.post('/get_hacks',function (req,res) {

            new_hack.find({_id: { $gt: req.body.number}},{},function(err,docs) {
                res.send(docs);
            });
        });



          
  app.get('/count',function (req,res) {

           count_inc.findOne({'user_id': 'abhishek'}, function (err, user) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {

            // Update each attribute with any possible attribute that may have been submitted in the body of the request

            // If that attribute isn't in the request body, default back to whatever it was before.
            user.count = req.body.firstName || (user.count)+1;
        
            // Save the updated document back to the database
            user.save(function (err, todo) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(user);
            });
        }
    });
        });






    }
};
