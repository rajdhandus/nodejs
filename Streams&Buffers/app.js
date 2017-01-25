var buffer = new Buffer('hello there');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());


console.log(buffer[0]);
//buffer[0] = 'B'; // cannot do this
buffer.write('B'); // can do this
console.log(buffer.toString());
