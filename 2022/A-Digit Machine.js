function solution(k) {
  let array = [];
  for (const element of k) {
    array.push(element);
  }

  const firstIndex = array.findIndex((element) => element === 3);
  console.log(firstIndex);

  const changeIndex = array[firstIndex]
  array.splice(0, 0, changeIndex);
  array.slice(0, 0, )
  console.log(array);
}

solution([9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
