// ./server.js
//1) BASE SETUP
//<require calls>
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
var Bear = require('./app/models/bear');
//</>
//bodyParser to app configuration
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


//2) set API routes
var router = express.Router();              // get an instance of the express Router


router.get('/', function(req, res){//test route
  res.json({message:'horray! welcome to our api!'});
});

//<more routes>

//</>
//3) register routes
app.use('/api',router);// all routes will use /api

//4) start server
app.listen(port);//list to port stored in var port
console.log('The magic happens on port; '+ port);
