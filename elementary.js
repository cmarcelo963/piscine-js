function multiply(a, b) {
    let result = 0
    for (let i = b; i > 0; i--) {
        result += a
    }
    return result
}

function divide(a, b) {
    let result
    for (let i = a; i > b; i - b) {
        result += 1
    }
    return result
}

function modulo(a, b) {
    return a % b
}

console.log(divide(21, 7))