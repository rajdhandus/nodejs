var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello Raj!</h1></body></html>');
});

app.get('/api', function(req, res){

    var jsonObject = {
        firstName : 'Rajkumar',
        lastName : 'Purushothaman',
        age : 30
    };
    res.json(jsonObject);
});

app.listen(port);

