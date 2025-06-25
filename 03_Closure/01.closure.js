// ex 1
const text = 'hello';
function func1() {
  console.log(text); // 출력 : hello
}
func1();

// ex2
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner${x}`); // 출력 : 0
  }
  inner();
}
outer();

// ex3
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner${x}`);
  }
  return inner;
}
const func1 = outer();
func1(); // 출력 : inside inner 0
