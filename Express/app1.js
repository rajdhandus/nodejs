var http = require('http');

http.createServer(function(req, res){
   console.log(req.url);
   res.writeHead(200, {});
   res.end('Hello World');
}).listen(8866);