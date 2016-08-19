'use strict';

const mongoose = require('mongoose');
// mongodb://localhost/hero-tours
const heroToursDB = mongoose.connect("mongodb://otawara:rouidate159357@ds063715.mlab.com:63715/hero-tours", (err) => {
    if(err) console.log(err);

    console.log(`The connection has been established on mongodb://localhost/hero-tours`);
});

module.exports = {
    heroToursDB: heroToursDB,

    // Server IP
    ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

    // Server port
    port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            '11432',

    // MongoDB connection options
    mongo: {
    uri:    'mongodb://otawara:rouidate159357@ds063715.mlab.com:63715/hero-tours'
            // process.env.MONGOLAB_URI ||
            // process.env.MONGOHQ_URL ||
            // process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
    }
};
