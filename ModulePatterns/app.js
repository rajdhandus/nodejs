var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet2a = require('./greet2');
greet2a.greet();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World!!!';



var greet3a = require('./greet3');// fetched from module cache
greet3a.greet();
