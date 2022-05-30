// ====== 커스텀 타입 ========
type MyType = string | number;

// ====== 기본적 변수 타입 지정 =======
let member_name :string = "jimin";
let phone :{phone? : string } = { phone: '010-0000-0000'}; // 옵션
let front :{name: string, phone? : string} = {name: 'hyomin'};
let info :MyType = 123;

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
    name : string
}
let kim :Person = {name : 'kim'}

// 모든 object 속성 : 지정해줘야할 속성이 많은 경우
type Person2 = {
    [key :string] : string,
}
let yoo :Person2 = {name : 'yoo', age: '23'}

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

