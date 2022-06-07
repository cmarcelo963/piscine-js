function reverse(value) {
    let str = ""
    let arr = []
    if (Array.isArray(value)) {
        for (let a = value.length-1; a >= 0; a--) {
            arr.push(value[a])
        }
        return arr
    }
    for (let a = value.length-1; a >= 0; a--) {
        str += value[a]
    }
    return str
}

console.log(reverse([1, 2, 3]))