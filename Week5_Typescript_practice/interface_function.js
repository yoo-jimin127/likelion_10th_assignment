"use strict";
var person5 = {
    name: 'front',
    age: 10,
    hello: function () {
        console.log("hello! This is ".concat(this.name, "!"));
    }
};
var person6 = {
    name: 'front2',
    age: 10,
    hello: function () {
        console.log("hello! This is ".concat(this.name, "!"));
    }
};
person5.hello();
person6.hello();
