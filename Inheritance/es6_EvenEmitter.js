'use strict';

var EvenEmitter = require('events');
var util = require('util');

module.exports = class Greeter extends EvenEmitter{
    constructor(){
        super();
        this.greeting = 'hello ! ';
    }

    greet(data){
        console.log(` ${this.greeting} : ${data}`);
        this.emit('greet', data);
    }
}


