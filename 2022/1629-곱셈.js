// const fs = require("fs");
// const [A, B, C] = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(BigInt);

function pow(a, b, C) {
  console.log(a, b);
  if (b == 0) {
    return BigInt(1);
  } else {
    const temp = pow(a, BigInt(parseInt(BigInt(b) / BigInt(2))));
    if (b % BigInt(2) == 0) {
      return (temp * temp) % C;
    } else {
      return (temp * temp * a) % C;
    }
  }
}

console.log(parseInt(pow(10, 11, 12)));
