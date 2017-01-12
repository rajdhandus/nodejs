function greet(){
    console.log('hello world!!....');
}
greet();

function logGreeting(fn){
    fn();
}

logGreeting(greet);

var greetMe = function(){
    console.log('hello Raj....');
}

greetMe();

logGreeting(greetMe);