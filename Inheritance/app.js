var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}; // semi


var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';


john.greet();
jane.greet();

