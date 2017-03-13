var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'application/json'});
    
    var responseObj = {
        firstName : 'Rajkumar',
        lastName : 'Purushothaman',
        age : 30
    };

    response.end(JSON.stringify(responseObj));

}).listen(6553, '127.0.0.1');