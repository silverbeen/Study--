function fibonacci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
//console.log(fibonacci(10));

// TODO:: stackoverflow 이슈 찾아보기
// stakoverflow 이슈 해결 코드
function sum(n) {
  if (n < 2) return n;
  return 2 * sum(n / 2) + ((n + 1) / 2) * ((n + 1) / 2);
}

console.log(sum(20000));
