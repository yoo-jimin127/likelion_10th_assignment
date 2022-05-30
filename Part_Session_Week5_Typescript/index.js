"use strict";
var member_name = "jimin";
var phone = { phone: '010-0000-0000' };
var info = 123;
// 파라미터로 number, return 값으로 number
function myFunction(x) {
    return x * 2;
}
var john = [123, true];
var kim = { name: 'kim' };
var yoo = { name: 'yoo', age: '23' };
// class 문법
var User = /** @class */ (function () {
    function User(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    return User;
}());
