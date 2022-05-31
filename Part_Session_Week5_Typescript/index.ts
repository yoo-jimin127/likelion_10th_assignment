// ====== 기본적 변수 타입 지정 =======
let member_name :string = "jimin";
let isHere :boolean = true;
let studentNum :number = 20221234;
let nullVal :null = null;
let undefinedVal :undefined;
let numArr :number[] = [1, 2, 3];


let phone :{phone? : string } = { phone: '010-0000-0000'}; // 옵션
let front :{name: string, phone? : string} = {name: 'hyomin'};

// ====== 타입 별칭(커스텀) ========
type MyType = string | number;
let info :MyType = 123;
info = 'front';

// ====== 데이터 타입 ======
// function returnAny(message) :any {
//     console.log(message);
// }

// returnAny('ANY value return');

// 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.
// 즉, JS 코드로는 컴파일 되지 않고, TypeScript 컴파일러에게 타입 정보를 알리기만 한다.
declare const maybe :unknown;

// const aNumber :number = maybe; // X : 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.

if (maybe === true) {
    const aBoolean :boolean = maybe;
    // const aString :string = maybe; // X : boolean type guard
}

if (typeof maybe === 'string') {
    const aString :string = maybe;
    // const aBoolean :boolean = maybe; // X : string type guard
}

function error(message :string) :never {
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop() :never {
    while(true) {
        console.log("loop")
    }
}

let a :string = "hello";
if (typeof a !== 'string') {
    a; // let a :never (잘못된 타입 지정의 실수를 막아줌)
}
a; // let a :string


function returnVoid(message :string) {
    console.log(message);
}


// ======== tuple 타입 =======
type Member = [number, boolean]; // tuple 타입 (첫째는 number, 둘째는 boolean)
let john:Member = [123, true];

let x :[string, number];
x = ["hello", 123];

// x = [10, "Mark"]
//x[2]

const person :[string, number] = ['jimin', 23];
const [first, second] = person;
// const [first, second, third] = person;

// ======== 함수 규격 ========
// 파라미터로 number, return 값으로 number
function myFunction(x : number) :number {
    return x * 2
}

// ======== object 지정 ========
type Person = {
    name : string,
    age : number,
    isLion : boolean,
}
let kim :Person = {name : 'kim', age : 20, isLion : true}

// 모든 object 속성 : 지정해줘야할 속성이 많은 경우
type Person2 = {
    [key :string] : string | number,
}
let yoo :Person2 = {name : 'yoo', age: '23', studentNumber: 1234}

// ========= class 문법 ==========
class User {
    name :string;
    age :number;
    phone: string;
    
    constructor(name :string, age :number, phone :string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

