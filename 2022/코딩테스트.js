// const solution = (arr, isNumber) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = 0;

//       sum = arr[i] + arr[j];
//       if (sum === isNumber) console.log(true);
//       else if (sum !== isNumber) console.log(false);
//     }
//   }
// };

// hello

/***
 * 정수 배열에서 2개의 요소의 합으로 결과 정수와 일치여부를 반환한다.
 *
 * [방법 설명]
 * 입력: [3, 5, 5, -1, 4], 9
 * 출력: true
 *
 * [조건 설명]
 * 입력값은 정수배열과 정수
 * 입력된 배열내 수는 중복될 수 있음
 * 입력된 배열내 수는 정렬되어있지 않음
 *
 * [입/출력 예시]
 * [15, 7, 20, 3], 100 → false
 * [3, 5, 5, -1, 4], 9 → true
 ***/

const solution = (arr, isNumber) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = 0;

      sum = arr[i] + arr[j];
      if (sum === isNumber) return true;
      else if (sum !== isNumber) return false;
    }
  }
};

/***
 * 배열 순서 뒤집기
 *
 * [방법 설명]
 * 입력: [1, 2, 3, -1]
 * 출력: [-1, 3, 2, 1]
 *
 * [조건 설명]
 * 입력값은 숫자배열.
 *
 * [입/출력 예시]
 * [1, 2, 3, -1] → [-1, 3, 2, 1]
 * [6, 8, 2, 7, 7] → [7, 7, 2, 8, 6]
 ***/

function solution(arr) {
  let _arr = arr.slice();
  let strArr = [];

  for (let j = _arr.length - 1; j >= 0; j++) {
    strArr.push(_arr[j]);
  }

  return strArr;
}

console.log(solution([1, 2, 3, -1]));
