function round(value) {
    // console.log(value)
    if (value === 0) {
        return value
    }
    let newVal = value * 100
    let counter = 0
    // console.log(newVal)
    if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
            newVal = a
        }
        newVal += 100
    } else {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
            newVal = a 
        }
        newVal -= 100
    }
    if (newVal === 0) {
        return value
    }
    // console.log(counter)
    if (newVal >= -50 && newVal < 0){
        return counter
    } else if (newVal > 50) {
        counter++
    } else if (newVal < -50) {
        counter--
    }
    return counter

}
function ceil(value) {
    console.log(value)
    if (value === 0) {
        return value
    }
    if (value === 0) {
        return value
    }

    let newVal = value * 100
    let counter = 0
    if (value > 0) {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
        }
        return counter + 1
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
            // console.log(1)
            // console.log("here")
        }
    }
        // console.log("here")
        return counter--
}
function floor(value) {
    // console.log(value)
    if (value === 0) {
        return 0
    }
    let newVal = value * 100
    let counter = 0

    if (value > 0) {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
        }
        return counter
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
        }
        // console.log("here")
        return counter -1
    }
}
function trunc(value) {
    if (value === 0) {
        return value
    }

    let newVal = value * 100
    let counter = 0
    if (value > 0) {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
        }
        return counter
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
        }
    }
        // console.log("here")
        return counter
}
console.log(ceil(3.141592653589793))
console.log(ceil(-3.141592653589793))
console.log(ceil(2.718281828459045))
console.log(ceil(-2.718281828459045))
console.log(ceil(-0))