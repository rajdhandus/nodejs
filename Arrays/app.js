var obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var keyName = 'greet';

console.log(obj[keyName]);


var intArray = [];

intArray.push('1');
intArray.push('2');
intArray.push('3');

intArray.forEach(function(item){
    console.log(item);
});


var arr = [];

arr.push(function(){
    console.log('hello worrld 1');
});

arr.push(function(){
    console.log('hello worrld 2');
});

arr.push(function(){
    console.log('hello worrld 3');
});


arr.forEach(function(item){
    item();
});