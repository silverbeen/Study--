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


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

function ATM(n, arr) {
    let cnt = 0

  //  let _arr = arr.split(" ").sort((a,b) => a-b)

    for(let i = 0; i<n; i++) {
        for(let j = 0; j<=i; j++) {
          cnt += arr[j]
        }
    }
    console.log(cnt)
}

ATM(input[0], arr)
