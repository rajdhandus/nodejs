var fs = require('fs');

//Synchronous read

var readable = fs.readFileSync(__dirname + '/config.txt', 'utf8');

console.log(readable);

//Asynchronous read

var aSyncRead = fs.readFile(__dirname + '/config.txt',function(error, data){
    if(error){
        console.log('Error Reading file: ' + error);
    }
    console.log(data.toString());
});

console.log('Done');