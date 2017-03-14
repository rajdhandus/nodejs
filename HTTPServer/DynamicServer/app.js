var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        fs.createReadStream(__dirname+'/../index.html').pipe(res);
    }
    else if(req.url==='/api'){
        res.writeHead(200, {'Content-Type':'application/json'});
        var responseObject = {
            firstName : 'Rajkumar',
            lastName : 'Purushothaman',
            age : 30
        };

        res.end(JSON.stringify(responseObject));
    }
    else{
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end();
    }

}).listen(4321, '127.0.0.1');