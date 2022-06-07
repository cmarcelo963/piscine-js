function cutFirst(value) {
    
    if (typeof value === 'string') {
        let result = ""
        for (let a = 2; a < value.length; a++) {
            result += value[a]
        }
        return result
    }
    return
}
function cutLast(value) {
    
    if (typeof value === 'string') {
        let result = ""
        for (let a = 0; a < value.length - 2; a++) {
            result += value[a]
        }
        return result
    }
    return
}

function cutFirstLast(value) {
    if (typeof value === 'string') {
        let result = ""
        for (let a = 2; a < (value.length - 2); a++) {
            result += value[a]
        }
        return result
    }
    return
}

function keepFirst(value) {
    if (typeof value === 'string') {
        if (value.length > 1) {
            return value[0] + value[1]
        } else if (value.length === 1) {
            return value[0]
        }
    }
}

function keepLast(value) {
    if (typeof value === 'string') {
        if (value.length > 1) {
            return value[value.length-2] + value[value.length-1]
        } else if (value.length === 1) {
            return value[value.length-1]
        }
    }
}

function keepFirstLast(value) {
    if (typeof value === 'string') {
        if (value.length < 5) {
            return value
        } else {
            return value[0] + value[1] + value[value.length-2] + value[value.length-1]
        }
    }
}
