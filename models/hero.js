'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: String,
    level: Number
});

module.exports = mongoose.model('Hero', HeroSchema);
