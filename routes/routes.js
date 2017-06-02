module.exports = {
    configure: function (app) {

        //All Routes for GET Requests Coming In--------------------------------------------------//

        app.get('/small', function (req, res, next) {

            res.render('small');

        });

        app.get('/large', function (req, res, next) {

            res.render('large');

        });



        app.post('/upload', upload.single('upl'), function (req, res) {
            useroperations.updateImage(req, res);
        });

        app.post('/large_upload', upload.single('upl'), function (req, res) {
            console.log(req.file);
            useroperations.update_large_image(req, res);
        });



    }
};
