'use strict';

const Hero = require('../../../models/hero');

// Get all Heroes
exports.getHeroes = (req, res) => {
    Hero.find({}).exec((err, heroes) => {
        if(err) {
            return res.status(500).send({message: err.message});
        }

        return res.status(200).send(heroes);
    });
};

// Get One hero
exports.getHeroById = (req, res) => {
    let id = req.params.id;
    Hero.findOne({_id: id}).exec((err, hero) => {
        if(err) {
            return res.status(500).send({message: err.message});
        }
        if(!hero) {
            return res.status(404).send({message: 'Hero not found'});
        }

        return res.status(200).send(hero);
    });
};

// Create new hero
exports.newHero = (req, res) => {
    let name = req.body.name || '';
    let level = req.body.level;

    if(!name) {
        return res.status(402).send({message: 'The hero name is required '});
    } else {
        let hero = new Hero(req.body);

        hero.save((err, hero) => {
            if(err) {
                return res.status(500).send({message: err.message});
            }

            return res.status(200).send(hero);
        });
    }
};

// Update hero
exports.updateHero = (req, res) => {
    let id = req.params.id;

    Hero.findOne({_id: id}).exec((err, hero) => {
        if(err) {
            return res.status(500).send({message: err.message});
        }
        if(!hero) {
            return res.status(404).send({message: 'Hero not found'});
        }
        hero.name = req.body.name || hero.name;
        hero.level = req.body.level || hero.level;

        hero.save((err, hero) => {
            if(err) {
                return res.status(500).send({message: err.message});
            }

            return res.status(200).send(hero);
        });
    });
};

// Delete hero
exports.deleteHero = (req, res) => {
    let id = req.params.id;

    Hero.remove({_id: id}).exec((err, hero) => {
        if(err) {
            return res.status(500).send({message: err.message});
        }
        if(!hero) {
            return res.status(404).send({message: 'Hero not found'});
        }

        return res.status(200).send(hero);
    });
};
