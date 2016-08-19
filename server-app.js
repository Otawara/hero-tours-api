'use strict';

const express =require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const Hero = require('./models/hero');

const app = express();

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

const port = process.env.PORT || 3400;

// API Hero
app.use('/api/v1/', require('./routes/api/hero'));

// app.use('/', require('./routes/static'));

app.listen(port, function(err) {
    if(err) console.error(err);
    else console.log(`The magic happen in http://localhost:${port}`);
});
