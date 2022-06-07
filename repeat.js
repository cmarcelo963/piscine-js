function repeat(a, b) {

    is.num = a => typeof a === 'number'
    is.str = a => typeof a === 'string'
    if (!b.is.num) {
        return
    }
    if (!a.is.str) {
        return
    }
    let toPrint = ""
    for (i = b; i > 0; i--) {
        toPrint += a
    }
   console.log(toPrint)
}