function lope(N, arr) {
  arr.sort((a, b) => a - b);
  let min = arr[0] * N;

  for (let i = 0; i < N; i++) {
    weight = arr[i] * (N - i);
    if (min < weight) min = weight;
  }

  return min;
}

console.log(lope(2, [10, 15]));
