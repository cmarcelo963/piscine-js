function nasa(n) {
    let res = ""
    let index = 0
    for (let a = 1; a < n; a++) {
        if ((a % 3 === 0) && (a % 5 === 0)) {
            res += 'NASA' + ' '
        } else if (a % 3 === 0) {
            res += 'NA' + ' '
        } else if (a % 5 === 0) {
            res += 'SA' + ' '
        } else {
            res += a + ' '
        }
    }
    if ((n % 3 === 0) && (n % 5 === 0)) {
        res += 'NASA'
    } else if (n % 3 === 0) {
        res += 'NA'
    } else if (n % 5 === 0) {
        res += 'SA' 
    } else {
        res += n 
    }
    return res
}
