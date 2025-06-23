// scope : 식별자가 유의미한 범위
// 코드블럭 {}, if {}, for {}, function() {}
// 보통 스코프는 코드블럭 내부로만 설정됨
// 따라서 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음

//ex1
{
  const a = 10;
}
console.log(a);

//ex2
function add() {
  const msg = 'hello';
  console.log(msg);
}
console.log(add); // 오류발생
