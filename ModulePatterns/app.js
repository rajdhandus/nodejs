var greet1 = require('./greet1'); // work with the returned module.exports
greet1();

var greet2 = require('./greet2').greet; // extract the greet attribute of module.exports and invoke it
greet2();

var greet2a = require('./greet2'); // work with the returned module.exports and then invoke using . operator
greet2a.greet();

var greet3 = require('./greet3'); //work with the returned object using module.exports
greet3.greet();
greet3.greeting = 'Changed Hello World!!!';

var greet3a = require('./greet3');// fetched from module cache
greet3a.greet();

var greet4 = require('./greet4');
var greet4Obj = new greet4();

greet4Obj.greet(); // create an object and invoke

greet4(); // just invoke 

var greet5 = require('./greet5');
greet5.greet();

