var mongoose = require('mongoose'),
    assets = require('../config/assets'),
    config = require('../config/development');

function loadModels () {
    require('../models/user');
}

module.exports.connect = function () {
    mongoose.connect(config.db.uri, config.db.options, (err) => {
        if (err) {
            console.log('Cannot connect to database. Details below: ');
            console.log(err);
        } else {
            console.log('Connect to database successful.');
            loadModels();

            seedDatabase()
        }
    });
};

function seedDatabase() {
    if (config.db.seedDB.seed) {
        User = mongoose.model('User');

        User.remove({}, (err) => {
            if (err) {
                console.log('Cannot removed old data');
                return;
            } else {
                console.log('All old data was removed');
            }
        });

        User.create(config.db.seedDB.user, function (err) {
            if (err) {
                console.log('Cannot seed database');
                console.log(err);
            } else {
                console.log('Seed database complete. Account was create with config information');
            }
        })
    }
}
