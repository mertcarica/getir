var mongoose = require('mongoose');
var {dbUrl} = require("../config/prod");

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

if (!db) {
    console.log("Database connection failed");
    process.exit(1);
}

db.once('open', function () {
  console.log('Database connection established')
})

module.exports = db