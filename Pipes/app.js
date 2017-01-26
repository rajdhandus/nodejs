var fs = require('fs');

var source_filename = __dirname + '/greet.txt';
var destination_filename = __dirname + '/greetcopy.txt';

var readableStream = fs.createReadStream(source_filename);
var writableStream = fs.createWriteStream(destination_filename);

readableStream.pipe(writableStream);