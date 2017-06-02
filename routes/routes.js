var new_hack = require('../models/model_hack');
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


        app.get('/get_hacks',function (req,res) {

            new_hack.find({},{},function(err,docs) {
                res.send(docs);
            });
        });


    }
};
