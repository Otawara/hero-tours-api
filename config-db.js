'use strict';

const mongoose = require('mongoose');

const heroToursDB = mongoose.connect("mongodb://localhost/hero-tours", (err) => {
    if(err) console.log(err);

    console.log(`The connection has been established on mongodb://localhost/hero-tours`);
});

exports.heroToursDB = heroToursDB;
