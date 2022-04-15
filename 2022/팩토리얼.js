// const fs = require("fs");
// const n = fs.readFileSync("/dev/stdin");

function fac(n) {
  if (n <= 1) {
    // n 이 1이면 return
    // 0이 출력되면 안되니까 미리 return
    return 1;
  }
  return n * fac(n - 1);
}

console.log(fac(20));
