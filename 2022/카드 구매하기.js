function pay(n, numArray) {
  const D = [];
  const P = numArray;

  P.unshift(0);

  for (let i = 0; i <= n; i++) {
    D.push(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (D[i] < D[i - j] + P[j]) {
        D[i] = D[i - j] + P[j];
      }
    }
  }

  console.log(D[n]);
}

pay(5, [10, 9, 8, 7, 6]);
