var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser  = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use('/', function(req, res, next){
    console.log('Request URL is :' + req.url);
    next();
});

app.get('/', function(req, res){
    res.render('index');
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Raj!</h1></body></html>');
});

app.get('/person/:id', function(req, res){
    //res.send('<html><head></head><body><h1>Hello ' + req.params.id + '</h1></body></html>');
    res.render('person', { ID : req.params.id });
});

app.post('/person', urlencodedParser, function(req, res){
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank you for sending JSON Data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
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

