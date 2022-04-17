function sort(arr) {
  let _arr = arr.slice();
  _arr.sort((a, b) => a - b);

  let set = new Set(_arr);

  [...set].map(i => console.log(i))
}

sort([5, 5, 4, 3, 2, 1])
