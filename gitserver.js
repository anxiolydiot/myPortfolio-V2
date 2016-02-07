// this files is just to text node-github, may be used in server.js for this project

var GitHubApi = require("node-github");
var bodyParser = require('body-parser');
var express = require("express");


var app = express();
var PORT = 3000;

var GitHubApi = require("node-github");

var github = new GitHubApi({
    version: "3.0.0"
});
github.user.getFollowingFromUser({
    user: "anxiolydiot"
}, function(err, gitres) {
    console.log(JSON.stringify(gitres));

});


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/now.html");
  res.write('<li> login:' + gitres.login + '</li>');


});





app.listen (PORT, function(){
  console.log('Listening on port %s', PORT);
});