var Emitter = require('./emitter');

var emitr = new Emitter();

emitr.on('ring',function(){
    console.log('tring tring');
});

emitr.on('ring', function(){
    console.log('dring dring');
});

emitr.emit('ring');