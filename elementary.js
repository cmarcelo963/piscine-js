function multiply(a, b) {
    let result = 0
    for (let i = b; i > 0; i--) {
        result += a
    }
    return result
}

function divide(a, b) {
    let result=0
    for (let i = a; i > 0; i-=b) {
        result = result + 1
    }
    return result
}

function modulo(a, b) {
    let result=0
    for (let i = a; i > 0; i-=b) {
        result = i
    }
    return result
}

console.log(modulo(23, 7))