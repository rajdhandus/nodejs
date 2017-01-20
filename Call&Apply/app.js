var obj = {
    name : 'Raj',
    greet : function(parm1, parm2){
        //console.log('hello '+ this.name); pre-es6 way
        console.log(`hello ${this.name}`);
    }
};

obj.greet();
obj.greet.call({name: 'Anu'});
obj.greet.apply({name: 'Kumar'});