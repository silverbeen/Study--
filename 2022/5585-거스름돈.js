// const money = parseInt(require("fs").readFileSync("/dev/stdin").toString());

function Money(money) {
  let change = 1000 - money;
  let count = 0;
  const coins = [500, 100, 50, 10, 5, 1];

  for (let i = 0; i < coins.length; i++) {
    // 거스름돈에서 500을 나누면 quo = 2가 된다.
    let quo = Math.floor(change / coins[i]);
    // 거스름돈은 줄어들고
    change -= quo * coins[i];
    // count 를 증가시킨다.
    count += quo;
  }

  return count;
}

console.log(Money(380));
