function chunk(arr, num) {
    let newArr = []
    let tempArr = []
    let index = 0
    for (let a = 0; a < arr.length; a++) {
        tempArr = []
        for (let b = 0; b < num; b++) {
            if (arr[a] === undefined) {
                continue;
            }
           tempArr.push(arr[a])
           a++
        }
        newArr.push(tempArr)
        a--
    }
    return newArr
}


console.log(chunk(['a', 'b', 'c', 'd'], 3))