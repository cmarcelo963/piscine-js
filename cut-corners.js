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
    // console.log(1)

        }
        newVal += 100
    } else {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
            newVal = a 
    // console.log(2)

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
    // console.log(value)
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
    // console.log(3)

        }
        return counter + 1
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
    // console.log(10)

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
    // console.log(5)

        }
        return counter
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
    // console.log(6)

        }
        // console.log("here")
        return counter -1
    }
}
function trunc(value) {
    
    let counter = 0
    if (value > 0xfffffffff) {
        value -= 0xfffffffff;
        return trun(value) + 0xfffffffff;
    } else {
        return trun(value);
    }
    // trunc(value)
    // console.log(value)
    if (value === 0) {
        return value
    }

    let newVal = value * 100
    if (value > 0) {
        // console.log(8)
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

function trun(value) {
    let m = modulo(value, 1);
    if (m !== 0) {
        return value - m;
    } else {
        return value;
    }
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