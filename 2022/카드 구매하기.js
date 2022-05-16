const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
const n = +input[0]
const numArray = input[1].split(' ').map(Number)

function pay(n, numArray) {
  const D = new Array(n + 1).fill(0);
  const P = numArray;

  P.unshift(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (D[i] < D[i - j] + P[j]) {
        D[i] = D[i - j] + P[j];
      }
    }
  }

  console.log(D[n]);
}

pay(n, numArray);
