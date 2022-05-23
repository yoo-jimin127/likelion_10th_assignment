// Javascript : 동기적(Synchronous)
// 호이스팅된 이후 순차적으로 코드가 실행됨
console.log("sync 1");
console.log("sync 2");
setTimeout(function () {
    console.log("async 1");
}, 1000);
console.log("sync 3");

// 동기적 콜백함수
function printMessage(param_func) {
    param_func();
}

// 비동기적 콜백함수
function printDelayMessage(param_func, delay) {
    setTimeout(param_func, delay);
}

printDelayMessage(() => console.log('asynchronous - arrow function'), 3000);
printMessage(() => console.log('synchronous - arrow function'));

