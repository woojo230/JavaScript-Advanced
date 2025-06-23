// quiz 1
{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  console.log(y); // 오류발생
}

// quiz 2
const text = 'global'; // 전역 변수 (전역 스코프, 글로벌 스코프)
{
  const text = 'local'; // 지역 변수 (로컬 스코프)
  {
    console.log(text); // local 출력, 만약 주석 처리한다면 global 출력
  }
}
