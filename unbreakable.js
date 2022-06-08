function split(str, val) {
    let arr = []
    let i = 0
    for (let a = 0; a < str.length; a++) {
        if ((val === str[a]) || 
            ((a+1) === str.length)) {
            let newStr = ""
            if (a+1 === str.length) {
                newStr += str[i]
            }
            console.log(i)
            for (let b = i; b <= a; b++) {
                // console.log(str[b])
                newStr += str[b]
            }
            i = a + 1
            arr.push(newStr)
        }
    }
    return arr
}

console.log(split("ggg - ddd - b', ' - "))

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
