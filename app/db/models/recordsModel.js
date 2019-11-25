var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordsSchema = new Schema({
    key: String,
    createdAt: Date,
    totalCount: Number
  })
  
module.exports = mongoose.model('records', recordsSchema);   