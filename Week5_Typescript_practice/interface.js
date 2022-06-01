"use strict";
function hello1(person) {
    console.log("Hello! This is ".concat(person.name, "!"));
}
// 인터페이스 생성
var person1 = {
    name: 'jimin',
    age: 23,
};
hello1(person1);
