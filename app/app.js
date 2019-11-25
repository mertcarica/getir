const express = require('express');
const app = express();
const bodyParser = require ('body-parser')
const routes = require('./routes')

const port =  5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, function(){
    console.log('listening on *:' + port);
});

module.exports = app;