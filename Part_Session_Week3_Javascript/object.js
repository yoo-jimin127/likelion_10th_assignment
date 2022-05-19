// 본인의 이름 객체
// 나이, 학과, 학번, 이메일
let jimin = {
    age : 23,
    hakkwa : 'cs',
    hakbun : 19,
    email : "dbwlals~~"
};

// 1. 나이 -> 20 변경
jimin.age = 20;

// 2. 이메일 삭제
delete jimin.email;

// 3. 본인의 주소 프로퍼티 추가
jimin.address = '인천광역시';

// 클래스 생성
//  프론트 멤버

// 1. 클래스 정의 (이름, 번호)
class Person {
    constructor(name, num) {
        this.name = name;
        this.num = num;
    }
}
// 2. 클래스를 활용한 인스턴스 
const yoo = new Person('지민', '345');
const yoo1 = new Person('지민', '345');
const yoo2 = new Person('지민', '345');
const yoo3 = new Person('지민', '345');

console.log();