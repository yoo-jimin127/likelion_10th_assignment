// ===== var와 let의 차이점 (호이스팅) =====

// ====== 호이스팅으로 인한 var의 단점 ======
// console.log(a);
// var a = 2022;
// console.log(a);

// console.log(b);
// b = 1234;
// var b;
// console.log(b);

// ====== 전역변수와 지역변수 : 오류 발생 예시 ======
// var globalVar = 2;

// function foo() {
//     var localVar = 10;
// }

// ====== 전역변수와 지역변수 ======
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// ====== 변수명의 중복 선언 ======
// var sameVar = 1;
// console.log(sameVar);
// var sameVar = 2;
// console.log(sameVar);
