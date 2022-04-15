let map = new Map()
map.set("1", "silverbeen")
map.set("2", "glodbeen")
map.set("3", "glodbeen")

map.forEach((val, key) => {
    console.log(key, val)
})

let arr = [10, 2, 4, 1, 6, 4, 3]
let _arr = arr.slice()

_arr.sort((a, b) => a-b)

let set = new Set(...map)
console.log(...set)