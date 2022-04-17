function lowerBound(n, arr, k) {
  let L = 0;
  let R = arr.length - 1;
  let m = 0;

    while(L < R) {
      m =  (R + L) / 2
      if(arr[m] < k){
        L=m+1
      }
    }

  console.log(m);
}

lowerBound(5, [1, 3, 5, 7, 7], 7);
