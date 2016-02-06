exports.myMiddleware = function(req,res,next){
  var url = req.url;
  var method = req.method;
  
  req.timestamp = new Date();

}