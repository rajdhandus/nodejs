var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }

};

person.greet();


console.log(person['firstname']);
console.log(person.firstname);

var keyName = 'firstname';
console.log(person[keyName]);