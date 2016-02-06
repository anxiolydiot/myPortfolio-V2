// dependencies 
var app = express();
var express = require('express');
var stormpath = require('express-stormpath');
var session = require('express-session');
var middleware = require('./middleware');
// dependencies done
var publicRoutes = require('./routes/public');
var privateRoutes = require('./routes/privare');
var apioutes = require('./routes/api');

// routes // 


var PORT = 3000;

app.use(middleware.myMiddleWare);
app.use(session({
  secret: 'dizzy ded 781e2g9e208gdhygrfhwj2yre',
  cookie : {
    maxAge: 70000

  },
  saveUnitialized : true,
  resave : false
}));
app.get('/', function(req,res){
  res.send("here at" + req.timestamp);
});



app.Listen(PORT, function(){
  console.log("listening on port" + PORT);
});