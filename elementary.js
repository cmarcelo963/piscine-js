function multiply(a, b) {
    let result = 0

    if (b === 0 || a === 0) {
        return 0
    }
    if (a < 0) {
        for (let i = a; i < 0; i++) {
            result -= b
        }
    }
    if (b < 0) {
        for (let i = b; i < 0; i++) {
            result -= a
        }
    }

    if (a < 0 && b < 0) {
        for (let i = b; i !== 0; i++) {
            result += a
        }
    }

    if (a > 0 && b > 0) {
        for (let i = b; i !== 0; i--) {
            result += a
        }
    }


    return result
}

function divide(a, b) {
    let result = 0
    if (b > a) {
        result = 0
    }
    if (a > 0 && b > 0) {
        for (let i = a; i > b; i-=b) {
            result += 1
        
        }
    }
    if (a > 0 && b < 0) {
        //           123     -22     
        for (let i = a; i > 0; i += b) {
            result -= 1
        }
        result += 1
    }
    if (a < 0 && b > 0) {
        for (let i = a; i < 0; i += b) {
            result -=1
        }
        result += 1
    }
    if (a < 0 && b < 0) {
        for (let i = a; i < 0; i -= b) {
            result += 1
        }
        result -= 1
    }

    return result
}

function modulo(a, b) {
    let result = 0
    if (b === 0) {
        return
    }
    if (b > a) {
         result = a
    }
    if (a > 0 && b > 0) {
        for (let i = a; i > 0; i -= b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    if (a > 0 && b < 0) {
        for (let i = a; i > 0; i += b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    if (a < 0 && b > 0) {
        for (let i = a; i < 0; i += b) {
            result = i
        }
    }
    if (a < 0 && b < 0) {
        for (let i = a; i < 0; i -= b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    return result
}
// console.log(multiply(-123, -22))
// console.log(divide(-123, -22))
console.log(modulo(-123, 22))