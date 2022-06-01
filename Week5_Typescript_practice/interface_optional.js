"use strict";
function hello2(person) {
    console.log("Hello! This is ".concat(person.name, "!"));
}
var person2 = { name: 'jimin', age: 23 };
var person3 = { name: 'front' };
hello2(person2);
hello2(person3);
