var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.ONE , function(){
    console.log('type1 event happened!');
});

emtr.on(eventConfig.ONE,function(){
    console.log('type1 event happened!');
});

emtr.on(eventConfig.TWO,function(){
    console.log('type2 event happened!');
});

emtr.on(eventConfig.THREE,function(){
    console.log('type3 event happened!');
});

emtr.emit(eventConfig.ONE);