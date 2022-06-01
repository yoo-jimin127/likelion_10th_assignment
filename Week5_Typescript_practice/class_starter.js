"use strict";
var PersonClass = /** @class */ (function () {
    function PersonClass(age) {
        this.name = 'front';
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    return PersonClass;
}());
// 객체 생성
var person_class1 = new PersonClass(39);
var person_class2 = new PersonClass();
console.log(person_class1);
console.log(person_class1.age);
