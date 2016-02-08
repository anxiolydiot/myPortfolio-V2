var express = require('express');
var bodyParser = require('body-parser');
var connect = require('connect');
var session = require('express-session');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));


app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));


app.get('/',function(req,res){
  res.sendfile(process.cwd()+"/routes/public/about_me.html");
});

app.get('/contact', function(req,res){
  res.sendFile(process.cwd() + "/routes/public/contact.html");
});

app.get('/mystuff', function(req,res){
  res.sendFile(process.cwd() + "/routes/public/rps.html");
});


app.listen (PORT, function(){
  console.log('Listening on port %s', PORT);
});
//app.use(express.static(__dirname + '/public'));