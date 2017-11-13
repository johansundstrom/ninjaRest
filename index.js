//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set upp express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjadb');
mongoose.Promise = global.Promise;

//first middleware
app.use(bodyParser.json());

//second middleware
app.use('/api', require('./routes/api'));

//third middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});


//Listen for request on env.port OR 3000
app.listen(process.env.port || 3000, function(){
    console.log('listening for request');
});