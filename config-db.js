'use strict';

const mongoose = require('mongoose');
// mongodb://localhost/hero-tours
const heroToursDB = mongoose.connect("mongodb://otawara:rouidate159357@ds063715.mlab.com:63715/hero-tours", (err) => {
    if(err) console.log(err);

    console.log(`The connection has been established on mongodb://localhost/hero-tours`);
});

exports.heroToursDB = heroToursDB;
