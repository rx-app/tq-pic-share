const ImageModel = require('../models/image');
const sidebar = require('../helpers/sidebar');

module.exports = {
    index: function (req, res) {
        const viewModel = { images: [] };

        ImageModel.find({}, {}, { sort: { timestamp: -1 } }, function (err, images) {
            if (err) throw err;
            viewModel.images = images;
            // res.render('index', viewModel);
            sidebar(viewModel, function (viewModel) {
                res.render('index', viewModel);
            });
        });
    },
};