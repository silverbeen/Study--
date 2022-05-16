const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [nSize, mSize] = input[0].split(" ").map(Number);
const aArray = input[1].split(" ").map(Number);
const bArray = input[2].split(" ").map(Number);

function margeSort(nSize, mSize, aArray, bArray) {
  let result = new Array(nSize + mSize).fill(0);
  let i = 0;
  let j = 0;
  let k = 0;
  for (k; k < result.length && i < nSize && j < mSize; k++) {
    if (aArray[i] < bArray[j]) {
      result[k] = aArray[i];
      i++;
    } else {
      result[k] = bArray[j];
      j++;
    }
  }
  while (i < nSize) {
    result[k] = aArray[i];
    i++;
    k++;
  }
  while (j < mSize) {
    result[k] = bArray[j];
    j++;
    k++;
  }
  console.log(...result);
}

margeSort(nSize, mSize, aArray, bArray);
//margeSort(4, 3, [2, 3, 9, 11], [4, 5, 6]);

 // let result = aArray.concat(bArray);

  // console.log(result.sort((a, b) => a - b).join(" "));