'use strict';

const express = require('express');
const route = express.Router();

const heroController = require('./hero.controller');

route.get('/heroes/', heroController.getHeroes);

route.get('/heroes/:id', heroController.getHeroById);

route.post('/heroes/', heroController.newHero);

route.put('/heroes/:id', heroController.updateHero);

route.delete('/heroes/:id', heroController.deleteHero);

module.exports = route;
