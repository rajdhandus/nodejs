var EventEmitter = require('events');
var util = require('util');

function Greeter(){
    EventEmitter.call(this); // equivalent to super(); call the EvenEmitter's constructor
    this.greeting = 'Hello ';
};


util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data){
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
};

var greeterObj = new Greeter();

greeterObj.on('greet', function(data){
    console.log('someone greeted : '+ data);
});

greeterObj.greet('Raj');
greeterObj.greet('Anuja');
