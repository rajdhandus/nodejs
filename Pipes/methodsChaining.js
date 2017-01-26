var fs = require('fs');
var zlib = require('zlib');

var source_filename = __dirname + '/greet.txt';
var destination_filename = __dirname + '/greetcopy.txt';
var compressed_filename = __dirname + '/greet.txt.gz';

var readableStream = fs.createReadStream(source_filename); // create a readable stream
var writableStream = fs.createWriteStream(destination_filename); // create a writable stream
var compressedStream = fs.createWriteStream(compressed_filename); // create a writable stream for another file that happens to be compressed

var gzip = zlib.createGzip(); // return Gzip stream which is a transform(duplex) stream which can be written to and read from !! important for this to be transform(duplex) stream

readableStream.pipe(writableStream); // pipe data through to a txt file via the write-only stream
readableStream.pipe(gzip).pipe(compressedStream); // pipe data to Gzip Stream and read it.. now write it to a gz file.