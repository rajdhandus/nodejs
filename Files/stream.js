var fs = require('fs');

var readableStream = fs.createReadStream(__dirname + '/config.txt', { encoding : 'utf8', highWaterMark: 16*1024});

var writableStream = fs.createWriteStream(__dirname + '/config_copy.txt');

readableStream.on('data', function(chunk){
    console.log(chunk.length);
    writableStream.write(chunk);
});