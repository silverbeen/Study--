const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

[n, ...coins] = input;
[n, price] = n.split(" ");
price = Number(price);
coins = coins.map((i) => Number(i));

function Coin(n, price, coins) {
  let change = price;
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    let quo = Math.floor(change / coins[i]);
    change -= quo * coins[i];
    count += quo;
  }

  console.log(count);
}

Coin(n, price, coins);
