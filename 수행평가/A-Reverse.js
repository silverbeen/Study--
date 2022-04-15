let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [number, S] = input.trim().split("\n");
let [L, R] = number.trim().split(" ").map((element) => parseInt(element));

function Reverse(L, R, string) {
  let sliceString = string.slice(L - 1, R).split("").reverse().join("");

  console.log(string.slice(0, L - 1) + sliceString + string.slice(R));
}

Reverse(L, R, S);
