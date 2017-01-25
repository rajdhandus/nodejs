function greet(callback_fn){
    var greeting = 'hello world';
    console.log(greeting);

    var callBackParam = {
        name : 'Raj'
    };
    callback_fn(callBackParam);
};



greet(function(data){
    console.log('call back 1 happened');
    console.log(data);
});

greet(function(data){
    console.log('call back 2 happened');
    console.log(data.name);
});