var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use("/js", express.static("cope/js"));
app.use("/css", express.static("cope/css"));


app.get('/',function(req,res){
  res.sendfile(process.cwd()+"/routes/public/about_me.html");
});

app.get('/getatmetho', function(req,res){
  res.sendFile(process.cwd() + "/routes/public/contact.html");
});


app.listen (PORT, function(){
  console.log('Listening on port %s', PORT);
});