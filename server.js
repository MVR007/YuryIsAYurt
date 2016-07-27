//Server Setup
var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(3001);
console.log('Started server on port ' + 3001 + '.');

//Routing
app.use(express.static(__dirname + '/public'));