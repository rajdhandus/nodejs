var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/config.txt');
var writable = fs.createWriteStream(__dirname + '/config_copy_new.txt');
var compressed = fs.createWriteStream(__dirname + '/config_copy.gz')


var gzip = zlib.createGzip(); // given back a duplex gzip pipe

readable.pipe(writable); // writable not readable

readable.pipe(gzip).pipe(compressed); // read --> compress --> write to a .gz file