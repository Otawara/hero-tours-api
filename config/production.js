'use strict';

// Production specific configuration
// =================================
module.exports = {
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
