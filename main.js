
//: paramter for express, becomes parameter // 

// dependencies 
var app = express();
var express = require('express');
var stormpath = require('express-stormpath');
var session = require('express-session');
var middleware = require('./middleware');
// dependencies done

// routes // 
var publicRoutes = require('./routes/public');
var privateRoutes = require('./routes/private');
var apioutes = require('./routes/api');

// routes done // 


var PORT = 3000;

//to handle middleware // 


app.use(middleware.myMiddleWare);
app.use(session({
  secret: 'dizzy ded 781e2g9e208gdhygrfhwj2yre',
  cookie : {
    maxAge: 70000

  },
  saveUnitialized : true,
  resave : false
}));

//to handle middleware end // 

app.get('/', function(req,res){
  res.sendFile(process.cwd() + "/routes/public/aboutme.html");
});

app.get('/', function(req,res){
  res.sendFile(process.cwd() + "/routes/public/contact.html");
});

app.Listen(PORT, function(){
  console.log("listening on port %s" + PORT);
});