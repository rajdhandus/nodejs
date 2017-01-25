var buffer = new ArrayBuffer(8); // 64 bits of data (0s/1s) 8*8 = 64
var view = new Int32Array(buffer); // typed array ; a way to change the binary data in buffer; can hold 32 bits per Integer
view[0] = 5; // assign 5 using the first 32 bits [0s/1s]
view[1] = 15; // assign 15 using the second 32 bits [0s/1s]
view[2] = 100; // doesn't get created really!!

console.log(view);