var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds054288.mlab.com:54288/addressbook1');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname : String,
    lastname : String,
    address : String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname : 'John',
    lastname : 'Doe',
    address  : '555 Mint Street'
});

john.save(function(err){
    if(err)
        throw err;
    console.log('Person Saved to MongoDB');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '556 Mint Street'
});

jane.save(function(err){
    if(err)
        throw err;
    console.log('Person Saved to MongoDB');
});