function Greetr(){
    this.greeting = 'Hello World!!!!';
    this.greet = function(){
        console.log(this.greeting);
    }

    console.log('how about me?');
}

module.exports = Greetr;