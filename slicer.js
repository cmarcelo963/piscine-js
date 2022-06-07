function slice(value, cut, optional) {
    let resultString = ""
    let resultArray = []

    if (Array.isArray(value)) {
        if (typeof optional === 'number') {
            if (optional < 0) {
                if (cut < 0) {
                    for (let a = value.length + cut; a < (value.length + optional); a++) {
                        resultArray.push(value[a])
                    }
                    return resultArray
                }
                for (let a = cut; a < (value.length + optional); a++) {
                    resultArray.push(value[a])
                }
            } else {
                for (let a = cut; a < optional; a++) {
                    resultArray.push(value[a])
                }
            }
            return resultArray
        }
        if (cut < 0) {
            for (let a = value.length + cut; a < value.length; a++) {
                resultArray.push(value[a])
            }
        } else {
            for (let a = cut; a < value.length; a++) {
                resultArray.push(value[a])
            }
        }
        return resultArray
    }

    if (typeof optional === 'number') {
        if (optional < 0) {
            if (cut < 0) {
                for (let a = value.length + cut; a < (value.length + optional); a++) {
                    resultString += value[a]
                }
                return resultString
            }
            for (let a = cut; a < (value.length + optional); a++) {
                resultString += value[a]
            }
        } else {
            for (let a = cut; a < optional; a++) {
                resultString += value[a]
            }
        }
        return resultString
    }
    if (cut < 0) {
        for (let a = value.length + cut; a < value.length; a++) {
            resultString += value[a]
        }
    } else {
        for (let a = cut; a < value.length; a++) {
            resultString += value[a]
        }
    }
    return resultString
}
console.log(slice('abcdef', -3, -1))