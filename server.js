// ./server.js
//1) BASE SETUP
//<require calls>
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@olympia.modulusmongo.net:27017/sy5Rabes'); // connect to our database
var Bear = require('./app/models/bear');
//</>
//bodyParser to app configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


//2) set API routes
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//<more routes>
//<bears>
router.route('/bears')
  .post(function(req,res){//creates bear (accessed at POST http://localhost:8080/api/bears)
    
    var bear = new Bear(); //creates bear instance
    bear.name = req.body.name; //sets bear name

    //save the bear and check for errors
    bear.save(function(err){
      if(err)
        res.send(err);
      

      res.json({message: 'Bear created!'});
    });

  });
//</>
//</>
//3) register routes
app.use('/api',router);// all routes will use /api

//4) start server
app.listen(port);//list to port stored in var port
console.log('The magic happens on port; '+ port);
