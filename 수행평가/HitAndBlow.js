let input = require("fs").readFileSync("/dev/stdin", "utf8");
const [N, arrA, arrB] = input.split("\n");
const arr = arrA.split(" ").map(Number);
const arr2 = arrB.split(" ").map(Number);

function HitandBlow(N, arr, arr2) {
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i] === arr2[j] && i === j) sum++;
      if (arr[i] === arr2[j] && i !== j) sum1++;
    }
  }
  console.log(sum + "\n" + sum1);
}

HitandBlow(N, arr, arr2);
