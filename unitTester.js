//https://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/
var request = require('supertest');
//var mongoose = require('mongoose');
describe('loading express', function () {
  var server;
  var port = 8080;
  var localUrl = 'localhost:'+port;
  before(function (done) {
    delete require.cache[require.resolve('./server')];
    //server = require('./server');
    router = require('./server');
    //mongoose.connect('mongodb://test:test@olympia.modulusmongo.net:27017/sy5Rabes'); // connect to database
  });
  // afterEach(function (done) {
  //   router.close(done);
  // });
  it('responds to /', function testSlash(done) {
    request(router)
      .get('/')
      .expect(200, done);
  });
  it('bears 202', function testPath(done) {
    request(router)
      .get('/api/bears')
      .expect(200, done);
  });
});

//https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/
// var should = require('should'); 
// var assert = require('assert');
// var request = require('supertest');  
// var mongoose = require('mongoose');
// //var winston = require('winston');

//   // var server;
//   // //var port = 8080;
//   // //var localUrl = 'localhost:'+port;

//   // before(function(done){
//   //   //mongoose.connect('mongodb://test:test@olympia.modulusmongo.net:27017/sy5Rabes'); // connect to database
//   //   //server = require('./server');
//   //   done();
//   // });

// describe('routing', function(){
//   var port = 8080;
//   var localUrl = 'localhost'+port;
//   before(function(done) {
//   // In our tests we use the test db
//     mongoose.connect('mongodb://test:test@olympia.modulusmongo.net:27017/sy5Rabes'); // connect to database
//     done();
//   });
//   describe('bears 200', function(){
//     it("suucess on bears", function(done){
//       var bear = {'name':'klaus'};
//       request(localUrl)
//         .post('/api/bears')
//         .send(bear)
//           // end handles the response
//         .end(function(err, res) {
//                 if (err) {
//                   throw err;
//                 }
//                 // this is should.js syntax, very clear
//                 res.should.have.status(200);
//                 done();
//         });
//     });
//   });
//   it('responds to /api', function testSlash(done) {
//     request(localUrl)
//       .get('/api')
//       .expect(200, done);
//   });
// });

