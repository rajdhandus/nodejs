var http = require('http');
var fs = require('fs');

var fileContent = fs.readFileSync('new2.json', 'utf-8');

var dataEx;

var fileContent_data = fs.readFile('new2.json', 'utf-8', function(err, data){
if(err){
    console.log("Error happened");
}
dataEx = data; 
});


var responseObj = {
        firstName : 'Rajkumar',
        lastName : 'Purushothaman',
        age : 30
    };

http.createServer(function(req,res){
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });

    res.end(dataEx);

}).listen(12343,'127.0.0.1');