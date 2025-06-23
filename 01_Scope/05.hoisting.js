// hoisting ex1)
print();

function print() {
  console.log('jsjs');
}

// hoisting ex2)
console.log(a); // 오류발생 : 대충 a 를 초기화 하기 전에는 사용할 수 없다는 오류.
let a = 10;

// 정리
// 변수(let, const)와 클래스는 선언만 호이스팅이 되고
// 초기화는 안됨.
// 초기화 전에 변수에 접근하면 컴파일 에러가 발생.
// 명심할 것, 호이스팅이 된 것은 맞음. 그러나 선언까지만 호이스팅이 발생한 것. 따라서 초기화가 되지 않아 컴파일 에러가 발생하는 것.

// hoisting ex3)
console.log(func1); // 이녀석도 마찬가지로 컴파일 에러 발생 : 대충 func1 초기화 하기 전에는 사용할 수 없다는 오류.
let func1 = () => {};

// hoisting ex4)
const cat = new Cat(); // 이녀석도 마찬가지로 컴파일 에러 발생 : 대충 cat 초기화 하기 전에는 사용할 수 없다는 오류.
class Cat {}

// hoisting ex5)
let x = 1;
{
  console.log(x); // 이녀석도 마찬가지로 컴파일 에러 발생 : 대충 X 초기화 하기 전에는 사용할 수 없다는 오류.
  let x = 2;
}
