var config = require('./server-config');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// CONFIG SERVER
//allows us to write cookies
app.use(cookieParser());

//allows server to run as proxy
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(express.static(config.static_site_root));


// FIRE IT UP

server.listen(config.port, function () {
  console.log("Express server listening on port %d", config.port);
});