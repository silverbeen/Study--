// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var m = parseInt(input[0]);
// var n = parseInt(input[1]);

function gcd(m, n) {
  if (m % n === 0) {
    return n;
  }
  return gcd(n, m % n);
}

function max(m, n, gcd) {
  return (m * n) / gcd;
}

console.log(gcd(24, 18) + `\n` + max(24, 18, gcd(24, 18)));
