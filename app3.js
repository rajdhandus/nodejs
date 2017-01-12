function Person(firstname, lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('hello ' + this.firstname + ' ' + this.lastname);
}


var john = new Person('John','Doe');

john.greet();

console.log(john.__proto__);

var jane = new Person('Jane', 'Doe');

jane.greet();

console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);