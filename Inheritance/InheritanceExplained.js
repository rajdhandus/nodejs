var util = require('util');

function Person(){
    this.firstname = 'John';
    this.lastname = 'Doe';
};

Person.prototype.greet = function(){
    console.log('hello ' + this.firstname + ' ' + this.lastname);
};


function Policeman(){
    Person.call(this); // w/o this line the program will print hello undefined undefined
                       // with this line the program will print hello John Doe
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();