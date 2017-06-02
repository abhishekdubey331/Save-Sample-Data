var Uploader = require('s3-image-uploader');
var connection = require('../connection');
var bucket_small = 'https://s3-us-west-2.amazonaws.com/beinspiredsmall/';
var bucket_large = 'https://s3-us-west-2.amazonaws.com/beinspiredlarge/';
var small = require('../models/model_small');
var large =require('../models/model_large');


var uploader = new Uploader({
    aws: {
        key: "AKIAIXVIADF4TB3O2X5Q",
        secret: "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"
    }
});


//------------------get user details------------------------------------------------------------------------------------------------------------------
function Users() {


    this.updateImage = function (req, res) {

        uploader.upload({

                fileId: 'someUniqueIdentifier',
                bucket: 'beinspiredsmall',
                source: 'uploads/' + req.file.filename,
                name: req.file.filename
            },
            function (data) { // success
                console.log('upload success:', data);


                var newImage = new small();

                newImage.url= bucket_small + req.file.filename;
                newImage.downloads=0;

                newImage.save(function(err, image) {
                    if(err) {
                        res.send('error saving image');
                    } else {
                        console.log(image);
                        res.send(image);
                    }
                });
            },
            function (errMsg, errObject) { //error
                console.error('unable to upload: ' + errMsg + ':', errObject);
                // execute error code
            });
    };



    this.update_large_image = function (req, res) {

        uploader.upload({
                fileId: 'someUniqueIdentifier',
                bucket: 'motivationallarge',
                source: 'uploads/' + req.file.filename,
                name: req.file.filename
            },
            function (data) { // success
                console.log('upload success:', data);
                var newImage = new large();

                newImage.url= bucket_large + req.file.filename;
                newImage.downloads=0;

                newImage.save(function(err, image) {
                    if(err) {
                        res.send('error saving image');
                    } else {
                        console.log(image);
                        res.send(image);
                    }
                });
                // execute success code
            },
            function (errMsg, errObject) { //error
                console.error('unable to upload: ' + errMsg + ':', errObject);
                // execute error code
            });
    };



}

module.exports = new Users();
