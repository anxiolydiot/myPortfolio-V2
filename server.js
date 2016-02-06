var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.listen (PORT, function(){
  console.log('Listening on port %s', PORT);
});