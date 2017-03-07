// ./app/models/bear.js

var mongoose = require('mongoose');
var schema = mongoose.schema;

var bearSchema = new schema({
  name: string
});

module.exports = mongoose.model('Bear', bearSchema);