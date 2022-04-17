function binary(l=0, r=8, s=8) {
    let arr = [1, 3, 4, 5, 7, 8, 9, 20, 30]

    while(l <= r) {
        let m = (l+r)/2

        if(arr[m] > s){
            r=m-1
            console.log(r)
        }else if(arr[m] < s){
            l=m+1
        }
    }
    console.log(arr[r])
}

binary();