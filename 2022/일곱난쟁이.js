function seven(key) {
  let arr = [...key];
  const sum = key.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 0) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  arr.sort((a, b) => a - b);

  console.log(arr);
}

seven([20, 7, 23, 19, 10, 15, 25, 8, 13]);
