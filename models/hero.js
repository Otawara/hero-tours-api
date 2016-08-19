'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroToursDB = require('../config-db').heroToursDB;

const HeroSchema = new Schema({
    name: String,
    level: Number
});

module.exports = heroToursDB.model('Hero', HeroSchema);
