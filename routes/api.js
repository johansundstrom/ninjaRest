//import { request } from 'http';

//Dependencies
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//list
router.get('/ninjas', function(req, res, next){
    /*
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });
    */
    Minja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parse.Float(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninja){
        res.send(ninjas);
    });
});


//add new ninja
router.post('/ninjas', function(req, res, next){
    // var ninja = new ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

//Update
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

//delete
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;