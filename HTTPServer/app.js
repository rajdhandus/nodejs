var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var htmlResponse = fs.readFileSync(__dirname + '/index.html');
    res.end(htmlResponse);

}).listen(12345,'127.0.0.1');