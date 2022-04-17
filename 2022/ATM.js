function ATM(n, arr) {
    let cnt = 0

    arr.sort((a,b) => a-b)

    for(let i = 0; i<n; i++) {
        for(let j = 0; j<=i; j++) {
          cnt += arr[j]
        }
    }
    console.log(cnt)
}

ATM(5, [3, 1, 4, 3, 2])
