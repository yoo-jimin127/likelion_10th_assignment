"use strict";
// 구현체 (Interface를 implements)
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("Hello! This is ".concat(this.name));
    };
    return Person;
}());
var person7 = new Person('front');
var person8 = new Person('likelion');
person7.hello();
