var Greeter = require('./es6_EvenEmitter');

var greeterObj = new Greeter();


greeterObj.on('greet', function(data){
    console.log('someone greeted ' + data);
});

greeterObj.on('greet', function(data){
    console.log('greeting is good.. keep doin it ');
});

greeterObj.greet('Raj');

greeterObj.greet('Anu');