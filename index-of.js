function indexOf (array, value, optional) {
    
    if (typeof optional === 'number') {
        for (let a = optional; a < array.length; a++) {
            if (value === array[a]) {
                return a
            }
        }
    } else if (Array.isArray(array)) {
        for (let a = 0; a < array.length; a++) {
            if (value === array[a]) {
                return a
            }
        }
    } 
    return -1
}

function lastIndexOf(array, value, optional) {
    if (typeof optional === 'number') {
        for (let a = optional; a >= 0; a--) {
            if (value === array[a]) {
                return a
            }
        }
    } else if (Array.isArray(array)) {
        for (let a = array.length; a > 0; a--) {
            if (value === array[a]) {
                return a
            }
        }
    }
    return -1
} 

function includes(array, value) {
    let result = false 
    for (let a = 0; a < array.length; a++) {
        if (value === array[a]) {
            result = true
        }
    }
    return result
}

// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))