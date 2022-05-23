// const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const [n, ...arr] = prompt("input : ").toString().trim().split(/\s/);
arr.forEach((element) => console.log(element));
arr.forEach((index) => console.log(typeof index)); // String

const numArr = [parseInt(...arr)];
numArr.forEach((element) => console.log(element)); // NaN

console.log(`[arr] - Math.min : ${Math.min(...arr)} Math.max : ${Math.max(...arr)}`) // arr 배열
console.log(`[numArr] - Math.min : ${Math.min(...numArr)} Math.max : ${Math.max(...numArr)}`) // parseInt 변환식 (numArr)